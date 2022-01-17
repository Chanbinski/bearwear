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
            <div className="flex flex-col justify-center items-center mt-48">
                <div className="text-5xl font-bold">Bearwear</div>
                <div className="text-sm mt-2">WHAT BEARS WEAR</div>
                <div className="p-10 w-1/4 flex flex-col justify-center items-center border mt-8">
                    <button 
                        className="mt-2 w-3/4 p-2 border rounded-3xl text-center"
                        onClick={()=>{setClickedSignUp(true)}}
                    >
                        Sign Up
                    </button>
                    <div className="mt-5 text-xs text-gray-500">If you already have an account</div>
                    <button 
                        className="mt-2 w-3/4 p-2 border rounded-3xl text-center"
                        onClick={()=>{setClickedSignIn(true)}}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        )
    }
}

export default Authentication