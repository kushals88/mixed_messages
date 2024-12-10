
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const fortunes = {
    career: "An unexpected opportunity will bring you closer to your dreams.",
    kindness: "A small act of kindness today will yield great rewards tomorrow.",
    patience: "Your patience will soon be tested, but it will lead to success.",
    recognition: "Someone you admire will recognize your talents in a surprising way.",
    growth: "A new path will open, offering growth and prosperity.",
    instincts: "Trust your instincts; they will guide you to the right decision."
};
const fortuneMessages = [
    "You should: embrace change; it will lead to growth.",
    "You should: speak your truth; honesty will open doors.",
    "You should: trust your instincts; they rarely steer you wrong.",
    "You should: seize the moment; opportunities are fleeting.",
    "You should: practice patience; rewards come to those who wait.",
    "You should: let go of doubt; confidence will carry you forward."
]

const randomNumGenerator = (limit) => {
    return Math.floor(Math.random()*limit);
}

const sign = signs[randomNumGenerator(signs.length)];

// console.log(Object.keys(fortunes));
const fortuneKeys = Object.keys(fortunes);
const len = fortuneKeys.length;
const fortuneKey = fortuneKeys[randomNumGenerator(len)];
const fortune = fortunes[fortuneKey];

const message = fortuneMessages[randomNumGenerator(fortuneMessages.length)];

console.log(`Your sign is ${sign}`);
console.log();
console.log(fortune);
console.log();
console.log(message);