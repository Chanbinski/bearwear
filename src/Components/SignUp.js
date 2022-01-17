import { useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase-config"
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const history = useNavigate();

    const register = async () => {
        try {
            //Authentication
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail, 
                registerPassword,
            );
            
            //Firestore
            const createUser = await setDoc(doc(db, "users", user.user.uid), {
                tops: [],
                bottoms: []
            });

            setRegisterEmail("");
            setRegisterPassword("");
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
                        <div className="text-3xl font-bold">Sign Up</div>
                        <input 
                            className="border-2 p-1 mt-5" 
                            type="email" 
                            placeholder="Email"
                            value={registerEmail}
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }}  
                        />
                        <input 
                            className="border-2 p-1 mt-5" 
                            type="password" 
                            placeholder="Password" 
                            value={registerPassword}
                            onChange={(event) => {
                                setRegisterPassword(event.target.value);
                            }}    
                        />
                        <button 
                            className="text-gray-500 p-1 mt-5 font-bold"
                            type="submit"
                            onClick={register}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignUp

