import React, { useState} from 'react';
import "./Login.css";
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import axios from "axios";
import { NavLink } from 'react-router-dom';

function Login(props) {

    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    });

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const onSubmit = (e) => {
        const LoginData = {
            email: inputs.email,
            password: inputs.password

        }
        // console.log(LoginData);
        console.log(errors);

        axios.post("https://dialy-plan-tracker.herokuapp.com/task/login", {data:LoginData,method:"POST"})
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
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="container bg-light rounded mt-2 mb-2 px-0">

                            <div className="row justify-content-center align-items-center pt-3">
                                <h1><strong>Login</strong></h1>
                            </div>
                            <div className="pt-3 pb-3">
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-group row justify-content-center px-3">
                                        <div className="col-9 px-0">
                                            <input type="text" placeholder="&#xf0e0; &nbsp; Email"
                                                className={classNames("form-control  placeicon", {
                                                    "is-invalid": errors.email
                                                })}
                                                id="email"
                                                name="email"
                                                onChange={handleInput}
                                                value={inputs.email}
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
                                                className={classNames("form-control  placeicon", {
                                                    "is-invalid": errors.password
                                                })}
                                                id="password"
                                                name="password"
                                                onChange={handleInput}
                                                value={inputs.password}
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

                                    <div className="form-group row justify-content-center px-3">
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-6 px-0">
                                                    <div className="custom-control custom-checkbox mb-3">
                                                        <input id="customCheck1" type="checkbox"
                                                            className="custom-control-input checkbox-muted"
                                                            onChange={handleInput}
                                                        >

                                                        </input>
                                                        <label htmlFor="customCheck1" className="custom-control-label text-muted">
                                                            Remember Me
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-6 px-0 text-right ">
                                                    <span>
                                                        <a href="#" className="text-danger "><b>Forgot Password? </b></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row justify-content-center">
                                        <div className="w-50">
                                            <button type="submit" className="btn btn-info w-100">
                                                Long in
                                                </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="mx-0 px-0 bg-light">

                                <div className="row justify-content-center">
                                    <h3><strong>Login</strong></h3>
                                </div>
                                <div className="row justify-content-center pt-2">
                                    <h6>With your social media account</h6>
                                </div>

                                <div className="row justify-content-center pt-3">
                                    <div className="col-10">
                                        <div className="row justify-content-center">

                                            <div className="col-7 col-sm-4 px-1 pb-1"> <a href="https://twitter.com/login?lang=en" target="_blank" className="btn btn-block btn-social btn-twitter">
                                                <span className="fa fa-twitter"></span> Twitter </a>
                                            </div>

                                            <div className="col-7 col-sm-4 px-1 pb-1"> <a href="https://www.facebook.com/" target="_blank" className="btn btn-block btn-social btn-facebook">
                                                <span className="fa fa-facebook"></span> Facebook </a>
                                            </div>

                                            <div className="col-7 col-sm-4 px-1 pb-1"> <a href="https://accounts.google.com/ServiceLogin" target="_blank" className="btn btn-block btn-social btn-google">
                                                <span className="fa fa-google-plus"></span> Google+ </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 pt-2">
                                    <hr></hr>
                                </div>
                                <div className="row justify-content-center">
                                    <h6 >Don't have an Account?<span><NavLink exact activeClassName="active_class" to="/"> SignUp</NavLink></span></h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;