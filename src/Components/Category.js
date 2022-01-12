import { useParams } from 'react-router-dom'

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Category(props) {
    const { category } = useParams();

    return (
        <div class="flex flex-col justify-center items-center mt-20">
            <input type="file" id="image_input" accept="image/png, image/jpg"></input>
                <div class="mt-4 text-3xl" id="title">{capitalize(category)}</div>
                <div class="mt-20 grid gap-30 grid-cols-4 grid-flow-row" id="grid-container">
            </div>
        </div>
    )
}

export default Category