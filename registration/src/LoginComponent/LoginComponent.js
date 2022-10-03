import React from "react";
import './LoginComponent.css';

function Login()
{
    return(
        <div className="App-content" >

            <h3>Login Content</h3>
        <div className="Mybox">
     <form>
            <div class="form-outline mb-4">
                <label class="form-label" id="my-label1" for="form2Example1">Email address</label>
                <input type="email" id="form2Example1" class="form-control" />
               
            </div>
            <div class="form-outline mb-4">
                 <label class="form-label" id="my-label2" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control" />
            </div>
    <div class="row mb-4">
        <div class="col d-flex justify-content-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
        </div>
    </div>
     
   

    <button type="button" id="mybtn" class="btn btn-primary btn-block mb-4">Sign in</button>

    <div class="text-center"> </div>
   </form>

 </div>
</div>
    )
}
export default Login;


