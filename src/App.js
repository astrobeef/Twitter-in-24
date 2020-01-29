import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/utils/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>

      <i class="fas fa-camera"></i>
      <Navbar FontAwesomeIcon = {FontAwesomeIcon} faTwitter = {faTwitter}></Navbar>
      <div className="container-fluid bg-primary bg-light ">
        <div className="row mx-whitespace">
          <div className="col-2">
            <ul className="list-group">
              <i class="fab fa-twitter"></i>
              <button className="list-group-item"> Home</button>
              <button className="list-group-item">Explore</button>
              <button className="list-group-item">Notification</button>
              <button className="list-group-item">Messages</button>
              <button className="list-group-item">Bookmarks</button>
              <button className="list-group-item">Lists</button>
              <button className="list-group-item active">Profile</button>
              <button className="list-group-item">More</button>
            </ul>
              <button className = "col my-4">Tweet</button>
          </div>
          <div className="col-6 p-5"></div>
          <div className="col-4 p-5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
