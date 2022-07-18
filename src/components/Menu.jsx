import React from "react";
import '../style/Menu.css';

const Menu = () =>{

    function active(){
    
    const burger = document.getElementById('burger');
    const ul = document.querySelector('nav ul');

	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
}

    return(
        <div className="MenuStatico">
            <nav>
	        <p> Pink Creative & Design</p>
	
	    <button id="burger" onClick={active} className="burger">
		<div className="bar"></div>
		<div className="bar"></div>
	    </button>
	
	    <ul>
		    <li><a href="#Home">Home</a></li>
		    <li><a href="#Product">Product</a></li>
		    <li><a href="#Whoweare">who we are</a></li>
		    <li><a href="#Contact">Contact</a></li>
	    </ul>
            </nav>
        </div>
    );
}

export default Menu;