import React from 'react'
import { connect } from 'react-redux'

import LeftTop from './leftTop'
import LeftSearch from './leftSearch'
import LeftUsers from './leftUsers'

class leftWrapper extends React.Component{

    render(){
        return (
            <div className="leftWrapper">
                <LeftTop props={this.props.props} />
                <LeftSearch />
                <LeftUsers />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(leftWrapper)