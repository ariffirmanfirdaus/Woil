
const mainContent = document.getElementById("mainContent");
const welcome = document.getElementById("welcome");

let heartsStarted = false;

/* =========================
   OPEN GIFT (3 TAP)
========================= */

const giftBox =
document.getElementById("giftBox");

const giftHint =
document.getElementById("giftHint");

let giftTap = 0;

giftBox.addEventListener("click",()=>{

    giftTap++;

    giftBox.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.15)"},
        {transform:"scale(1)"}
    ],{
        duration:250
    });

   if(giftTap === 1){

    giftHint.innerHTML =
    "2 ketukan lagi 💖";

    giftBox.style.filter =
    "drop-shadow(0 0 20px gold)";
}

else if(giftTap === 2){

    giftHint.innerHTML =
    "1 ketukan lagi 🎉";

    giftBox.style.filter =
    "drop-shadow(0 0 35px gold)";
}

    else if(giftTap >= 3){

        welcome.style.display =
        "none";

        mainContent.classList.remove(
        "hidden"
        );

        launchConfetti();

        if(!heartsStarted){

            setInterval(
            createHeart,
            500
            );

            heartsStarted = true;
        }

    }

});

/* =========================
   CONFETTI
========================= */

function launchConfetti() {

    const container = document.getElementById("confetti");

    for(let i = 0; i < 60; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left =
        Math.random() * 100 + "%";

        piece.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

        piece.style.opacity =
        Math.random();

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);

    }

}

/* =========================
   BLOW CANDLE
========================= */

const blowBtn =
document.getElementById("blowBtn");

const candle =
document.getElementById("candle");

const wishResult =
document.getElementById("wishResult");

blowBtn.addEventListener("click", () => {

    candle.innerHTML = "💨";

    wishResult.innerHTML =
    "💖 Semoga semua harapan Kak Indri di usia 29 tahun dapat terwujud 💖";

    launchConfetti();

});

/* =========================
   29 WISHES
========================= */

const wishes = [

"Semoga selalu diberikan kesehatan yang baik.",
"Semoga setiap hari mbak dipenuhi kebahagiaan.",
"Semoga rezeki mbak semakin lancar.",
"Semoga semua impianmu semakin dekat menjadi kenyataan.",
"Semoga selalu dikelilingi orang-orang yang baik.",
"Semoga diberikan umur yang penuh berkah.",
"Semoga pekerjaan dan usaha mbak semakin sukses.",
"Semoga setiap kesulitan berubah menjadi pelajaran berharga.",
"Semoga hati mbak selalu tenang dan damai.",
"Semoga senyum mbak selalu menghiasi hari-harimu.",
"Semoga Mbak selalu menjadi kebanggaan dan sumber kebahagiaan bagi keluarga kita.",
"Semoga persahabatanmu semakin erat.",
"Semoga selalu memiliki semangat untuk meraih cita-cita.",
"Semoga setiap langkahmu dipenuhi keberuntungan.",
"Semoga kesehatan mental dan fisik selalu terjaga.",
"Semoga tahun ini membawa banyak kabar baik.",
"Semoga setiap doa yang baik dikabulkan.",
"Semoga selalu menjadi inspirasi bagi orang lain.",
"Semoga hidupmu dipenuhi momen-momen indah.",
"Semoga diberikan kekuatan menghadapi setiap tantangan.",
"Semoga perjalanan hidupmu selalu diberi kemudahan.",
"Semoga selalu menemukan alasan untuk bersyukur.",
"Semoga kebahagiaan datang dari hal-hal kecil setiap hari.",
"Semoga cinta dan kasih sayang selalu mengelilingimu.",
"Semoga masa depanmu semakin cerah.",
"Semoga keberanianmu terus bertambah.",
"Semoga segala usaha membuahkan hasil terbaik.",
"Semoga semua harapan baikmu tercapai satu per satu.",
"Semoga usia 29 menjadi tahun yang paling berkesan dan membahagiakan."

];

const starsContainer =
document.getElementById("stars");

/* =========================
   WISH DISPLAY
========================= */

const wishDisplay =
document.createElement("div");

wishDisplay.id = "wishDisplay";

wishDisplay.style.display = "none";
wishDisplay.style.marginTop = "30px";
wishDisplay.style.padding = "25px";
wishDisplay.style.maxWidth = "700px";
wishDisplay.style.marginLeft = "auto";
wishDisplay.style.marginRight = "auto";
wishDisplay.style.borderRadius = "20px";

wishDisplay.style.background =
"rgba(255,105,180,0.12)";

wishDisplay.style.border =
"1px solid rgba(255,105,180,0.4)";

wishDisplay.style.color = "white";

wishDisplay.style.lineHeight = "1.8";

wishDisplay.style.backdropFilter =
"blur(10px)";

wishDisplay.style.boxShadow =
"0 0 20px rgba(255,105,180,0.3)";

starsContainer.parentElement
.appendChild(wishDisplay);

/* =========================
   CREATE STARS
========================= */

for(let i = 0; i < 29; i++) {

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "⭐";

    star.title =
    "Harapan #" + (i + 1);

    star.addEventListener("click", () => {

        wishDisplay.style.display =
        "block";

        wishDisplay.innerHTML = `
        <h3 style="
        color:#ffd1e8;
        margin-bottom:15px;
        font-size:1.5rem;
        ">
        ⭐ Bintang Harapan #${i + 1}
        </h3>

        <p style="font-size:1.1rem;">
        ${wishes[i]}
        </p>
        `;

        wishDisplay.animate([
            {
                opacity:0,
                transform:"translateY(20px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:500,
            fill:"forwards"
        });

    });

    starsContainer.appendChild(star);

}

/* =========================
   MUSIC
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

if(musicBtn && music){

    musicBtn.addEventListener("click", () => {

        if(!playing){

            music.play();

            musicBtn.innerHTML =
            "🔇 Musik OFF";

            playing = true;

        }else{

            music.pause();

            musicBtn.innerHTML =
            "🔊 Musik ON";

            playing = false;

        }

    });

}

/* =========================
   FALLING HEARTS
========================= */

function createHeart(){

    const hearts =
    document.getElementById("hearts");

    if(!hearts) return;

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = [
        "💖",
        "💕",
        "💗",
        "💓",
        "💝",
        "🌸"
    ];

    heart.innerHTML =
    heartTypes[
    Math.floor(
    Math.random() *
    heartTypes.length
    )];

    heart.style.left =
    Math.random() * 100 + "%";

    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

/* =========================
   TYPING LETTER
========================= */

const startLetterBtn =
document.getElementById("startLetterBtn");

const typedLetter =
document.getElementById("typedLetter");

const letterText = `Selamat ulang tahun ke-29 mbak Indri.

Semoga setiap langkah yang mbak ambil membawa kebahagiaan, kesehatan, rezeki, dan kesuksesan.

Terima kasih telah menjadi sosok yang kuat, baik hati, dan selalu memberi inspirasi.

Semoga semua impian mbak perlahan menjadi nyata.

Selamat menikmati hari spesial ini.

🎉🎂✨`;

let typingStarted = false;

if(startLetterBtn && typedLetter){

    startLetterBtn.addEventListener("click", () => {

        if(typingStarted) return;

        typingStarted = true;

        startLetterBtn.style.display = "none";

        let i = 0;

        function typeLetter(){

            if(i < letterText.length){

                typedLetter.innerHTML +=
                letterText.charAt(i);

                i++;

                setTimeout(typeLetter, 35);

            }

        }

        typeLetter();

    });

}

const family = [

{
name:"Pria tampan",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/9557b6a9a8d6d057db718b4450917d8d694094cd/20260610_224244.png",
message:"😆 Mbak Indri! Selamat ulang tahun ya!"
},

{
name:"Mamah",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/6d18477882ecdd08f3a470f3a3321d5a775cbb1d/20260610_223811.png",
message:"🥰 Semoga sehat, bahagia, dan selalu diberi keberkahan."
},

{
name:"Bapak",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/2b8a8cd4cf5863947407b20b8d2fbd19e82b1768/20260610_223708.png",
message:"😎 Selamat ulang tahun, semoga semua cita-citanya tercapai."
},

{
name:"Aa Budi",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/ec3532476462ad82d24dbd438509c20498f2d144/20260610_223918.png",
message:"😂 Happy Birthday Onti Indri!"
},

{
name:"Kak Rizta",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/9557b6a9a8d6d057db718b4450917d8d694094cd/20260610_223957.png",
message:"🌸 Semoga selalu bahagia dan sehat ya Onti."
},

{
name:"Rasdan",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/8206582fdb78ce2ede66d97941c1fedb7c7aac2b/20260610_225517.png",
message:"🤪 Happy Birthday Onti!"
},

{
name:"Adik",
image:"https://rawcdn.githack.com/ariffirmanfirdaus/Lid/573ba58a727633addb43223b915913791c6ca03a/20260610_222949.png",
message:"🎂 Selamat ulang tahun Onti!"
}

];

const familyArea =
document.getElementById("familyArea");

const speech =
document.getElementById("familySpeech");

speech.addEventListener("click",()=>{

    speech.style.display = "none";

});

family.forEach((member,index)=>{

    const npc =
    document.createElement("div");

    npc.className =
    "family-member";

    const startPositions = [

{left:20, top:20},
{left:130, top:20},
{left:240, top:20},

{left:20, top:120},
{left:130, top:120},
{left:240, top:120},

{left:100, top:120}
];

npc.style.left =
startPositions[index].left + "px";

npc.style.top =
startPositions[index].top + "px";

    

    npc.innerHTML = `
        <div class="family-name">
            ${member.name}
        </div>

        <img
        class="family-img"
        src="${member.image}"
        alt="${member.name}">
    `;

    familyArea.appendChild(npc);

    let direction =
    Math.random() > 0.5 ? 1 : -1;

    setInterval(()=>{

        let x =
        parseFloat(npc.style.left);

        x += direction * 1.5;

        if(x < 0){
            direction = 1;
        }

        if(x >
        familyArea.offsetWidth - 90){
            direction = -1;
        }

        npc.style.left =
        x + "px";

    },40);

    npc.addEventListener("click",()=>{

    speech.style.display = "block";

    speech.innerHTML =
    member.message +
    "<br><br><small>(Ketuk pesan untuk menutup)</small>";

    npc.style.left =
    Math.random() *
    (familyArea.offsetWidth - 90)
    + "px";

    npc.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.25)"},
        {transform:"scale(1)"}
    ],{
        duration:300
    });

});

}); // tutup family.forEach

const openBTSBtn =
document.getElementById("openBTSBtn");

const btsSection =
document.getElementById("btsSection");

openBTSBtn.addEventListener("click",()=>{

    // sembunyikan halaman ulang tahun
    mainContent.classList.add("hidden");

    // tampilkan halaman BTS
    btsSection.classList.remove("hidden");

    // kembali ke atas layar
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    launchConfetti();

});

const backBtn =
document.getElementById("backBtn");

backBtn.addEventListener("click",()=>{

    // sembunyikan BTS
    btsSection.classList.add("hidden");

    // tampilkan halaman ulang tahun
    mainContent.classList.remove("hidden");

    // kembali ke posisi tombol surprise
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    launchConfetti();

});