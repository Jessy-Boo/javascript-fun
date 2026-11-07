# javascript-fun

`soup.js` — the clean rewrite of the old soupscript random-text generator. Same idea as the word-list-array generator on 1337site, just with the `document.write` scars removed and functions that actually take the count they are given.

## what it does

It appends random text to the page, one function per flavor. All of them take a `count`:

- `soupWord`, `soupChar` — random words from the body-word list, or random characters (letters, digits, punctuation)
- `soupAdj`, `soupNoun`, `soupVerb`, `soupAdv` — one part of speech at a time. the adjective list alone is worth the price of admission
- `soupPhrase` — "The adj adj2 noun verb adv." over and over, fresh roll each time
- `soupInsp` — adjective + noun pairs, for when you need a band name
- `soupMayhem` — every list concatenated, pure noise

Everything appends real text nodes to `document.body` instead of `document.write`, so it can run after the page has loaded.

## run it

It is browser-only (it touches `document.body`), no build, no deps. Point a page at it and call a function:

```html
<script src="soupscript/soup.js"></script>
<script>
  soupPhrase(5);
  soupInsp(3);
</script>
```

Or open any page, include the script, and call the functions from the devtools console.

## honest notes

- `soupText` currently draws from `bodyText = ["", ""]`, so it prints nothing but spaces. that array was clearly meant to hold sentences and never got filled in
- `soupPhrase` uses two independent adjective rolls, so "The dead dead toaster..." is a legal outcome
- `soupscript/README.md` is the old soupscript doc from the pre-rewrite era; kept for reference, it describes the older pattern, not this file
