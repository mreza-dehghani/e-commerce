import React, { Component } from 'react'

export default class ContactUs extends Component {
    constructor() {
        super()
        this.emailInput = React.createRef()
        this.nameInput = React.createRef()
        this.textInput = React.createRef()
    }

    submitHandler = (e) => {
        e.preventDefault();
        alert('ارسال شد')
    }

    render() {
        return (
            <div className="contact-us">
                <div className="container">
                    <h1>تماس با ما</h1>
                    <div id="contact-us-container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mx-auto">
                                <div id="contact-us-form-container">
                                    <form onSubmit={this.submitHandler}>
                                        <label>نام و نام خانوادگی شما:</label>
                                        <input type="text" />
                                        <label>آدرس ایمیل شما:</label>
                                        <input type="email" />
                                        <label>متن پیام:</label>
                                        <textarea></textarea>
                                        <button type="submit">ارسال</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mx-auto text-center">
                                <div>
                                    <h4>ما را در شبکه های اجتماعی دنبال کنید.</h4>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                        mreza_dehqani
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                        mrezavlb
                                    </a>
                                    <p>شماره تماس: ۰۹۳۶۷۵۱۵۴۸۴ </p>
                                    <h6>آدرس ایمیل ما:</h6>
                                    <p>mrezavlb@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
