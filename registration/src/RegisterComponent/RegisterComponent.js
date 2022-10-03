import React from "react";
import './RegisterComponent.css';

function Register()
{
    return(
        <div className="App-content">
        <div className="Mybox">
        <form>
            <div className="form-group">
                <label htmlFor="name">Enter Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder=" Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Enter Email</label>
                <input type="email" className="form-control" id="email" placeholder=" Email" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Enter Phone</label>
                <input type="number" className="form-control" id="phone" placeholder=" Phone" />
            </div>
            <div className="form-group">
                <label htmlFor="state">Your State</label>
                <select  className="form-control" id="state" placeholder=" Phone" >
                    <option value={'madhyaPradesh'}>Madhya Pradesh</option>
                    <option value={'uttarPradesh'}>Uttar Pradesh</option>
                    <option value={'himachalPradesh'}>himachal Pradesh</option>
                    <option value={'rajsthan'}>Rajsthan</option>
                    <option value={'gujrat'}>Gujrat</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="city">Enter City</label>
                <input type="text" className="form-control" id="city" placeholder=" City" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Enter City</label>
                <textarea rows={2} cols={10} className="form-control" id="address" placeholder=" Address" >
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="gender" id="usergender"> Gender</label>
                <input type="radio"  id="gender" value='male' name="gender" />
                <span htmlFor="gender">Male</span>
                <input type="radio" id="gender" value='female' name="gender"  />
                <span htmlFor="gender">Female</span>
                
            </div>
            <div className="form-group">
                <label htmlFor="password">Enter Password</label>
                <input type="password" className="form-control" id="password" placeholder=" Password" />
            </div>
            <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" placeholder=" Confirm Password" />
            </div>
            
            <button type="submit" id="submitbtn" className="btn btn-primary">Register</button>
        </form>

            </div>
        </div>

    )
}
export default Register;

