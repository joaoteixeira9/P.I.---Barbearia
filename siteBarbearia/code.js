<<<<<<< HEAD
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 3000);

function nextImage() {
    count++;
    if(count > 3) {  // Corrigido para 3, pois há 3 imagens
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
=======
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 3000);

function nextImage() {
    count++;
    if(count > 3) {  // Corrigido para 3, pois há 3 imagens
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
>>>>>>> 23e603e4d56a595b24ea1a75f9544126b722fd33
