const container = document.getElementById("grid-container");

// Add
const image = document.getElementById("image_input");
var upload_image = "";
var image_array = [];
var counter = 0;

function display() {
    for (let i = 0; i < image_array.length; i++) {
        container.innerHTML += image_array[i];
    }
}

//Add
function addItem() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upload_image = reader.result;
        var box = 
        `
            <div class="box" data-index="${counter}" style='background-image: url(${upload_image});'>
                <button class="delete" data-index="${counter}">x</button>
            </div>
        `
        image_array.push(box);
        counter += 1;
        container.innerHTML = "";
        display();
    });
    reader.readAsDataURL(this.files[0]);
}

//Delete
function deleteItem(e) {
    if (e.target.matches('.delete')) {
        image_array[e.target.dataset.index] = "";
        container.innerHTML = "";
        display();
    }
}

image.addEventListener("change", addItem); //image_input also works, don't know why
container.addEventListener("click", deleteItem);
