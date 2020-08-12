import React, { Component } from 'react'
import SidebarNav from './SidebarNav'

export default class Brand extends Component {
    constructor() {
        super()
        this.state = {
            sidebarBg: false,
            rightMenu: false
        }
    }

    openSidebar = () => {
        this.setState({ rightMenu: !this.state.rightMenu });
        this.setState({ sidebarBg: !this.state.sidebarBg })

    }

    closeSidebar = () => {
        this.setState({ rightMenu: !this.state.rightMenu })
    }

    render() {
        return (
            <div className="brand-sm">
                <button id="bars-btn" onClick={this.openSidebar}>
                    <i className="fa fa-bars"></i>
                </button>
                <b id="brand-name"><span id="one">Digi</span><span id="two">Shop</span></b>

                <div 
                    id="sidebar-bg" 
                    className={this.state.rightMenu ? 'bg-displayBlock' : 'bg-displayNone'}
                    onClick={this.closeSidebar}
                ></div>

                <div className={this.state.rightMenu ? 'displayBlock' : 'displayNone'}  id="sidebar-wrapper">
                    <SidebarNav />
                </div>
            
            </div>
        )
    }
}
