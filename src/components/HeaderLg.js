import React, { Component } from 'react'
import BrandLg from './BrandLg'

export default class HeaderLg extends Component {
    render() {

        return (
            <div className="header-lg">
                <div id="banner"></div>
                <BrandLg />
            </div>
        )
    }
}
