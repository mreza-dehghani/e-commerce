import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Concept from './Concept'
import Section from './Section'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            productList: [
                {to: '/product/mobile', name: 'موبایل', id: 0},
                {to: '/product/tablet', name: 'تبلت و کتابخوان', id: 1},
                {to: '/product/laptop', name: 'لپ تاپ', id: 2},
                {to: '/product/camera', name: 'دوربین', id: 3},
                {to: '/product/computer-part', name: 'کامپیوتر و تجهیزات جانبی', id: 4},
                {to: '/product/office-machine', name: 'ماشین های اداری', id: 5},
                {to: '/product/accosseries', name: 'لوازم جانبی کالای دیجیتال', id: 6},
                {to: '/product/game-console', name: 'کنسول بازی', id: 7},
            ]
        }
    }

    render() {
        const product_ = this.state.productList.map(item => {
            return(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={item.id}>
                    <div className="card">
                        <div className="card-body">
                            <Link to={item.to} className="link">
                                {item.name}
                                <i className="fa fa-angle-double-left"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="home">
                <Section />
                <div className="container" id="productList_">
                    <h3>دسته بندی کالاها</h3>
                    <div className="row">
                        {product_}
                    </div>
                </div>
                <Concept />
            </div>
        )
    }
}
