import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor() {
        super()
        this.usernameInput = React.createRef()
        this.passwordInput = React.createRef()
        this.state = ({
            haveError: false,
            errorMessage: ''
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        if(username === 'admin' && password === 'admin') {
            this.props.history.push('/dashbord')
        } else {
            console.log(false)
            this.setState({
                haveError: true,
                errorMessage: 'نام کاربری یا رمز عبور اشتباه است.'
            })
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
                                    <label>نام کاربری:</label>
                                    <input type="text" ref={this.usernameInput} /><br />
                                    <label>رمز عبور:</label>
                                    <input type="password" ref={this.passwordInput} /><br />
                                    <button type="submit">ورود</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
