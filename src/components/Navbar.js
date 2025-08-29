import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            display:false,
        }
    }
    handleOnclick = ()=>{
        this.setState({
            display:!this.state.display,
        })
        //alert("button ckicked");
    }
    render() {
        
        return(

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/general">Navbar</Link>
                    <button onClick={this.handleOnclick} className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                        </li>

                        <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                    </ul>
                    
                    </div>
                    
                    {this.state.display?<div className="Mobile">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link  onClick={this.handleOnclick}  className="nav-link active" aria-current="page" to="/general">Home</Link>
                                </li>

                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/business">business</Link></li>
                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/general">general</Link></li>
                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/health">health</Link></li>
                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/science">science</Link></li>
                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/sports">sports</Link></li>
                                <li className="nav-item"><Link  onClick={this.handleOnclick}  className="nav-link" to="/technology">technology</Link></li>
                            </ul>
                    </div>:<></>}
                    
                </div>
            </nav>
        </>
    
        );
    }
}