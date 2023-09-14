import {useEffect, useState} from "react";
import {Link, Navigate, Outlet} from "react-router-dom";
import axios from "axios";

function Profile() {
    const isLoggedIn = !!localStorage.getItem('access_token');
    const [userEmail, setUserEmail] = useState('loading...');
    const [userName, setUserName] = useState('loading...');
    const [userPhone, setUserPhone] = useState('loading...');

    let getUserData = () => {
        axios.get('http://localhost:8000/api/auth-user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(res => {
                console.log(res.data.data)
                setUserEmail(res.data.data.email);
                setUserPhone(res.data.data.phone);
                setUserName(res.data.data.name);
                console.log(userPhone)
            })
            .catch(err => {

            });
    }

    useEffect(() => {
        getUserData()
    })

    let loggedOutUser = (e) => {
        e.preventDefault();
        localStorage.removeItem('access_token');
        window.location.reload();
    }

    return (
        isLoggedIn ?
            <div className="container">
                <h1 className="display-6">Profile</h1>
                <p>phone : {userPhone}</p>
                <p>email : {userEmail}</p>
                <p>user name : {userName}</p>
                <Link to="/profile/ticket/all" className="btn btn-primary">tickets</Link>
                <Link to="/profile/orders" className="btn btn-primary">orders</Link>
                <button className="btn btn-danger" onClick={loggedOutUser}>logged out</button>
                <Outlet />
            </div> : <Navigate to="/login" replace={true}/>
    );
}


export default Profile;
