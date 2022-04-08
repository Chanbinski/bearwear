import { useState } from "react"
import { Link } from 'react-router-dom';
import SignIn from './SignIn'
import SignUp from './SignUp'

function Authentication() {
    const [clickedSignUp, setClickedSignUp] = useState(false);
    const [clickedSignIn, setClickedSignIn] = useState(false);
    
    if (clickedSignUp) {
        return <SignUp />
    } 
    else if (clickedSignIn) {
        return <SignIn />
    } 
    else {
        return (
            <div>
                <div className="flex flex-col justify-center items-center mt-48">
                    <div className="text-5xl font-bold">Bearwear</div>
                    <div className="text-lg text-slate-500 mt-2">DIGITALIZE YOUR CLOSET</div>
                    <div className="flex flex-row justify-center items-center mt-6">
                        <img className="w-1/6" src={process.env.PUBLIC_URL + '/bearwear_logo.png'} />
                        <div className="p-10 w-1/4 flex flex-col justify-center items-center mb-5">
                            <button 
                                className="mt-2 w-3/4 p-2 border rounded-3xl text-center"
                                onClick={()=>{setClickedSignUp(true)}}
                            >
                                Sign Up
                            </button>
                            <div className="mt-5 text-xs text-slate-500">If you already have an account</div>
                            <button 
                                className="mt-2 w-3/4 p-2 border rounded-3xl text-center"
                                onClick={()=>{setClickedSignIn(true)}}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentication