import React from "react";
import './AboutComponent.css';

function About()
{
    return(
        <div classNameName="App-content">
            <div className="container">
                <div className="box" id="box">
                    <div className="row">
                        <h3 id="output"></h3>
                    </div>
                    <div className="row">
                        <div className="mybox"><button className="mybtn" id="one"></button></div>
                        <div className="mybox"><button className="mybtn" id="two"></button></div>
                        <div className="mybox"><button className="mybtn" id="three"></button></div>
                    </div>
                    <div className="row">
                        <div className="mybox"><button className="mybtn" id="four"></button></div>
                        <div className="mybox"><button className="mybtn" id="five"></button></div>
                        <div className="mybox"><button className="mybtn" id="six"></button></div>
                    </div>
                    <div className="row">
                        <div className="mybox"><button className="mybtn" id="seven"></button></div>
                        <div className="mybox"><button className="mybtn" id="eight"></button></div>
                        <div className="mybox"><button className="mybtn" id="nine"></button></div>
                    </div>  
                </div>
            </div><br/>
            <div className="resetbtn" id="resetbtn">Reset</div>
        </div>

    )
}
export default About;

