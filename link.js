if (typeof ogVideo == "undefined") {
    console.log("Entro? 1");
    var ogVideo = document.querySelector('meta[property="og:video"]');
}
// El if funciona

console.log("ogVideo!!!!!" + ogVideo + typeof(ogVideo));

if(ogVideo) {
    let contentValue = ogVideo.getAttribute("content");
    let subString = contentValue.substring(0, contentValue.indexOf("/", contentValue.indexOf("/", contentValue.indexOf("/", contentValue.indexOf("/") + 1) + 1) + 1));
    let finalString = subString + "/DASH_1080.mp4?source=fallback";
    window.open(finalString);
}