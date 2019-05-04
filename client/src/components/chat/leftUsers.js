import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { Spinner } from '../commons/Spinner'

import { saveAllUsers } from '../../actions/user'
import { selectUser, isLoaded, showMessages } from '../../actions/chat'

class leftUsers extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount(){
        axios.get("/api/chat/users", {
                headers: {
                    'x-auth': this.props.user.auth.token
                }
            })
            .then(res => {
                const users = res.data.filter(user => user._id !== this.props.user.auth.id)
                this.props.dispatch(saveAllUsers(users))
                this.setState(() => ({ isLoaded: true }))
            })
            .catch(err => {
                console.log(err)
            })        
    }

    selectUser = (user, fullname) => {
        
        this.props.dispatch(selectUser(user ,fullname))
        axios.get(`/api/chat/messages/${user}`, {
                headers: {
                    'x-auth': this.props.user.auth.token
                }
            })
            .then(res => {
                this.props.dispatch(showMessages(res.data))
                this.props.dispatch(isLoaded(true))
            }) 

        
    }

    render(){
        return (
            <div className="users">
                { this.state.isLoaded ?
                    this.props.user.filteredUsers.map((user) => {
                        return (
                            <div key={user._id} className="item" onClick={() => {
                                    this.selectUser(user._id, user.fullname)    
                                }}>
                                <img className="userIcon" src="https://via.placeholder.com/100x100" alt="" />
                                <div className="details">
                                    <h4>{ user.fullname }</h4>
                                    <p>...</p>
                                </div>
                            </div>
                        )
                    })
                 : <div className="text-center mt-4 mb-4"><Spinner /></div> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(leftUsers)