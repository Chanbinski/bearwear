import { useState } from "react"
import { 
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebase-config"
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const history = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            setLoginEmail("");
            setLoginPassword("");
            history('/');
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-48">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-3xl font-bold">Sign In</div>
                        <input 
                            className="border-2 p-1 mt-5" 
                            type="email" 
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }} 
                        />
                        <input 
                            className="border-2 p-1 mt-5" 
                            type="password" 
                            placeholder="Password" 
                            value={loginPassword}
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }} 
                        />
                        <button 
                            className="text-gray-500 p-1 mt-5 font-bold"
                            type="submit"
                            onClick={login}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignIn

