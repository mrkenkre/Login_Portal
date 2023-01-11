import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
import './Login.css'
//var Users = require('../../NodeJSAssg/app/models/Users');


//function Login() {

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        };

        this.Submit = this.Submit.bind(this);
    }

     Submit = async (e) => {
        var result="" ;
        e.preventDefault();
        const { username, password } = this.state;
        const data = {}
                data.username = username;
                data.password = password;
                try{
                result = await fetch("http://localhost:8080/validate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then((res)=>res.json()).then((data)=>{console.log(data,"response from api");
            if(data.status=="ok"){
                alert("Login successful!");
                window.location.href="./Home";
            }else {
                alert(data.error);
            }
            
            })
                // console.log("Rettt: "+JSON.stringify(result));
                // alert(result.toString());
               
            }
            catch(error){
                console.log("Error: "+error.message);
                alert(error.message);

            }

    }


    render() {

        return (
            <div>

                <div class="sidenav">
                    <div class="login-main-text">
                        <h4>Login Page</h4>
                        <p>Login here to access.</p>
                    </div>
                </div>
                <div class="main">
                    <div class="col-md-6 col-sm-12">
                        <div class="login-form">
                            <form id="myForm" onSubmit={this.Submit}>
                                {/* <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Email"/>
                    </div> */}
                                <div class="form-group">
                                    <label>Username:</label>
                                    <input type="text" class="form-control" id="username" placeholder="Username"
                                        onChange={e => this.setState({ username: e.target.value })}
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password"
                                        onChange={e => this.setState({ password: e.target.value })} />
                                </div>
                                <button type="submit" class="btn btn-black" value="Submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

//export default Login