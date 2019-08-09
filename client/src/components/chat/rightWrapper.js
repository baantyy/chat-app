import React from 'react'
import { connect } from 'react-redux'

import RightTop from './rightTop'
import RightMsg from './rightMsg'
import RightInput from './rightInput'

import { sendMessage } from '../../actions/chat'

class rightWrapper extends React.Component {

    componentDidMount(){
        this.props.socket.emit("addUser", this.props.user.auth.id)
        const self = this
        this.props.socket.on("newMessage", function(data){
            data.from === self.props.chat.id && data.to === self.props.user.auth.id && self.props.dispatch(sendMessage(data.message))
        })
    }

    render(){
        return (
            <div className="rightWrapper">
                { this.props.chat.isLoaded &&
                    <React.Fragment>
                        <RightTop socket={this.props.socket} />
                        <div className="msg">
                            <RightMsg socket={this.props.socket} />
                            <RightInput socket={this.props.socket} />
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
