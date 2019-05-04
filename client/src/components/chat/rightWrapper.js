import React from 'react'
import { connect } from 'react-redux'

import RightTop from './rightTop'
import RightMsg from './rightMsg'
import RightInput from './rightInput'

import { sendMessage } from '../../actions/chat'

import io from 'socket.io-client'
const socket = io('/')

class rightWrapper extends React.Component {

    componentDidMount(){        
        socket.emit("addUser", this.props.user.auth.id)        
        const self = this
        socket.on("newMessage", function(data){
            data.from === self.props.chat.id && data.to === self.props.user.auth.id && self.props.dispatch(sendMessage(data.message))
        })
    }

    render(){
        return (
            <div className="rightWrapper">        
                { this.props.chat.isLoaded &&
                    <React.Fragment>
                        <RightTop />
                        <div className="msg">
                            <RightMsg socket={socket} />
                            <RightInput socket={socket} />
                        </div>
                    </React.Fragment>
                }
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

export default connect(mapStateToProps)(rightWrapper)