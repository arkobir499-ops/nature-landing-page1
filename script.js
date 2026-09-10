const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


function showMessage() {

    alert(
        "Thanks for exploring nature! 🌿"
    );

}