import React, { useState } from 'react';
import './Signup.css';
import axios from "axios";
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';



function Signup(props) {

    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    });

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""

    });
    const onSubmit = (e) => {

        const Signupdata = {
            username: inputs.username,
            email: inputs.email,
            password: inputs.password

        }

        // console.log(Signupdata);
        console.log(errors);

        axios.post("https://dialy-plan-tracker.herokuapp.com/task/signup",
            Signupdata)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleInput = (e) => {
        e.persist();
        // console.log(e.target.value);
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }

    return (
        <>
            <div className="card my-4 justify-content-center bg-light">
                <div className="card-body">
                    <div className="container my-4">
                        <h2 className="text-center pt-2 mb-5"><strong>SignUp</strong></h2>
                        <form className="" onSubmit={handleSubmit(onSubmit)} crossOrigin="anonymous">
                            <div className="form-group row justify-content-center px-3">
                                <div className="col-9 px-0">
                                    <input type="text" placeholder="&#xf0f0; &nbsp; User name"
                                        className={classNames("form-control placeicon", {
                                            "is-invalid": errors.username
                                        })}

                                        name="username"
                                        value={inputs.username}
                                        onChange={handleInput}
                                        id="username"
                                        ref={register({
                                            required: "This field is required !",
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 charracters is required !"
                                            }
                                        })}
                                    >

                                    </input>
                                    {errors.username && (
                                        <div className="invalid-feedback">
                                            {errors.username.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group row justify-content-center px-3">
                                <div className="col-9 px-0">
                                    <input type="text" placeholder="&#xf0e0; &nbsp; Email"
                                        className={classNames("form-control placeicon", {
                                            "is-invalid": errors.email
                                        })}

                                        name="email"
                                        value={inputs.email}
                                        onChange={handleInput}
                                        id="email"
                                        ref={register({
                                            required: "This field is required !",
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$&'*+/=?`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: "Please enter a valid email address !"
                                            }
                                        })}
                                    >

                                    </input>
                                    {errors.email && (
                                        <div className="invalid-feedback">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-group row justify-content-center px-3">
                                <div className="col-9 px-0">
                                    <input type="password" placeholder="&#xf084; &nbsp; &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                        className={classNames("form-control placeicon", {
                                            "is-invalid": errors.password
                                        })}

                                        name="password"
                                        value={inputs.password}
                                        onChange={handleInput}
                                        id="password"
                                        ref={register({
                                            required: "This field is required !",
                                            pattern: {
                                                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                                message: "Password must be in (Uppercase,Lowercase,Number/Specialcharacters and min 8 Chars)",
                                            }
                                        })}
                                    >

                                    </input>
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="w-50">
                                    <button type="submit" className="btn btn-info w-100">
                                        Sign up
                                                </button>
                                </div>
                            </div>
                            <div className="px-4 pt-2">
                                <hr></hr>
                            </div>
                            <div className="row justify-content-center my-4">
                                <h6 >Already have an Account?<span><NavLink activeClassName="active_class" to="/login"> SignIn</NavLink></span></h6>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;