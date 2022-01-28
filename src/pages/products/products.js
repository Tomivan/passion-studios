import React from "react";
import Trash from '../../assets/images/trash.png';
import Sidenav from "../../components/sidenav/sidenav";
import "./products.css";

const Products = () => {
    return(
        <div className="products">
            <Sidenav />
            <div className="products-section">
            <h1>Products</h1>
            <div className="product-top">
                <input type="text" placeholder="Seacrh" />
                <div className="product-buttons">
                    <button className="product-add">Add</button>
                    <button className="product-export">Export</button>
                    <button className="product-bulk">Bulk Upload</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Inhouse SKU</th>
                        <th>Client Suffix</th>
                        <th>Price ($)</th>
                        <th>Weight (Kg)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Scelerisque euismod tempus, dui nulla</td>
                        <td>AHJMO9081</td>
                        <td>-ISU00001</td>
                        <td>12.00</td>
                        <td>0.300</td>
                        <td><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Scelerisque euismod tempus, dui nulla</td>
                        <td>AHJMO9081</td>
                        <td>-ISU00001</td>
                        <td>12.00</td>
                        <td>0.300</td>
                        <td><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Scelerisque euismod tempus, dui nulla</td>
                        <td>AHJMO9081</td>
                        <td>-ISU00001</td>
                        <td>12.00</td>
                        <td>0.300</td>
                        <td><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Scelerisque euismod tempus, dui nulla</td>
                        <td>AHJMO9081</td>
                        <td>-ISU00001</td>
                        <td>12.00</td>
                        <td>0.300</td>
                        <td><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Scelerisque euismod tempus, dui nulla</td>
                        <td>AHJMO9081</td>
                        <td>-ISU00001</td>
                        <td>12.00</td>
                        <td>0.300</td>
                        <td><img src={Trash} alt=""/></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Products;