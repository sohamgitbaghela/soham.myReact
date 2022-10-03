import React, { useState } from "react";
import './CalculatorComponent.css';

function Calculator()
{
    const [myinput,setmyinput]= useState([]);
    const [check,setcheck]= useState(false);

    const numbtn=(val)=>{
        setmyinput(myinput+val);
        setcheck(true);
    }
    const oprbtn=(val)=>{
        if(check==true)
        {
            setmyinput(myinput+val);
            setcheck(false);       
        }
    }
    const equalbtn=()=>{
         let r=eval(myinput)
         if(r==undefined)
         {
            setmyinput(0);
         }
         else
         {
            setmyinput(r);
         }
    }
    const clearAll=()=>{
        setmyinput('')
    }

    return(
        <div className="App-content">
         <div className="calculator-Box">
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="title-wrapper">
                        <h1>calculator</h1>
                    </div>
                </div>
            <div className="row mt-3 mb-3">
                <div className="col-md-8">
                    <input type="text" className="form-control"  value={myinput} id="answer"/>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success w-100" onClick={()=>{clearAll()}} >AC</button>
                </div>
            </div>

            <div class="row mt-2">
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('1')}} id="one">1</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('2')}} id="two">2</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('3')}} id="three">3</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" id="minus" onClick={()=>{oprbtn('-')}}>-</button>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('4')}} id="four">4</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('5')}} id="five">5</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('6')}} id="six">6</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" id="multiply" onClick={()=>{oprbtn('*')}}>*</button>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('7')}} id="seven">7</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('8')}} id="eight">8</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('9')}} id="nine">9</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{oprbtn('/')}} id="divide">/</button>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{oprbtn('.')}} id="dot">.</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{numbtn('0')}} id="zero">0</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{equalbtn()}} id="equal">=</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-default w-100" onClick={()=>{oprbtn('+')}} id="plus">+</button>
                </div>
            </div>
        </div>
        <div className="col-md-6"> </div>
    </div>
        </div>
       
    )
}
export default Calculator;

