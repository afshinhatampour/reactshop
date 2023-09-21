import Slider from "./Slider";
import Card from "./Card";
import Banner from "./Banner";
import CarouselElement from "./CarouselElement";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [specialOffers, setSpecialOffers] = useState([]);
    const [mostViews, setMostViews] = useState([]);
    const [biggestDiscounts, setBiggestDiscounts] = useState([]);

    function getSpecialOfferProducts() {
        axios.get('http://localhost:8000/api/special-product')
            .then(res => {
                setSpecialOffers(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function getMostViewProducts() {
        axios.get('http://localhost:8000/api/most-view-product')
            .then(res => {
                setMostViews(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function getBiggestDiscountProducts() {
        axios.get('http://localhost:8000/api/most-view-product')
            .then(res => {
                console.log(res)
                setBiggestDiscounts(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getSpecialOfferProducts();
        getMostViewProducts();
        getBiggestDiscountProducts();
    }, []);

    return (
        <>
            <Slider/>
            <div className="container pt-3 pb-2">
                <h3 className="display-6">Special offer</h3>
                <div className="col-md-12 row">
                    {
                        specialOffers.map(specialOffer => {
                            return (<Card
                                product={specialOffer}
                                gridSize="col-md-3"/>)
                        })
                    }
                </div>
                <hr></hr>
            </div>
            <div className="container pt-3 pb-2">
                <h3 className="display-6">Most view</h3>
                <div className="col-md-12 row">
                    {
                        mostViews.map(mostView => {
                            return (<Card
                                product={mostView}
                                gridSize="col-md-3"/>)
                        })
                    }
                </div>
                <hr></hr>
            </div>
            <div className="container">
                <div className="col-md-12 row">
                    <Banner bgColor="488451"/>
                    <Banner bgColor="4868ff"/>
                    <Banner bgColor="ff6851"/>
                    <Banner bgColor="48dddd"/>
                </div>
            </div>
            <div className="container pt-3 pb-2">
                <h3 className="display-6">Biggest discount</h3>
                <div className="col-md-12 row">
                    {
                        biggestDiscounts.map(biggestDiscount => {
                            return (<Card
                                product={biggestDiscount}
                                gridSize="col-md-3"/>)
                        })
                    }
                </div>
                <hr></hr>
            </div>
            <div className="container pt-3 pb-2">
                <h3 className="display-6">Brands</h3>
                <CarouselElement/>
            </div>
        </>
    );
}


export default Home;
