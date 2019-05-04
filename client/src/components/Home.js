import React from 'react'
import { connect } from 'react-redux'

import LeftWrapper from './chat/leftWrapper'
import RightWrapper from './chat/rightWrapper'

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
    }

    render(){
        return (
            <React.Fragment>
                { this.state.isLoaded &&
                    <div className="app">
                        <div className="wrapper">
                            <LeftWrapper props={this.props} />
                            <RightWrapper />
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)