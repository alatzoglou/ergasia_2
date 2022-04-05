
var prospatheies = 3;
function on(x) {
    x.style.background = "red";
}
function lost(x) {
    x.style.background = "lightgrey";

}
function deixe() {
    var password = document.getElementById("kodikos1");
    if (password.type == "password") {
        password.type = "text";
        document.getElementById("mati").src = "eye2.png";
    } else {
        password.type = "password";
        document.getElementById("mati").src = "eye.png";
    }
}


function check() {
    var metrhths = 0;
    var onoma = document.getElementById("onoma");
    var password = document.getElementById("kodikos1");
    var password2 = document.getElementById("kodikos2");
    var eponymo = document.getElementById("eponymo");
    var onoma_xrhsth = document.getElementById("onoma_xrhsth");
    var hlikia = document.getElementById("hlikia");
    if (onoma.value.length <= 2) {
        window.alert("Το όνομα πρέπει να ξεπερνάει τους 2  χαρακτήρες");
        onoma.value = "";
    } else {
        metrhths = metrhths + 1
    }



    if (eponymo.value.length <= 3) {
        window.alert("Το επώνυμο πρέπει να ξεπερνάει τους 3  χαρακτήρες");
        eponymo.value = "";
    }
    else {
        metrhths = metrhths + 1
    }

    if (hlikia.value < 1 || hlikia.value > 120) {
        window.alert("Η ηλικία πρέπει να ειναι ανάμεσα στο 1 και το 120");
        hlikia.value = "";

    }
    else {
        metrhths = metrhths + 1
    }


    if (password.value != password2.value) {
        window.alert("Τα password δεν συμφωνούν");
        password.value = "";
        password2.value = "";
    }
    else {
        metrhths = metrhths + 1
    }
    if (onoma_xrhsth.value.length <= 2) {
        window.alert("Το όνομα χρήστη πρέπει να ξεπερνάει τους 2 χαρακτήρες");
        onoma_xrhsth.value = "";
    }
    else {
        metrhths = metrhths + 1
    }



    if (metrhths == 5 && prospatheies != 0) {
        window.alert("Επιτυχής εισαγωγή");
        console.log(metrhths);
        onoma.value = "";
        eponymo.value = "";
        hlikia.value = "";
        onoma_xrhsth.value = "";
        password.value = "";
        password2.value = "";
        setTimeout(function () {
            document.location.href = "https://real.gr";
        }, 1000);
    } else {
        prospatheies--;
        console.log("test1");
        console.log(metrhths);
        if (prospatheies == 0) {
            window.alert("Δεν έχεις αλλες προσπάθειες");
            document.close
        } else {
            onoma.value = "";
            eponymo.value = "";
            hlikia.value = "";
            onoma_xrhsth.value = "";
            password.value = "";
            password2.value = "";

            alert("Σου απομένουν " + prospatheies + " ακόμα προσπάθειες!");
        }
    }
}




