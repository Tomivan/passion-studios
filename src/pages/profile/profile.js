import React from "react";
import Sidenav from "../../components/sidenav/sidenav";
import { Link } from "@reach/router";
import "./profile.css";

const Profile = () => {
    return(
        <div className="profile">
            <Sidenav />
            <div className="profile-section">
                <h1>Profile</h1>
                <div className="user">
                    <img src="" alt="user" className="user-image" />
                    <div className="user-info">
                        <p>Upload a picture...</p>
                        <p>Et suspendisse turpis sed mauris vitae eros.<br/> 
                        Scelerisque neque elit egestas nec metus a. </p>
                        <div className="user-links">
                            <Link to="">Upload a picture</Link>
                            <Link to="">Take a picture</Link>
                            <Link to="">Remove a picture</Link>
                        </div>
                    </div>
                </div>
                <div className="basic-information">
                    <p>Basic Information</p>
                    <form className="form">
                        <label>Username</label>
                        <input type="text" />
                        <label>Company</label>
                        <input type="text" />
                        <label>First Name</label>
                        <input type="text" />
                        <label>Last Name</label>
                        <input type="text" />
                        <label>Email Address</label>
                        <input type="email" />
                        <label>Website</label>
                        <input type="text" />
                        <button className="basic-info-button">Update</button>
                    </form>
                </div>
                <div className="change-password">
                    <p>Change Password</p>
                    <form className="form">
                        <label>Current Password</label>
                        <input type="password" />
                        <label>New Password</label>
                        <input type="password" />
                        <label>Confirm Password</label>
                        <input type="password" />
                        <button className="change-password-button">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;