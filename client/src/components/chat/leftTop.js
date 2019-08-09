import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import { connect } from 'react-redux'

import { removeUser } from '../../actions/user'

class leftTop extends React.Component{

    componentDidMount(){
        $("body").on("click", function(){
            $(".dropDownMenu").slideUp()
        })
        $(".dropdown").on("click", function(e){
            e.stopPropagation()
            $(this).siblings().slideToggle()
        })
    }

    logout = () => {
        axios.delete("/api/users/logout",{
                headers: {
                    'x-auth': this.props.user.auth.token
                }
            })
            .then(res => {
                this.props.props.history.push("/login")
                this.props.dispatch(removeUser())
                localStorage.removeItem('user')
                //this.props.socket.emit("logout", this.props.user.auth.id)
            })
    }

    render(){
        return (
            <div className="top themeBg">
                <img className="userIcon" src="https://via.placeholder.com/100x100" alt="" />
                <div className="menu">
                    <div>
                        <button className="dropdown">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                        <div className="dropDownMenu">
                            <button onClick={() => {
                                this.logout()
                            }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(leftTop)