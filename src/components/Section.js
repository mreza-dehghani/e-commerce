import React, { Component } from 'react'
import DigiShopLogo from './image/DigiShopLogo.png'
import Banner from './image/banner.png'

export default class Section extends Component {
    render() {

        return (
            <div className="container section">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 text-center" id="introduction_"> 
                        <div>
                            <img src={DigiShopLogo} alt="Website Logo" />
                        </div>
                        <div>
                            <p>
                            دیجی شاپ با هدف تبدیل شدن به بزرگ ترین فروشگاه اینترنتی ایران، با گستره ای از کالاهای دیجیتال برای تمام اقشار جامعه و هر رده ی سنی، برای کاربران خود «تجربه لذت بخش یک خرید اینترنتی» را تداعی میکند. «ارسال سریع»، «ضمانت بهترین قیمت» و «تضمین اصل بودن کالا» سه اصل اولیه است که دیجی شاپ از نخستین روز تاسیس با بهره گیری از تجارب برترین فروشگاه های اینترنتی کشور تلاش کرده به آن پایبند باشد.                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 mb-2" id="banner_">
                        <img src={Banner} alt='banner' />
                    </div>
                </div>
            </div>
        )
    }
}
