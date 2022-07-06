/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import signpic from "../images/sp.png";
import Helmet from 'react-helmet';

// checking with user if present in database or not, if not present signup if present show error and send to login page
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""  
     });
     let name, value;
     const handleInputs = (e) => {
                  console.log(e); 
                  name = e.target.name;
                  value = e.target.value;

                  setUser({...user, [name]:value});
     }

          const PostData = async(e) => {
              e.preventDefault();

              const{name , email , phone , work , password , cpassword} = user;
              const res = await fetch("/register", {
                  method: "POST",
                  headers: {
                      "Content-Type" : "application/json"
                  },
                  body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                  })
              });
              const data = await res.json();
              if(data.status === 422 || !data){
                  window.alert("INVALID REGISTRATION");
                  console.log("INVALID REGISTRATION");
              }else{
                window.alert("REGISTRATION successfull");
                console.log(" REGISTRATION successfull");

                history.push("/login");
              }
          }
    // login blocks for value input
    return (
        <>
            <Helmet bodyAttributes={{style: ' background-image: linear-gradient(45deg, #5bbdce 50%, rgb(197, 57, 57) 50%);'}}/>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                          <h4 className="form-title">Sign up</h4>
                            <form method="POST" className="register-form" id="register-form">

                              <div className="form-group">
                                <label htmlFor="name">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                 <input type="text" name="name" id="name" autoComplete="off"
                                    value = {user.name}
                                    onChange={handleInputs}
                                    placeholder="your Name"
                                 />
                              </div>

                              <div className="form-group">
                                <label htmlFor="email">
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                 <input type="email" name="email" id="email" autoComplete="off"
                                    value = {user.email}
                                    onChange={handleInputs}
                                    placeholder="your Email"
                                 />
                              </div>

                              <div className="form-group">
                                <label htmlFor="phone">
                                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                 <input type="number" name="phone" id="phone" autoComplete="off"
                                    value = {user.phone}
                                    onChange={handleInputs}
                                    placeholder="your Phone"
                                 />
                              </div>  

                              <div className="form-group">
                                <label htmlFor="work">
                                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                 <input type="text" name="work" id="work" autoComplete="off"
                                    value = {user.work}
                                    onChange={handleInputs}
                                    placeholder="your Profession"
                                 />
                              </div>

                              <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                 <input type="password" name="password" id="password" autoComplete="off"
                                   value = {user.password}
                                    onChange={handleInputs}
                                    placeholder="your Password"
                                 />
                              </div>

                              <div className="form-group">
                                <label htmlFor="cpassword">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                 <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    value = {user.cpassword}
                                    onChange={handleInputs}
                                    placeholder="Confirm Your Password"
                                 />
                              </div>

                              <div className="form-group form-button">
                                  <input type="submit" name="signup" id="signup" className="form-submit"
                                       value="Register" onClick={PostData}
                                  />
                              </div>

                          </form>
                        </div>
                           <div className="signup-image">
                               <figure>
                                   <img src={signpic} alt="signup pic" />
                               </figure>
                               <NavLink to="/login" className="signup-image-link">I am already Registered</NavLink> 
                           </div>

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
