// do not finish a value with a space
var bodyText = ["", ""]
var bodyWord = ["where", "did", "you", "a", "fox", "grind", "halt", "accumulation", "admire", "vegetable", "jail", "devil", "building", "tongue", "slave", "posture", "unfair", "committee", "ego", "spend.", "snack.", "squash.", "soak.", "stain.", "shelter.", "suitcase.", "salt", "salvation", "smooth", "sympathetic", "scenario", "suppress", "specimen", "lonely vagoo monster", "corrupt", "consort", "send", "frighten", "join", "obfuscate", "overhaul", "aberration", "plaque", "castigation", "connoisseur", "belabor", "eulogy", "stipple", "patron", "sand", "queen"]
var bodyChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", " ", " ", " ", " ", ". ", ". ", ". ", ". ", ", ", ", ", ", ", ", ", "! ", "? ", "'"]
var wordAdj = ["dead", "hairless", "sadistic", "metal", "wild", "domesticated", "abnormal", "medicated", "cocky", "massive", "disrespectful", "impressive", "out of control", "internet worthy", "hilarious", "sexy", "hot", "very tactful", "bearded", "duck-like", "violent", "slimy", "insanely creepy", "embarrassed", "self-centered", "talking", "naked", "angry", "shaky", "deep", "sick", "zippy", "sticky", "fluffy", "frozen", "unholy", "painfully honest", "filthy", "fighting", "bonkers", "harsh", "frisky", "greedy", "crawly", "insane", "hideous", "ungodly", "abusive", "drunken", "hateful", "idiotic", "twisted", "useless", "yapping", "magical", "indecent", "godawful", "arrogent", "confused", "flirting", "high-end", "insecure", "maniacal", "sickened", "slippery", "stubborn", "tripping", "vengeful", "sinister", "costumed", "cowardly", "haunting", "startled", "alcoholic", "demanding", "shivering", "offensive", "nighttime", "startling", "disgusting", "slap happy", "disturbing", "adulterous", "blathering", "flickering", "rebellious", "impertinent", "bull headed", "hyperactive", "infuriating", "outnumbered", "pea-brained", "territorial", "underhanded", "zombie like", "mischievous", "at-the-ready", "free-loading", "house-broken", "up-to-no-good", "cruel-hearted", "misunerstood", "narrow-minded", "self-absorbed", "bat-shit-crazy", "fiercely-loyal", "out-of-control", "fear-inspiring", "bat shit crazy", "mentally impaired"]
var wordNoun = ["factory reset button", "blood rage", "idiot", "toaster", "legend", "death wish", "therapy", "goal in life", "marketing idea", "psychic", "knife", "sandwich", "hunting ground", "lettuce", "kitty", "friendly grandpa", "french chef", "antidepressant drug", "corn cake", "president of the night", "candlestick maker", "coffee pot", "brethren", "national security agency", "tank", "useless brakes", "international law enforcement agency", "sound barrier", "skinny woman", "private investor", "main people", "stock car", "elastic band", "whole blood", "telephone", "mad cow disease", "scourge upon the earth", "rough-skinned newt", "karate", "pistol", "legal warrant", "people who are hurt", "idea he siggested", "party of the first part", "place of business", "double fault", "kitty cat", "famous landscape painting", "hairy legs", "old irish cottage", "pocket flask", "liquid oxygen", "laser beams", "preventive strike", "dingle berry"]
var wordVerb = ["surrounds", "stabs", "returns", "medicates", "blindsides", "boogies", "flaps", "trips", "swats", "sucks in", "harasses", "traps", "snoops", "explodes", "sketches", "scatters", "challenges", "fights", "burries", "splatters", "smacks", "peddles", "balances", "trips up", "boggles", "pokes", "critiques", "fears", "initiates", "lines up", "runs over", "schedules", "cooks", "imprisons", "underestimates", "cajoles", "wheedles", "soft soaps", "butters up", "sweet-talks", "prevails", "shreds", "drinks", "disputes", "echoes", "mimics", "berates", "castigates", "underrates", "taunts"]
var wordAdv = ["accidentally", "busily", "daringly", "deliberately", "exact", "fast", "fiercely", "hard", "hurriedly", "inquisitively", "loosely", "mysteriously", "rarely", "really", "regularly", "reluctantly", "repeatedly", "rightfully", "sharply", "sleepily", "slowly", "so", "speedily", "suddenly", "swiftly", "unexpectedly", "tightly", "solemnly", "seriously", "beautifully", "boldly", "bravely", "courageously", "calmly", "carefully", "cautiously", "safely", "cheefully", "joyfously", "eagerly", "enthusiastically", "gladly", "happily", "easily", "elegantly", "gracefully", "equally", "faithfully", "frankly", "truthfully", "honestly", ]

// selects a random value from arrays
function soupText(count) {
  for (var i = 0; i < count; i++)
    document.write(bodyText[Math.floor(Math.random() * bodyText.length)] + " ")
}

// Words with no particular filter
function soupWord(count) {
  for (var i = 0; i < count; i++)
    document.write(bodyWord[Math.floor(Math.random() * bodyWord.length)] + " ")
}

// Generates a random character
function soupChar(count) {
  for (var i = 0; i < count; i++)
    document.write(bodyChar[Math.floor(Math.random() * bodyChar.length)])
}

// Adjective
function soupAdj(count) {
  for (var i = 0; i < count; i++)
    document.write(wordAdj[Math.floor(Math.random() * wordAdj.length)] + " ")
}

// Noun
function soupNoun(count) {
  for (var i = 0; i < count; i++)
    document.write(wordNoun[Math.floor(Math.random() * wordNoun.length)] + " ")
}

// Verb
function soupVerb(count) {
  for (var i = 0; i < count; i++)
    document.write(wordVerb[Math.floor(Math.random() * wordVerb.length)] + " ")
}

// Adverb
function soupAdv(count) {
  for (var i = 0; i < count; i++)
    document.write(wordAdv[Math.floor(Math.random() * wordAdv.length)] + " ")
}

// generates a phrase by using random words while following the adj adj noun verb adv formula
function soupPhrase(count) {
  var adj = wordAdj[Math.floor(Math.random() * wordAdj.length)]
  var adj2 = wordAdj[Math.floor(Math.random() * wordAdj.length)]
  var noun = wordNoun[Math.floor(Math.random() * wordNoun.length)]
  var verb = wordVerb[Math.floor(Math.random() * wordVerb.length)]
  var adv = wordAdv[Math.floor(Math.random() * wordAdv.length)]
  for (var i = 0; i < count; i++)
    document.write("The " + adj + " " + adj2 + " " + noun + " " + verb + " " + adv + ". ")
}

// just coing crazy, nbd
function soupMayhem(count) {
	var mayhem = bodyText.concat(bodyWord, bodyChar, wordAdj, wordNoun, wordVerb, wordAdv)
	for (var i = 0; i < count; i++)
		document.write(mayhem[Math.floor(Math.random() * mayhem.length)])
}

// random sets of nouns and adjectives
function soupInsp(count) {
  for (var i = 0; i < count; i++)
    document.write(wordAdj[Math.floor(Math.random() * wordAdj.length)] + " " + wordNoun[Math.floor(Math.random() * wordNoun.length)])
}