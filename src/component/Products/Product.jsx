import { useDispatch, useSelector } from 'react-redux';
import { add } from "../../store/producSlice"
import { useNavigate } from "react-router-dom";
import products from "../Container/Product.json";

const Product = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();
   
    const handleAddToCart = (product) => {
        dispatch(add(product));
        console.log(product);
    };

    const handleBuyNow = (product) => {
        if (!authStatus) {
            navigate("/login");
        } else {
            navigate("/product");
        }
    };

    return (
        <div>
            <div className="productsWrapper">
                {products.map(product => (
                    <div className="card" key={product.id}>
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            style={{
                                width: "200px", 
                                height: "200px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
                                borderRadius: "10px" // Border radius
                            }} 
                        />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <div className="btn-container">
                            <button className="btn" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                            <button className="btn buy-btn ml-4" onClick={() => handleBuyNow(product)}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;