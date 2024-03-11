import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {add} from "../productslice/producSlice"

const Home = () => {
    const dispatch = useDispatch()
    const [products, setproducts] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setproducts(data)
        }

        fetchdata();
    }, []);

    function handleCart(product){
        dispatch(add(product))
        console.log(product)
    }
    return (
    <div><h1>Products</h1>
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button  className="btn" onClick={()=> handleCart(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
        </div>
    );

}

export default Home;
