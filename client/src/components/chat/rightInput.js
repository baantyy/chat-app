import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import uuid4 from 'uuid/v4'

import { sendMessage } from '../../actions/chat'

class rightInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
            typing: ''
        }
    }

    handleChange = (e) => {
        e.persist()
        const value = e.target.value
        this.setState({ message: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.message){
            const formData = {
                message: this.state.message,
                to: this.props.chat.id,
                from: this.props.user.auth.id,
                sentAt: Date.now(),
                _id: uuid4()
            }        
            this.setState(() => ({
                message: ''
            }))            
            axios.post("/api/chat/messages", formData, {
                    headers: { 'x-auth': this.props.user.auth.token }
                })
                .then(res => {
                    this.props.dispatch(sendMessage(res.data))
                    this.props.socket.emit("sendMessage", {
                        from: this.props.user.auth.id,
                        to: this.props.chat.id,
                        message: res.data
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    componentDidMount(){
        const { socket, user: { auth: { id }}, chat } = this.props
        const typing = setInterval(() => {
            if(this.state.message !== ''){
                socket.emit("typing", {
                    from: id,
                    to: chat.id,
                    status: true
                })
            }else{
                socket.emit("typing", {
                    from: id,
                    to: chat.id,
                    status: false
                })
            }
        }, 2000)
        this.setState({ typing })
    }

    componentWillUnmount(){
        clearInterval(this.state.typing)
    }

    render(){
        return (
            <div className="msgInput">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                           placeholder="Type your message"
                           onChange={this.handleChange}   
                           value={this.state.message}
                        />
                    <button><i className="fa fa-paper-plane"></i></button>
                </form>
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

export default connect(mapStateToProps)(rightInput)