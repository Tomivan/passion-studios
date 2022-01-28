import React from "react";
import Trash from "../../assets/images/trash.png";
import Pencil from '../../assets/images/pencil.png';
import Sidenav from "../../components/sidenav/sidenav";
import "./orders.css";

const Orders = () => {
    return(
        <div className="orders">
            <Sidenav />
            <div className="orders-section">
            <h1>Orders</h1>
            <div className="order-top">
                <input type="text" placeholder="Seacrh" />
                <button className="product-add">Export</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Channel</th>
                        <th>OD ID</th>
                        <th>Main OD ID</th>
                        <th>RM</th>
                        <th>RM ID</th>
                        <th>Received At</th>
                        <th>Order Date</th>
                        <th>Complete</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Wraptious...ID</td>
                        <td>179263</td>
                        <td>237829</td>
                        <td>Yes</td>
                        <td>179263</td>
                        <td>179263</td>
                        <td>2020-11-10</td>
                        <td>No</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Wraptious...ID</td>
                        <td>179263</td>
                        <td>237829</td>
                        <td>Yes</td>
                        <td>179263</td>
                        <td>179263</td>
                        <td>2020-11-10</td>
                        <td>No</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Wraptious...ID</td>
                        <td>179263</td>
                        <td>237829</td>
                        <td>Yes</td>
                        <td>179263</td>
                        <td>179263</td>
                        <td>2020-11-10</td>
                        <td>No</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Wraptious...ID</td>
                        <td>179263</td>
                        <td>237829</td>
                        <td>Yes</td>
                        <td>179263</td>
                        <td>179263</td>
                        <td>2020-11-10</td>
                        <td>No</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Wraptious...ID</td>
                        <td>179263</td>
                        <td>237829</td>
                        <td>Yes</td>
                        <td>179263</td>
                        <td>179263</td>
                        <td>2020-11-10</td>
                        <td>No</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Orders;