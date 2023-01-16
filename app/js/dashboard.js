/* modal open */
let open = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

let close = () => {
    document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".bg").addEventListener("click", close);
