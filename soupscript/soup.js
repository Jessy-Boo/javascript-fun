const bodyText = ["", ""];
const bodyWord = ["where", "did", "you", "a", "fox", "grind", "halt", "accumulation", "admire", "vegetable", "jail", "devil", "building", "tongue", "slave", "posture", "unfair", "committee", "ego", "spend.", "snack.", "squash.", "soak.", "stain.", "shelter.", "suitcase.", "salt", "salvation", "smooth", "sympathetic", "scenario", "suppress", "specimen", "lonely vagoo monster", "corrupt", "consort", "send", "frighten", "join", "obfuscate", "overhaul", "aberration", "plaque", "castigation", "connoisseur", "belabor", "eulogy", "stipple", "patron", "sand", "queen"];
const bodyChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", ".", ",", "!", "?"];
const wordAdj = ["dead", "hairless", "sadistic", "metal", "wild", "domesticated", "abnormal", "medicated", "cocky", "massive", "disrespectful", "impressive", "out of control", "internet worthy", "hilarious", "sexy", "hot", "very tactful", "bearded", "duck-like", "violent", "slimy", "insanely creepy", "embarrassed", "self-centered", "talking", "naked", "angry", "shaky", "deep", "sick", "zippy", "sticky", "fluffy", "frozen", "unholy", "painfully honest", "filthy", "fighting", "bonkers", "harsh", "frisky", "greedy", "crawly", "insane", "hideous", "ungodly", "abusive", "drunken", "hateful", "idiotic", "twisted", "useless", "yapping", "magical", "indecent", "godawful", "arrogent", "confused", "flirting", "high-end", "insecure", "maniacal", "sickened", "slippery", "stubborn", "tripping", "vengeful", "sinister", "costumed", "cowardly", "haunting", "startled", "alcoholic", "demanding", "shivering", "offensive", "nighttime", "startling", "disgusting", "slap happy", "disturbing", "adulterous", "blathering", "flickering", "rebellious", "impertinent", "bull headed", "hyperactive", "infuriating", "outnumbered", "pea-brained", "territorial", "underhanded", "zombie like", "mischievous", "at-the-ready", "free-loading", "house-broken", "up-to-no-good", "cruel-hearted", "misunerstood", "narrow-minded", "self-absorbed", "bat-shit-crazy", "fiercely-loyal", "out-of-control", "fear-inspiring", "bat shit crazy", "mentally impaired"];
const wordNoun = ["factory reset button", "blood rage", "idiot", "toaster", "legend", "death wish", "therapy", "goal in life", "marketing idea", "psychic", "knife", "sandwich", "hunting ground", "lettuce", "kitty", "friendly grandpa", "french chef", "antidepressant drug", "corn cake", "president of the night", "candlestick maker", "coffee pot", "brethren", "national security agency", "tank", "useless brakes", "international law enforcement agency", "sound barrier", "skinny woman", "private investor", "main people", "stock car", "elastic band", "whole blood", "telephone", "mad cow disease", "scourge upon the earth", "rough-skinned newt", "karate", "pistol", "legal warrant", "people who are hurt", "idea he siggested", "party of the first part", "place of business", "double fault", "kitty cat", "famous landscape painting", "hairy legs", "old irish cottage", "pocket flask", "liquid oxygen", "laser beams", "preventive strike", "dingle berry"];
const wordVerb = ["surrounds", "stabs", "returns", "medicates", "blindsides", "boogies", "flaps", "trips", "swats", "sucks in", "harasses", "traps", "snoops", "explodes", "sketches", "scatters", "challenges", "fights", "burries", "splatters", "smacks", "peddles", "balances", "trips up", "boggles", "pokes", "critiques", "fears", "initiates", "lines up", "runs over", "schedules", "cooks", "imprisons", "underestimates", "cajoles", "wheedles", "soft soaps", "butters up", "sweet-talks", "prevails", "shreds", "drinks", "disputes", "echoes", "mimics", "berates", "castigates", "underrates", "taunts"];
const wordAdv = ["accidentally", "busily", "daringly", "deliberately", "exactly", "fast", "fiercely", "hard", "hurriedly", "inquisitively", "loosely", "mysteriously", "rarely", "really", "regularly", "reluctantly", "repeatedly", "rightfully", "sharply", "sleepily", "slowly", "so", "speedily", "suddenly", "swiftly", "unexpectedly", "tightly", "solemnly", "seriously", "beautifully", "boldly", "bravely", "courageously", "calmly", "carefully", "cautiously", "safely", "cheerfully", "joyously", "eagerly", "enthusiastically", "gladly", "happily", "easily", "elegantly", "gracefully", "equally", "faithfully", "frankly", "truthfully", "honestly"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function appendText(text) {
    document.body.appendChild(document.createTextNode(text));
}

function soupText(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(bodyText) + " ");
    }
}

function soupWord(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(bodyWord) + " ");
    }
}

function soupChar(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(bodyChar));
    }
}

function soupAdj(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(wordAdj) + " ");
    }
}

function soupNoun(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(wordNoun) + " ");
    }
}

function soupVerb(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(wordVerb) + " ");
    }
}

function soupAdv(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(wordAdv) + " ");
    }
}

function soupPhrase(count) {
    for (let i = 0; i < count; i++) {
        let adj = getRandomElement(wordAdj);
        let adj2 = getRandomElement(wordAdj);
        let noun = getRandomElement(wordNoun);
        let verb = getRandomElement(wordVerb);
        let adv = getRandomElement(wordAdv);
        appendText(`The ${adj} ${adj2} ${noun} ${verb} ${adv}. `);
    }
}

function soupMayhem(count) {
    const mayhem = bodyText.concat(bodyWord, bodyChar, wordAdj, wordNoun, wordVerb, wordAdv);
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(mayhem));
    }
}

function soupInsp(count) {
    for (let i = 0; i < count; i++) {
        appendText(getRandomElement(wordAdj) + " " + getRandomElement(wordNoun) + " ");
    }
}
