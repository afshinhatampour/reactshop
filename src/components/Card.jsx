import {Link} from "react-router-dom";

function Card(props) {
    return (
        <div className={'p-3 ' + props.gridSize}>
            <div className="card col-md-12 border-0 shadow">
                <img src={`https://prd.place/400?id=${Math.floor(Math.random() * 10)}`} className="card-img-top" alt="csdc" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-muted">{props.content}</p>
                    <p>price: {Math.round(Math.random() * 100)}$</p>
                    <Link to={'/product/' + props.productId} className="btn btn-sm btn-primary">view</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
