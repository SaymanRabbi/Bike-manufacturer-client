import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useCreateUserWithEmailAndPassword,useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
const Register = () => {
    let location = useLocation();
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const [updateProfile, updating] = useUpdateProfile(auth);
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    },[gUser,user,navigate,from])
    if (gLoading||loading||updating) {
        return <Loading></Loading>
    }
    const onSubmit =async data => {
       await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
       
    };
    return (
      <div className="flex justify-center items-center" style={{backgroundColor:'#570DF8',minHeight:'100vh'}}>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <div className="card-body">
            <h2 className="text-center text-secondary font-bold text-2xl">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Provide Your Name",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid Email",
                    },
                    required: {
                      value: true,
                      message: "Provied Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    minLength: {
                      value: 6,
                      message: "Password Should Be 6 Charecter",
                    },
                    required: {
                      value: true,
                      message: "Provied Password",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <input type="submit" className="btn btn-primary w-full max-w-xs" />
              <p className="mt-2">
                Member Doctors Portal?
                <Link to="/login" className=" text-secondary">
                  Login
                </Link>
              </p>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline flex gap-5"
            >
              <FontAwesomeIcon
                className="text-primary text-3xl"
                icon={faGoogle}
              ></FontAwesomeIcon>
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;