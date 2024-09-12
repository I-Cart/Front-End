import { Link } from "react-router-dom";
import  FooterList  from "./FooterList";

function Footer(){

    return (
        <div className="w-full h-26 bg-primary p-[10px] flex flex-col items-center ">
            <div>
                <Link to="/" className="flex items-center">
                    <img src="/assets/logo.png" alt="" className="w-24" />
                </Link>
            </div>
            <FooterList/>
            <div>
                <p>&copy; 2024 <span style={{color : 'white'}}>I-Cart</span></p>
            </div>
        </div>

        
        
    );
}

export default Footer;
