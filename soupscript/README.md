### Soupscript

Soupscript is a JavaScript library designed to generate content. It is particularly useful for filling out content sections during the development phase.

### How to Implement

Follow these steps to integrate Soupscript into your own code:

1. **Create an Array**

First, you will need an array to hold the content options.

```javascript
var exampleArray = ["Orange", "Apple", "Blue"];
```

2. **Create a Function**

Next, create a function that generates a specific number of iterations of text, randomly selected from the array. If you do not need the functionality to add more randomly selected values recursively, you can use the same code without the `for` loop and `count` argument.

```javascript
function soupExample(count) {
  for (var i = 0; i < count; i++) {
    document.write(exampleArray[Math.floor(Math.random() * exampleArray.length)] + " ");
  }
}
```

3. **Include in HTML**

Finally, declare the function in your HTML to execute it.

```html
<script>
  soupExample(1);
</script>
```