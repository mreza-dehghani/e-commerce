import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../Redux/Action'

function ProductItem(props) {
    const id = props.match.params.id;
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const obj = {

        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

    }

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
            console.log(data)
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
        // setTimeout(()=>{
        //     console.log(props.addedItems)
        // }, 2000)
        // console.log(i)
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