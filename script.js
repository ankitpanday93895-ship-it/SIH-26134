const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


const districtData = {

    pune: {
        roles: 24,
        gaps: 17,
        emerging: 8,
        institutes: 46
    },

    jhansi: {
        roles: 16,
        gaps: 21,
        emerging: 6,
        institutes: 28
    },

    gurugram: {
        roles: 31,
        gaps: 14,
        emerging: 12,
        institutes: 53
    }

};


const districtSelect =
    document.getElementById("districtSelect");

const roleCount =
    document.getElementById("roleCount");

const gapCount =
    document.getElementById("gapCount");

const emergingCount =
    document.getElementById("emergingCount");

const instituteCount =
    document.getElementById("instituteCount");


districtSelect.addEventListener("change", () => {

    const selected =
        districtData[districtSelect.value];

    roleCount.textContent =
        selected.roles;

    gapCount.textContent =
        selected.gaps;

    emergingCount.textContent =
        selected.emerging;

    instituteCount.textContent =
        selected.institutes;

});
