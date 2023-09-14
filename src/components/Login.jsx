import {Navigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Login() {
    const isLoggedIn = !!localStorage.getItem('access_token');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const LOGIN_URL = 'http://localhost:8000/api/login';


    let loginUser = (e) => {
        e.preventDefault();
        setEmail(e.target.valueOf()[0].value);
        setPassword(e.target.valueOf()[1].value);

        axios.post(LOGIN_URL, {
            email: email,
            password: password
        })
            .then(res => {
                console.log(res)
                localStorage.setItem('access_token', res.data.data.token);
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        !isLoggedIn ?
            <div className="container">
                <h1>Login page</h1>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="shadow p-4" onSubmit={loginUser}>
                            <div className="form-group pt-3">
                                <label>email</label>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="form-group pt-3">
                                <label>password</label>
                                <input className="form-control" type="password"/>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Login</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div> : <Navigate to='/profile' replace={true}/>
    );
}

export default Login;
