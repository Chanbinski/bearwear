import { Link } from "react-router-dom"
import { auth } from "../firebase-config"
import Navbar from "./Navbar"


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getName(string) {
    return string.substring(0, string.indexOf('@'));
}

function Drawer(props) {
    return (
        <li className="group flex flex-col justify-center items-center">
            <Link 
                to={`/${props.category}`} 
                className={`w-full h-16 flex flex-col justify-center items-center relative bg-[url('/public/wood.webp')]`}>
                <div 
                    className="lg:hidden group-hover:block font-medium text-white absolute right-3 top-1">
                    {capitalize(props.category)}
                </div>
                <div className="font-bold text-sm text-white"> — </div>
            </Link>
        </li>
    )
}

function User() {

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="mt-24 mb-8 text-4xl text-center font-medium">
                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-blue-600">
                        {capitalize(getName(auth.currentUser.email))}
                    </span>
                    's Dresser
                </div>
                <ul className="list-none w-5/6 lg:w-1/3 border-4 border-black divide-y-2 divide-black">
                    <Drawer category="outer"/>
                    <Drawer category="tops"/>
                    <Drawer category="bottoms"/>
                    <Drawer category="accessories"/>
                    <Drawer category="dresses"/>
                    <Drawer category="shoes"/>
                </ul>
            </div>
        </>
    )   
}
export default User