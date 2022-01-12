import Category from "./Category"
import { Link } from "react-router-dom"

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Drawer(props) {
    return (
        <li className="flex flex-col justify-center items-center mt-10">
                <div className={`w-1/3 h-16 bg-amber-${props.color} flex flex-col justify-center items-center`}>
                    <Link to={`/${props.category}`}>{capitalize(props.category)}</Link>
                </div>
        </li>
    )
}

function Home() {
    return (
        <ul className="list-none">
            <Drawer category="outer" color="400" />
            <Drawer category="tops" color="500" />
            <Drawer category="bottoms" color="600" />
            <Drawer category="accessories" color="700" />
            <Drawer category="dresses" color="800" />
            <Drawer category="shoes" color="900" />
        </ul>
    )
}

export default Home