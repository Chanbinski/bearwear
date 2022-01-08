const container = document.getElementById("grid-container");

// for (let i = 1; i < 13; i++) {
//     var box = document.createElement("div");
//     box.innerHTML = i;
//     box.className = "box";
//     container.appendChild(box);
// }

const image = document.getElementById("image_input");
var upload_image = "";
var image_array = [];

image_input.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            upload_image = reader.result;
            var box = document.createElement("div");
            box.className = "box"
            box.style.backgroundImage = `url(${upload_image})`;
            image_array.push(box);
            for (let i = 0; i < image_array.length; i++) {
                container.appendChild(image_array[i]);
                //use counter thing
            }
            // document.querySelector("#i" + counter.toString()).style.backgroundImage = `url(${upload_image})`;
            // document.querySelector("#i" + counter.toString()).style.backgroundImage = `url(${upload_image})`;
            // counter += 1;
        });
        reader.readAsDataURL(this.files[0]);
})
