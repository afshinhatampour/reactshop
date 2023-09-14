import Navbar from "./Navbar";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [placeholderClass, setPlaceholderClass] = useState('placeholder');

    function getProduct() {
        axios.get('http://localhost:8000/api/products/' + params.id)
            .then(res => {
                setProduct(res.data.data);
                setPlaceholderClass('');
            })
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="container placeholder-glow">
                <div className="row col-md-12">
                    <div className="col-md-8">
                        <h1 className={placeholderClass + " display-6"}>{product.title}</h1>
                        <p className={placeholderClass + " text-muted"}>{product.content}</p>
                        <button className="btn btn-primary">add to basket</button>
                    </div>
                    <div className="col-md-4">
                        <img src={`https://prd.place/400?id=${Math.floor(Math.random() * 10)}`} className="card-img-top"
                             alt="csdc"/>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    );
}

export default Product;