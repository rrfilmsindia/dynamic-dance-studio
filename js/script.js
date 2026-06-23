document.addEventListener("DOMContentLoaded", () => {
    console.log("DDS Website Loaded Successfully!");

    const btn = document.querySelector(".join-btn");

    if(btn){
        btn.addEventListener("click", () => {
            alert("🎉 Welcome to Dynamic Dance Studio!\nAdmission Open.");
        });
    }
});
