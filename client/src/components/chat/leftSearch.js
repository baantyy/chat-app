import React from 'react'
import { connect } from 'react-redux'

import { searchUser } from '../../actions/user'

class leftSearch extends React.Component{

    searchUser = (e) => {
        const value = e.target.value.toLowerCase()
        const users = this.props.user.users.filter(user => user.fullname.toLowerCase().includes(value))
        this.props.dispatch(searchUser(users))
    }

    render(){
        return (
            <div className="search themeBg">
                <input type="text"
                       placeholder="Search Here" 
                       onChange={this.searchUser} 
                    />
                <i className="fa fa-search"></i>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(leftSearch)