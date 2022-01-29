import { Link } from "react-router-dom"
import Navbar from "./Navbar"


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Drawer(props) {
    return (
        <li className="flex flex-col justify-center items-center mt-10">
            <div className={`w-1/3 h-16 flex flex-col justify-center items-center ${props.color}`}>
                <Link to={`/${props.category}`} className="font-medium text-white">
                    {capitalize(props.category)}
                </Link>
            </div>
        </li>
    )
}

function User() {

    return (
        <>
            <Navbar />
            <ul className="list-none">
                <Drawer category="outer" color="bg-amber-400" />
                <Drawer category="tops" color="bg-amber-500" />
                <Drawer category="bottoms" color="bg-amber-600" />
                <Drawer category="accessories" color="bg-amber-700" />
                <Drawer category="dresses" color="bg-amber-800" />
                <Drawer category="shoes" color="bg-amber-900" />
            </ul>
        </>
    )   
}
export default User