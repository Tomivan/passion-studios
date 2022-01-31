import React from "react";
import Layout from "../../components/layout/layout";
import Bell from "../../assets/images/bell.png";
import "./dashboard.css";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Layout />
            <div className="dashboard-section">
                <h1>Dashboard</h1>
                <div className="dashboard-top">
                    <div className="card">
                        <p>Today</p>
                        <p><strong>11</strong></p>
                        <p>$900.00</p>
                    </div>
                    <div className="card">
                        <p>Yesterday</p>
                        <p><strong>11</strong></p>
                        <p>$900.00</p>
                    </div>
                    <div className="card">
                        <p>Week</p>
                        <p><strong>11</strong></p>
                        <p>$900.00</p>
                    </div>
                    <div className="card">
                        <p>Month</p>
                        <p><strong>11</strong></p>
                        <p>$900.00</p>
                    </div>
                </div>
                <h2><img src={Bell} alt="" className="bell"/>Orders to be fixed</h2>
                <div className="dashboard-bottom">
                    <div className="lower-card">
                        <div className="column">
                            <p>#</p>
                            <p>001</p>
                        </div>
                        <div className="column">
                            <p>RM</p>
                            <p>Yes</p>
                        </div>
                        <div className="column">
                            <p>Channel</p>
                            <p>Wraptious..OD</p>
                        </div>
                        <div className="column">
                            <p>Main OD ID</p>
                            <p>372839</p>
                        </div>
                        <div className="column">
                            <p>RM ID</p>
                            <p>178324</p>
                        </div>
                        <div className="column">
                            <p>OD Id</p>
                            <p>613913</p>
                        </div>
                        <div className="column">
                            <p>Received At</p>
                            <p>2020-11-10</p>
                        </div>
                    </div>
                    <div className="lower-card">
                        <div className="column">
                            <p>#</p>
                            <p>001</p>
                        </div>
                        <div className="column">
                            <p>RM</p>
                            <p>Yes</p>
                        </div>
                        <div className="column">
                            <p>Channel</p>
                            <p>Wraptious..OD</p>
                        </div>
                        <div className="column">
                            <p>Main OD ID</p>
                            <p>372839</p>
                        </div>
                        <div className="column">
                            <p>RM ID</p>
                            <p>178324</p>
                        </div>
                        <div className="column">
                            <p>OD Id</p>
                            <p>613913</p>
                        </div>
                        <div className="column">
                            <p>Received At</p>
                            <p>2020-11-10</p>
                        </div>
                    </div>
                    <div className="lower-card">
                        <div className="column">
                            <p>#</p>
                            <p>001</p>
                        </div>
                        <div className="column">
                            <p>RM</p>
                            <p>Yes</p>
                        </div>
                        <div className="column">
                            <p>Channel</p>
                            <p>Wraptious..OD</p>
                        </div>
                        <div className="column">
                            <p>Main OD ID</p>
                            <p>372839</p>
                        </div>
                        <div className="column">
                            <p>RM ID</p>
                            <p>178324</p>
                        </div>
                        <div className="column">
                            <p>OD Id</p>
                            <p>613913</p>
                        </div>
                        <div className="column">
                            <p>Received At</p>
                            <p>2020-11-10</p>
                        </div>
                    </div>
                    <div className="lower-card">
                        <div className="column">
                            <p>#</p>
                            <p>001</p>
                        </div>
                        <div className="column">
                            <p>RM</p>
                            <p>Yes</p>
                        </div>
                        <div className="column">
                            <p>Channel</p>
                            <p>Wraptious..OD</p>
                        </div>
                        <div className="column">
                            <p>Main OD ID</p>
                            <p>372839</p>
                        </div>
                        <div className="column">
                            <p>RM ID</p>
                            <p>178324</p>
                        </div>
                        <div className="column">
                            <p>OD Id</p>
                            <p>613913</p>
                        </div>
                        <div className="column">
                            <p>Received At</p>
                            <p>2020-11-10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Dashboard;