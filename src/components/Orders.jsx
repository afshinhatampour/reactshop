import {Link} from "react-router-dom";

function Orders() {
    return (
        <div>
            <h1 className="display-6">Orders</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>counter</th>
                        <th>unique id</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>o-65484</td>
                        <td>received to customer</td>
                        <td><Link to="/profile/order/1" className="btn btn-sm btn-outline-primary">view</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>o-75784</td>
                        <td>ready to ship</td>
                        <td><Link to="/profile/order/2" className="btn btn-sm btn-outline-primary">view</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>o-16473</td>
                        <td>pending</td>
                        <td><Link to="/profile/order/3" className="btn btn-sm btn-outline-primary">view</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
