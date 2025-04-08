document.addEventListener("DOMContentLoaded", function () {
    // QAセクションの開閉処理
    const qaBoxes = document.querySelectorAll(".qa-box");
    qaBoxes.forEach((box) => {
        box.addEventListener("click", function () {
            const answer = this.querySelector(".answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block"; // より簡潔な書き方
        });
    });

    // フェードインアニメーション処理
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

    // ハンバーガーメニュー処理 (★ 1箇所にまとめました ★)
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");  // ☰ ↔ ✕
        navMenu.classList.toggle("show");      // メニュー表示切替
    });
});


