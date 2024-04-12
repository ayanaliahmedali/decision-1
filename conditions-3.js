// Agr gaari ki speed 60 se zyada hai,
// toh matlab overspeeding kr rahi hai,
// warna overspeeding nahi kar rhi

// 1_ ANS

let speed = 80;
if (speed > 45) {
    console.log("overspeeding kr rahi hai");
} else {
    console.log("overspeeding nahi kar rhi");
}

// Agr logged in hai,
// toh kaho "Welcome, you!",
// warna kaho "Please log in to continue"

// 2_ ANS

let logged = true;
if (logged) {
    console.log("welcome, you!");
} else {
    console.log("Please log in to continue")
}

// Agr temperature 40 se zyada hai,
// toh kaho "IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to 
// 'heat wave",

// 3_ ANS

let temperature = 60;
if (temperature > 30) {
    console.log("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to'heat wave,");
}

// Agr bank account m kamas kam Rs. 1000000 hain,
// toh kaho "Congratulations! You are a millionaire"
// warna kaho "I'm sorry, you are not a millionaire"

// 4_ ANS
let bankAccount = 1000000;
if (bankAccount > 40000) {
    console.log("Congratulations! You are a millionaire");
} else {
    console.log("I'm sorry, you are not a millionaire");
}

// Agr car electric hai,
// toh matlab Tesla company ne banai hai
// warna Tesla ne nahi banai

// 5_ ANS

let carElectric = true;
if(carElectric) {
    console.log("tesla company na bnai ha");
} else {
    console.log("tesla na nahi bnai");
}

// Agr abhi wala score puranay high score se zyada hai,
// toh kaho "Congratulations!! Your new high score is <user's high score>"
// warna kaho "Try Again. You just need <the number of more points needed 
// to beat the high score> to win!"

// 6_ ANS
let score = true;
if(score) {
    console.log("Congratulations!! Your new high score is <user's high score>");
} else {
    console.log("Try Again. You just need <the number of more points needed to beat the high score> to win!");
}

// Agr number even hai (matlab 2 se divide karne p iss ka remainder zero hai),
// toh kaho "This is EVEN"
// warna kaho "This is ODD"

// 7_ ANS
let number = true;
if(number) {
    console.log("This is EVEN");
} else {
    console.log("This is ODD");
}

