import React, { Component } from 'react'
import {userSignUp} from '../Redux/Action'
import {connect} from 'react-redux'

class SignUp extends Component {
    constructor() {
        super()
        this.usernameInput = React.createRef()
        this.phonNumberInput = React.createRef()
        this.state = ({
            haveError: false,
            errorMessage: ''
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const username = this.usernameInput.current.value;
        const phonNumber = this.phonNumberInput.current.value;
        if(username === '' && phonNumber === '') {
            this.setState({
                haveError: true,
                errorMessage: 'نام کاربری یا رمز عبور اشتباه است.'
            })
        } else {
            const user = {
                username,
                phonNumber
            }
            this.props.userSignUp(user)
            this.props.history.push('/dashbord')
        }
    }

    render() {
        return (
            <div className="sign-up">
                <div className="container">
                    <h1>ورود به حسای کاربری</h1>
                    <div className="row pt-5">
                        <div className="col-12 col-md-6 col-lg-4 mx-auto">
                            <div id="sign-up-error" className={this.state.haveError === true ? 'showSignUpError' : 'notShowSignUpError'}>
                                <p> {this.state.errorMessage} </p>
                            </div>
                            <div id="sign-up-form">
                                <form onSubmit={this.onSubmitHandler}>
                                    <label>نام و نام خانوادگی:</label>
                                    <input type="text" ref={this.usernameInput} /><br />
                                    <label>شماره موبایل:</label>
                                    <input type="text" ref={this.phonNumberInput} /><br />
                                    <button type="submit">عضویت</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        userSignUp: (obj) => dispatch(userSignUp(obj))
    }
}

export default connect(null, mapDispathToProps)(SignUp)