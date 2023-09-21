import {Link} from "react-router-dom";

function Card(props) {
    return (
        <div className={'p-3 ' + props.gridSize}>
            <div className="card col-md-12 border-0 shadow">
                <img src={`https://prd.place/400?id=${props.product.original.data.id}`} className="card-img-top" alt="csdc" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.original.data.title}</h5>
                    <p className="card-text text-muted">{props.product.original.data.content}</p>
                    <p>price: {props.product.original.data.price}$</p>
                    <Link to={'/product/' + props.product.original.data.id} className="btn btn-sm btn-primary">view</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
