import React from "react";
import Sidenav from "../../components/sidenav/sidenav";
import Trash from "../../assets/images/trash.png";
import Pencil from "../../assets/images/pencil.png";
import "./setting.css";

const Setting = () => {
    return(
        <div className="settings">
            <Sidenav />
             <div className="settings-section">
            <h1>Settings</h1>
            <div className="settings-top">
                <input type="text" placeholder="Seacrh" />
                <div className="settings-buttons">
                    <button className="add-settings">Add</button>
                    <button className="export-settings">Export</button>
                    <button className="bulk-settings">Bulk Upload</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Region</th>
                        <th>Min Weight</th>
                        <th>Max Weight</th>
                        <th>Cost</th>
                        <th>RM</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Default UK</td>
                        <td>UK</td>
                        <td>0</td>
                        <td>100</td>
                        <td>0</td>
                        <td>True</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Default UK</td>
                        <td>UK</td>
                        <td>0</td>
                        <td>100</td>
                        <td>0</td>
                        <td>True</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Default UK</td>
                        <td>UK</td>
                        <td>0</td>
                        <td>100</td>
                        <td>0</td>
                        <td>True</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Default UK</td>
                        <td>UK</td>
                        <td>0</td>
                        <td>100</td>
                        <td>0</td>
                        <td>True</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Default UK</td>
                        <td>UK</td>
                        <td>0</td>
                        <td>100</td>
                        <td>0</td>
                        <td>True</td>
                        <td><img src={Pencil} alt="" /><img src={Trash} alt=""/></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Setting;