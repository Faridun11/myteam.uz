let elList = document.querySelector(".About")
let mode = false
function handleOpen() {
    mode = !mode
    if (mode == true) {
        elList.classList.add("active")
    } else {
        elList.classList.remove("active")
    }

    console.log(mode);

}