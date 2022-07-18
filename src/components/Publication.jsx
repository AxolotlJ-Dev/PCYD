import React, { useEffect } from "react";
import '../style/Publication.css';

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';


const Publication = (props) =>{

    useEffect(()=>{
        Aos.init({ duration: 1000 });
    }, []);

    return(
        <div>
          <div data-aos={ props.aosE } className="publiC">
            <h1> {props.texto} </h1>
            <img className=" img-fluid" src={props.imagen} alt={props.texto} />
          </div>
        </div>
    );
}

export default Publication;