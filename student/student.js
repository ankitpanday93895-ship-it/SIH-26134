// =====================================
// PASSWORD SHOW / HIDE
// =====================================

const passwordBtn =
    document.getElementById("passwordBtn");

const passwordInput =
    document.getElementById("loginPassword");


if(passwordBtn && passwordInput){

    passwordBtn.addEventListener("click", () => {

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

            passwordBtn.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        }
        else{

            passwordInput.type = "password";

            passwordBtn.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}



// =====================================
// STUDENT REGISTRATION
// =====================================

const registerForm =
    document.getElementById("registerForm");


if(registerForm){

    registerForm.addEventListener("submit", function(event){

        event.preventDefault();


        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const phone =
            document.getElementById("registerPhone").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");


        // Password Match Check

        if(password !== confirmPassword){

            message.textContent =
                "Passwords do not match.";

            message.className =
                "form-message error";

            return;

        }


        // Minimum password length

        if(password.length < 6){

            message.textContent =
                "Password must contain at least 6 characters.";

            message.className =
                "form-message error";

            return;

        }


        // Student Object

        const student = {

            name: name,

            email: email,

            phone: phone,

            password: password,

            profileCompleted: false,

            skills: [],

            targetJob: "",

            district: ""

        };


        // Save in browser storage

        localStorage.setItem(
            "yuvaSetuStudent",
            JSON.stringify(student)
        );


        message.textContent =
            "Registration successful! Redirecting to login...";

        message.className =
            "form-message success";


        setTimeout(() => {

            window.location.href =
                "login.html";

        }, 1200);

    });

}



// =====================================
// STUDENT LOGIN
// =====================================

const loginForm =
    document.getElementById("loginForm");


if(loginForm){

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        const savedStudent =
            JSON.parse(
                localStorage.getItem("yuvaSetuStudent")
            );


        if(!savedStudent){

            alert(
                "No student account found. Please register first."
            );

            return;

        }


        if(
            email === savedStudent.email &&
            password === savedStudent.password
        ){

            localStorage.setItem(
                "studentLoggedIn",
                "true"
            );


            if(savedStudent.profileCompleted){

                window.location.href =
                    "dashboard.html";

            }
            else{

                window.location.href =
                    "profile.html";

            }

        }
        else{

            alert(
                "Invalid email or password."
            );

        }

    });

}
