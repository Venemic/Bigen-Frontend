import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import FormFeat from '../../assets/images/formFeat.png'
import { signUp } from '../../redux/auth/actionCreators';
import { toast } from 'react-toastify';
import toastSettings from '../../utility/toast';

function SignUp() {
  let { type } = useParams();
  console.log(type)
  const dispatch = useDispatch();  
  const User = useSelector((state) => state.auth);
  const [userAuth, setUserAuth] = useState({
    useremail: "",
    userpassword: ""
  });

  const validForm = () => {
    console.log(userAuth)
    for (const [key, value] of Object.entries(userAuth)){
      if(!value && key !== "username"){ 
        toast.warning(`Please fill ${key}`, {
         ...toastSettings 
      });
        return false;
      }
    }
    toast.success('OTP sent successfully!', {
      ...toastSettings 
   });
    dispatch(signUp(type,userAuth));
    return true;
  }
  const onChangeHandler = (e) => {
    const name = e.target.name, value = e.target.value;
    setUserAuth(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  return (
    <div class="container-fluid form-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
    <div class="container login-container">
        <div class="row">
            <div class="col-md-5 content-part">
                <img src={FormFeat} alt="" />
                <h2>Get instant visibility into all your team work.</h2>
                <p>Don’t waste time on tedious manual tasks. Let Automation do it for you. Simplify workflows, 
                reduce errors, and save time for solving more important problems.</p>
            </div>
            <div class="col-md-7 form-part">
              <div class="row">
                 <p class="signinlink">I already have an account <Link to="/login/student" relative="path">Sign In</Link></p>

                <div class="col-lg-8 col-md-11  formcol mx-auto">
                     <h3>Sign Up to {type} Console</h3>
                     <div class="form-floating mb-3">
                      <input type="email" value={userAuth.useremail} name="useremail" class="form-control" id="floatingInput" placeholder="Enter Full Name" onChange={onChangeHandler} />
                      <label for="floatingInput">Email address</label>
                    </div>
                    {/* <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Enter Mobile Number" />
                      <label for="floatingInput">Mobile Number</label>
                    </div> */}
                     {/* <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Enter Email Address" />
                      <label for="floatingInput">Email address</label>
                    </div> */}
                    <div class="form-floating">
                      <input type="password" value={userAuth.userpassword} name="userpassword" class="form-control" id="floatingPassword" placeholder="Password" onChange={onChangeHandler}/>
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating">
                     <button class="btn btn-primary" onClick={validForm}>Create Account</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div> 

  )
}

export default SignUp