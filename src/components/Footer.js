import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <img src={DigiShopLogo} alt="Logo" />
                        </div> */}
                        <div className="col-12 col-md-6 col-lg-8 mb-3">
                            <h3>دیجی شاپ</h3>
                            <h6>تجربه خوب خرید آنلاین با تضمین بهترین قیمت ها</h6>
                            {/* <p>این یک متن ازمایشی است</p> */}
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <p>
                                کلیه حقوق این سایت محفوظ است.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
