const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
    document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openProfile").addEventListener("click", open);
document.querySelector(".bg").addEventListener("click", close);
