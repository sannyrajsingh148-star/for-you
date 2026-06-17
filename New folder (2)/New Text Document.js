function checkLove() {
    let name = document.getElementById("nameInput").value.trim().toLowerCase();
    let result = document.getElementById("result");

    if (name === "kavya") {
        result.innerHTML = "💖 YES! Sanny like this person! 💖";
        result.style.color = "#ff1493";

        createHearts();
    } else {
        result.innerHTML = "❌ Sanny doesn't love that person ❌";
        result.style.color = "red";
    }
}

function createHearts() {
    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}