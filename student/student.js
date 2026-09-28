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
// =====================================
// PROFILE PAGE
// =====================================

const profileForm =
    document.getElementById("profileForm");


if(profileForm){

    const student =
        JSON.parse(
            localStorage.getItem("yuvaSetuStudent")
        );


    // User direct profile page open kare
    // without registration

    if(!student){

        window.location.href =
            "register.html";

    }
    else{

        // Existing registration data show

        document.getElementById("profileName").value =
            student.name || "";

        document.getElementById("profileEmail").value =
            student.email || "";

        document.getElementById("profilePhone").value =
            student.phone || "";


        document.getElementById("summaryName").textContent =
            student.name || "Student";

        document.getElementById("summaryEmail").textContent =
            student.email || "";


        // Previously saved profile values

        if(student.education){

            document.getElementById("educationLevel").value =
                student.education;

        }


        if(student.course){

            document.getElementById("course").value =
                student.course;

        }


        if(student.branch){

            document.getElementById("branch").value =
                student.branch;

        }


        if(student.year){

            document.getElementById("studyYear").value =
                student.year;

        }


        if(student.state){

            document.getElementById("state").value =
                student.state;

        }


        if(student.district){

            document.getElementById("district").value =
                student.district;

        }

    }


    profileForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            const currentStudent =
                JSON.parse(
                    localStorage.getItem(
                        "yuvaSetuStudent"
                    )
                );


            currentStudent.name =
                document
                    .getElementById("profileName")
                    .value
                    .trim();


            currentStudent.phone =
                document
                    .getElementById("profilePhone")
                    .value
                    .trim();


            currentStudent.education =
                document
                    .getElementById("educationLevel")
                    .value;


            currentStudent.course =
                document
                    .getElementById("course")
                    .value;


            currentStudent.branch =
                document
                    .getElementById("branch")
                    .value;


            currentStudent.year =
                document
                    .getElementById("studyYear")
                    .value;


            currentStudent.state =
                document
                    .getElementById("state")
                    .value;


            currentStudent.district =
                document
                    .getElementById("district")
                    .value;


            currentStudent.profileCompleted =
                true;


            localStorage.setItem(
                "yuvaSetuStudent",
                JSON.stringify(currentStudent)
            );


            const profileMessage =
                document.getElementById(
                    "profileMessage"
                );


            profileMessage.textContent =
                "Profile saved successfully.";

            profileMessage.className =
                "form-message success";


            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 800);

        }
    );

}



// =====================================
// LOGOUT
// =====================================

const logoutBtn =
    document.getElementById("logoutBtn");


if(logoutBtn){

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem(
            "studentLoggedIn"
        );

        window.location.href =
            "login.html";

    });

}
// =====================================
// STUDENT DASHBOARD
// =====================================

const dashboardStudentName =
    document.getElementById(
        "dashboardStudentName"
    );


if(dashboardStudentName){

    // Login Protection

    const loggedIn =
        localStorage.getItem(
            "studentLoggedIn"
        );


    if(loggedIn !== "true"){

        window.location.href =
            "login.html";

    }


    const student =
        JSON.parse(
            localStorage.getItem(
                "yuvaSetuStudent"
            )
        );


    if(!student){

        window.location.href =
            "register.html";

    }
    else{


        // =========================
        // STUDENT NAME
        // =========================

        const firstName =
            student.name
                ? student.name.split(" ")[0]
                : "Student";


        document.getElementById(
            "dashboardStudentName"
        ).textContent =
            student.name || "Student";


        document.getElementById(
            "welcomeStudentName"
        ).textContent =
            firstName;



        // =========================
        // SIDEBAR BRANCH
        // =========================

        document.getElementById(
            "dashboardStudentBranch"
        ).textContent =
            student.branch ||
            "Student Profile";



        // =========================
        // TARGET ROLE
        // =========================

        document.getElementById(
            "dashboardTargetRole"
        ).textContent =
            student.targetJob ||
            "Not Selected";



        // =========================
        // DISTRICT
        // =========================

        document.getElementById(
            "dashboardDistrict"
        ).textContent =
            student.district ||
            "Not Selected";


        document.getElementById(
            "dashboardDistrictDetail"
        ).textContent =
            student.district ||
            "--";


        document.getElementById(
            "districtPill"
        ).textContent =
            student.district ||
            "District";



        // =========================
        // COURSE
        // =========================

        document.getElementById(
            "dashboardCourse"
        ).textContent =
            student.course ||
            "--";



        // =========================
        // BRANCH
        // =========================

        document.getElementById(
            "dashboardBranch"
        ).textContent =
            student.branch ||
            "--";



        // =========================
        // YEAR
        // =========================

        document.getElementById(
            "dashboardYear"
        ).textContent =
            student.year ||
            "--";



        // =========================
        // STATE
        // =========================

        document.getElementById(
            "dashboardState"
        ).textContent =
            student.state ||
            "--";



        // =========================
        // SKILLS
        // =========================

        const skillCount =
            Array.isArray(student.skills)
                ? student.skills.length
                : 0;


        document.getElementById(
            "dashboardSkillCount"
        ).textContent =
            skillCount;



        // =========================
        // MATCH SCORE
        // =========================

        if(
            student.matchScore !== undefined &&
            student.matchScore !== null
        ){

            const score =
                Math.round(
                    student.matchScore
                );


            document.getElementById(
                "dashboardMatchScore"
            ).textContent =
                score + "%";


            document.getElementById(
                "readinessCircleScore"
            ).textContent =
                score + "%";


            const readinessCircle =
                document.querySelector(
                    ".readiness-circle"
                );


            if(readinessCircle){

                readinessCircle.style.background =
                    `conic-gradient(
                        #1264e5 0% ${score}%,
                        #dce6f5 ${score}% 100%
                    )`;

            }


            document.getElementById(
                "readinessMessage"
            ).textContent =
                "Your current job readiness";

        }
        else{

            document.getElementById(
                "dashboardMatchScore"
            ).textContent =
                "--";


            document.getElementById(
                "readinessCircleScore"
            ).textContent =
                "--";

        }

    }

}
