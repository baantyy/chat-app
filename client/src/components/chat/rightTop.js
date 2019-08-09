import React from 'react'
import { connect } from 'react-redux'

import { isLoaded } from '../../actions/chat'

class rightTop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            typing: {
                status: false
            }
        }
    }

    handleClose = () => {
        this.props.dispatch(isLoaded(false))
    }

    componentDidMount(){
        const self = this
        this.props.socket.on("showTyping", function(data){
            self.setState({ typing: data })
        })
    }

    render(){
        const { typing: { status, time }} = this.state
        const timeDiff = status ? (new Date() - new Date(time))/1000 : 0
        let typing = status ? timeDiff > 5 ? false : true : false
        console.log(typing, timeDiff)

        return (
            <div className="top themeBg">
                <button className="backButton" onClick={() => {
                        this.handleClose()    
                    }}>
                    <i className="fa fa-chevron-left"></i>
                </button>
                <img className="userIcon" src="https://via.placeholder.com/100x100" alt="" />
                <div className="menu">
                    <div className="name">
                        <h4>{ this.props.chat.fullname }</h4>
                        <p>{ typing ? 'typing...' : '...' }</p>
                    </div>
                    <div>
                        <button className="dropdown">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                        <div className="dropDownMenu">
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(rightTop)