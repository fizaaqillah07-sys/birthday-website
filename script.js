// =========================
// VARIABEL GAME
// =========================

let score = 0;

const targetScore = 10;


// =========================
// GANTI HALAMAN
// =========================

function pindahHalaman(idHalaman) {

    // Ambil semua halaman
    const halaman = document.querySelectorAll(".page");

    // Sembunyikan semua halaman
    halaman.forEach(function(page) {

        page.classList.remove("active");

    });

    // Tampilkan halaman yang dipilih
    document
        .getElementById(idHalaman)
        .classList.add("active");

}


// =========================
// BUKA HADIAH
// =========================

function bukaHadiah() {

    pindahHalaman("birthday");

}


// =========================
// MULAI GAME
// =========================

function mulaiGame() {

    score = 0;

    document.getElementById("score").innerText = score;

    document.getElementById("gameMessage").innerText = "";

    pindahHalaman("game");

    pindahkanHati();

}


// =========================
// TANGKAP HATI
// =========================

function tangkapHati() {

    score++;

    document.getElementById("score").innerText = score;


    // Kalau sudah mencapai target

    if (score >= targetScore) {

        document.getElementById("gameMessage").innerText =
            "YAY! Kamu berhasil! 💖";

        setTimeout(function() {

            pindahHalaman("ending");

        }, 1500);

        return;

    }


    // Pindahkan hati

    pindahkanHati();

}


// =========================
// PINDAHKAN HATI
// =========================

function pindahkanHati() {

    const heart = document.getElementById("heart");

    const gameArea = document.getElementById("gameArea");


    // Ukuran area game

    const maxX =
        gameArea.clientWidth - heart.offsetWidth;


    const maxY =
        gameArea.clientHeight - heart.offsetHeight;


    // Posisi random

    const randomX =
        Math.floor(Math.random() * maxX);


    const randomY =
        Math.floor(Math.random() * maxY);


    // Terapkan posisi

    heart.style.left = randomX + "px";

    heart.style.top = randomY + "px";

}