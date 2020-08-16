import React, { Component } from 'react'
import HeaderSm from './components/HeaderSm'
import './assets/index.scss'
import HeaderLg from './components/HeaderLg'
import {Route , Switch} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Mobile from './components/Mobile'
import Tablet from './components/Tablet'
import Laptop from './components/laptop'
import Machine from './components/Machine'
import Accoosseries from './components/Accoosseries'
import Console from './components/Console'
import Camera from './components/Camera'
import Computer from './components/Computer'
import ProductItem from './components/ProductItem'
import Dashbord from './components/Dashbord'

export default class App extends Component {

    render() {
        return (
            <div className="container-fluid app-style">
                <HeaderSm />
                <HeaderLg />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/about" component={About} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/product/mobile" component={Mobile} />
                        <Route path="/product/tablet" component={Tablet} />
                        <Route path="/product/laptop" component={Laptop} />
                        <Route path="/product/computer-part" component={Computer} />
                        <Route path="/product/office-machine" component={Machine} />
                        <Route path="/product/accosseries" component={Accoosseries} />
                        <Route path="/product/game-console" component={Console} />
                        <Route path="/product/camera" component={Camera} />
                        <Route path="/product-item/:id" component={ProductItem} />
                        <Route path="/dashbord" component={Dashbord} />
                    </Switch>
                </main>
                <Footer />
            </div>
        )
    }
}
