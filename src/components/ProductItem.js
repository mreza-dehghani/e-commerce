import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../Redux/Action'
import Loading from './Loading'

function ProductItem(props) {
    const id = props.match.params.id;
    const [product, setProduct] = useState([])

    useEffect(() => {
        console.log(props.match.params.id);
        fetch(`https://oneapi.ir/api/dk/digital/product/${id}`, {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : '56676c93f54562947c5fb92688ed6efb'
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setProduct(data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [])

    const addToCartHandler = (item) => {
        props.addToCart(item)
        console.log(true)
        setTimeout(()=>{
            console.log(props.cart)
        }, 5000)
    }

    return (
        <div className="container" id="product-item">
            <h1>محصول</h1>
            <Loading />
            <div id="product-item-container">
                <div id="product-info">
                    <h5>{product.title_fa}</h5>
                    <p> {product.title_en} </p>
                    <span> برند: {product.brand} </span>
                    <span> دسته بندی: {product.category} </span>
                    <br />
                    <h6>فروشنده: {product.seller}</h6>
                    <b> {product.price} تومان</b>
                    <p>موجودی: {product.status} </p>
                    <button type="button" onClick={() => addToCartHandler(product)}>اضافه به سبد خرید</button>
                </div>
                <div id="product-img">
                    <img src={product.image} alt={product.title_fa} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (item) => dispatch(addToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)