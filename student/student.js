const passwordBtn =
    document.getElementById("passwordBtn");

const passwordInput =
    document.getElementById("loginPassword");


if(passwordBtn){

    passwordBtn.addEventListener("click", () => {

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

            passwordBtn.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        }else{

            passwordInput.type = "password";

            passwordBtn.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}


const loginForm =
    document.getElementById("loginForm");


if(loginForm){

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        /*
            TEMPORARY DEMO LOGIN

            Real authentication hum
            backend/database connect
            karte waqt add karenge.
        */


        if(email && password){

            window.location.href =
                "dashboard.html";

        }

    });

}
