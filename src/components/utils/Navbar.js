import React from 'react';

function Navbar(props) {


    return (
        <div className = "container-fluid m-0 p-0 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light row mx-whitespace">
                <div className = "col-2">
          <button className = "btn-invisible"><props.FontAwesomeIcon icon = {props.faTwitter} size = "2x" color = "#00acee"></props.FontAwesomeIcon></button>
                </div>
                <div className = "col-6">
                    This div depends on the current tab selected
                </div>
                <div className = "col-3">
                <form className="form-inline my-lg-0">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;