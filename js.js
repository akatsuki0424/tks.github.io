document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".qa-box");

    questions.forEach((box) => {
        box.addEventListener("click", function () {
            const answer = this.querySelector(".answer");
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    const onScroll = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // 初回チェック
});

    const fadeElements = document.querySelectorAll('.fade-in');

    const onScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        fadeElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll); // ページ読み込み直後にもチェック
