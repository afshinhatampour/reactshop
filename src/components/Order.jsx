import {useParams} from "react-router-dom";

function Order() {
    const params = useParams();
    return (
        <div>
            order id: { params.id }
            <h1 className="display-6">Order</h1>
        </div>
    );
}

export default Order;
