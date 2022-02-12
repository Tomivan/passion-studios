import React from 'react';
import './add-products.css';

const AddProducts = () => {
        return (
            <>
            <form className="add-product-form">
                <label>Title</label>
                <input type="text" />
                <div className="flex-input">
                <div>
                <label>Inhouse SKU</label>
                <input type="text" />
                </div>
                <div className="right-input">
                <label>Client Suffix</label>
                <input type="text" />
                </div>
                </div>
                <div className="flex-input">
                <div>
                <label>Price($)</label>
                <input type="text" />
                </div>
                <div className='right-input'>
                <label>Weight(kg)</label>
                <input type="text" />
                </div>
                </div>
                <label>Website</label>
                <input type="text" />
                <div className="buttons">
                    <button className="dismiss"> Dismiss</button>
                    <button className="add-product">Add Product</button>
                </div>
            </form>
            </>
        )
}

export default AddProducts;