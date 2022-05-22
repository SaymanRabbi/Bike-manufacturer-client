
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import auth from '../../firebase.init.js'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])
    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        
    }
    return (
        <div style={{minHeight:'100vh',backgroundColor:'#570DF8'}} className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100  shadow-2xl">
<div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-control w-full max-w-xs">
<label className="label">
    <span className="label-text">Email</span>
</label>
            <input type="Email"  placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs"{...register("email",{
                pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Invalid Email'
                }
            , 
                required: {
                    value: true,
                    message:"Provied Email"
                },
            })}
            />
            <label className="label">
                {
                    errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>
                }
                {
                    errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>
                }
        
        </label>
                     </div>
                
                     <div className="form-control w-full max-w-xs">
<label className="label">
    <span className="label-text">Password</span>
</label>
            <input type="password"  placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs"{...register("password",{
                required: {
                    value: true,
                    message:"Provied Password"
                },
            })}
            />
            <label className="label">
                {
                    errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>
                }
        
        </label>
                     </div>
      
                        <input type="submit" className='btn btn-primary' value='Login' />
                        
                    </form>
                    <div class="divider">OR</div>
                    <Link to='/register' className='text-center text-primary mb-3'>Dont Have Account? Register</Link>
                    <button onClick={()=>signInWithGoogle()} className="btn btn-outline flex gap-5"><FontAwesomeIcon className=' text-primary text-3xl' icon={faGoogle}></FontAwesomeIcon> CONTINUE WITH GOOGLE</button>
                </div>
        </div>
            </div>
    );
};

export default Login;