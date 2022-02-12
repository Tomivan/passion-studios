import React, { useState } from "react";
import Modal from "react-modal";
import AddClients from "./add-clients/add-clients"
import Layout from "../../components/layout/layout";
import Trash from "../../assets/images/trash.png";
import Pencil from "../../assets/images/pencil.png";
import "./clients.css";

const Clients = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div className="clients">
             <Layout />
            <div className="clients-section">
            <h1>Clients</h1>
            <div className="clients-top">
                <input type="text" placeholder="Seacrh" />
                <button className="product-add" onClick={() => setModalIsOpen(true)}>Add</button>
                <Modal className="bg-modal" isOpen={modalIsOpen}>
                    <AddClients />
                </Modal>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client name</th>
                        <th>Role</th>
                        <th>Commented On</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Ralph Edwards</td>
                        <td>179263</td>
                        <td>5/9/12</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Ralph Edwards</td>
                        <td>179263</td>
                        <td>5/9/12</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Ralph Edwards</td>
                        <td>179263</td>
                        <td>5/9/12</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Ralph Edwards</td>
                        <td>179263</td>
                        <td>5/9/12</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Ralph Edwards</td>
                        <td>179263</td>
                        <td>5/9/12</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Clients;