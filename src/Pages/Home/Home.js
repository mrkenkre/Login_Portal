import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aboutus from '../AboutUs/Aboutus';
import Contact from '../Contact/Contact';
import Jobs from '../Jobs/Jobs';
import Login from '../Login/Login';
import Navbar from '../../Components/Navbar/Navbar'
import CardComp from '../../Components/Cards/CardComp'
// var udata=[];
// var users=[];
//function Home() {

//export default class Home extends Component {

const Home = () => {


  const [users, setusers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:8080/user/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }).then(body => body.json()).then((data) => { setusers(data); })

    };
    getData();
  }, []);

  //render(){




  return (
    <div >
      <Navbar />

      <CardComp
        title={"Home Page"}
        desc={
          "Feel free to navigate to any of the pages from the above Navigation bar!"
        }
      />
<br/>
      <div class="d-flex justify-content-center">
        Users signed up so far: <br />
        {users.map((element) => (
          element.username + ", "
        ))}
      </div>
    </div>

  );
}
export default Home;