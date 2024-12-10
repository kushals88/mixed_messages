
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

/**
 * get random index from array length
 * @param {*} arrayLength 
 * @returns number
 */
const getRandomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

// generate random sign, fortune and message
const sign = signs[getRandomIndex(signs.length)];
const fortuneKey = Object.keys(fortunes)[getRandomIndex(Object.keys(fortunes).length)];
const fortune = fortunes[fortuneKey];
const message = fortuneMessages[getRandomIndex(fortuneMessages.length)];

/**
 * format forutne message for user
 * @param {*} sign 
 * @param {*} fortune 
 * @param {*} message 
 * @returns string
 */
const formatMessage = (sign, fortune, message) => `
    Your sign is ${sign}

    ${fortune}

    ${message}
`;

console.log(formatMessage(sign, fortune, message));