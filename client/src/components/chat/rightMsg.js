import React from 'react'
import { connect } from 'react-redux'

class rightMsg extends React.Component{

    componentDidMount(){
        this.scrollToBottom()
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight
        const height = this.messageList.clientHeight
        const maxScrollTop = scrollHeight - height
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
    }
      
    componentDidUpdate() {
        this.scrollToBottom()
    }

    render(){
        return (
            <div className="msgBox" ref={(div) => { this.messageList = div }}>
                {
                    this.props.chat.messages.map(msg => {
                        return (
                            <div key={msg._id} className={msg.from === this.props.user.auth.id ? 'rightMsg' : 'leftMsg'}>
                                { msg.message }
                            </div>
                        )
                    })
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

export default connect(mapStateToProps)(rightMsg)