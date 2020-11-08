import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../Redux/Action'

function ProductItem(props) {
    const id = props.match.params.id;
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(id);
        fetch(`https://oneapi.ir/api/dk/digital/product/${id}`, {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : '3ead0a1faa18fc0380563b7eaecc31dd'
            }
        })
        .then(response => response.json())
        .then(data => {
            setProduct(data)
            setLoading(true)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [])

    const addToCartHandler = (i, p) => {
        props.addToCart(i, p)
        console.log(true)
    }

    if(loading === true) {
        return (
            <div className="container" id="product-item">
                <h1>محصول</h1>
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
                        <button type="button" onClick={() => addToCartHandler(product, product.price)}>اضافه به سبد خرید</button>
                    </div>
                    <div id="product-img">
                        <img src={product.image} alt={product.title_fa} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container pt-5" id="product-item">
                <div className="sipinner spinner-border text-primary"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (product, price) => {dispatch(addToCart(product, price))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)