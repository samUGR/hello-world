var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.querySelector(':root');
if (isMobile) {
    console.log("Mobile")
    element.style.setProperty("--width", "90%");
} else {
    console.log("Laptop")
    element.style.setProperty("--width", "40%");
}


console.log(devicePixelRatio);