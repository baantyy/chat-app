import React from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

import LeftWrapper from './chat/leftWrapper'
import RightWrapper from './chat/rightWrapper'
import { updateScreen } from '../actions/screen'

import { socket_url } from '../config'
const socket = io(socket_url)

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount(){
        this.props.user.auth ? this.setState(() => ({ isLoaded: true})) : this.props.history.push("/login")
        document.title = "Chat Room"
        window.addEventListener('resize', this.updateScreen)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreen)
    }

    componentWillMount(){
        this.updateScreen()
    }

    updateScreen = () => {
        this.props.dispatch(updateScreen({
            width: window.innerWidth,
            height: window.innerHeight
        }))
    }

    render(){
        return (
            <React.Fragment>
                { this.state.isLoaded &&
                    <div className="app" style={{"height": this.props.screen.height}}>
                        <div className="wrapper">
                            <LeftWrapper props={this.props} socket={socket} />
                            <RightWrapper socket={socket} />
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        screen: state.screen
    }
}

export default connect(mapStateToProps)(Home)
