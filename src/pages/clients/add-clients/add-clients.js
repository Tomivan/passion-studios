import React from 'react';
import './add-clients.css';

const AddClients = () => {
        return (
            <>
            <form className="add-client-form">
                <label>Business Name</label>
                <input type="text" />
                <label>Contact Name</label>
                <input type="text" />
                <label>Email Address</label>
                <input type="text" />
                <div className="buttons">
                    <button className="dismiss"> Dismiss</button>
                    <button className="add-product">Add Product</button>
                </div>
            </form>
            </>
        )
}

export default AddClients;