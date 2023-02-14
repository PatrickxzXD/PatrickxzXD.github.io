
let photolist = ["images/July.jpg","images/Aug.jpg","images/Sept.jpg","images/Oct.jpg","images/Nov.jpg","images/Dec.jpg","images/Feb.jpg"]

let header = document.getElementById("header")
let july = document.getElementById("july-el")
let august = document.getElementById("august-el")
let september = document.getElementById("september-el")
let october = document.getElementById("october-el")
let november = document.getElementById("november-el")
let december = document.getElementById("december-el")
let february = document.getElementById("february-el")

let mess = document.getElementById("mess-el")

let button = document.getElementById("secretButton")

header.addEventListener("click", function() {
    document.getElementById("watch").style.display = "block";
    document.getElementById("pic-appear").style.display = "none"
})

july.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[0];
})

august.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[1];
})

september.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[2];
})

october.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[3];
})

november.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[4];
})

december.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[5];
})

february.addEventListener("click", function() {
    document.getElementById("watch").style.display = "none";
    document.getElementById("pic-appear").style.display = "block"
    document.getElementById("pic-appear").src = photolist[6];
})

button.addEventListener("dblclick", function() {
    mess.textContent = "Congratulation Baboy I LOVE YOU! You Win Cinema Ticket / Ant-Man and the Wasp: Quantumania "
})