
import React from "react";
import '../style/Contac.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contac = () =>{
    return(
        <div>
            <div className=" row mt-5">
                <div className=" linkR col-lg-6 justify-content-center" id="Contact" >
                    <h1> Contacto</h1>

                   <h3 className="Facebook"><a href="https://www.facebook.com/profile.php?id=100082846317080" >  <FontAwesomeIcon className=" svg" icon={ faFacebook } /> Facebok  </a></h3> 
                   
                   <h3 className=" WhatsApp"><a href=" https://wa.me/+528714009607"><FontAwesomeIcon className=" svg" icon={ faWhatsapp } />  Whatsapp </a></h3> 

                   
                   <h3 className=" Instagram" ><a href="https://www.instagram.com/pinkcreativeydesign/" ><FontAwesomeIcon className=" svg"  icon={ faInstagram } />  Instagram  </a></h3> 
                </div>
                <div className=" col-lg-6" id="Whoweare">
                    
                    <h1 className=" text-center info"> Quienes somos</h1>
                    <p className=" h3">
                        Somos una Micro empresa,dedicada a hacer logos, diseños, entre muchas cosas mas 
                        venimos desde mexico haciendo tus sueños realidad  
                    </p>
                </div>

            </div> 
        </div>
    );
}


export default Contac;