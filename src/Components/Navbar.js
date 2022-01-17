import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase-config"
import { onAuthStateChanged, signOut } from "firebase/auth"

function Navbar() {
    const history = useNavigate()

    const logout = async () => {
        await signOut(auth);
        history('/auth');
    }
    
    return (
        <div className="mt-4">
            <div className="flex flex-row justify-end items-center">
                <a href="/" className="ml-5 mr-auto text-3xl font-bold" id="navbar__logo">Bearwear</a>
                <button className="ml-5 mr-5 text-base" onClick={logout}>Sign Out</button>
            </div>
        </div>
    )
}

export default Navbar