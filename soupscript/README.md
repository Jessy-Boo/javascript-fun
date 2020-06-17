### Soupscript

This is a javascript library to generate content.
An intended use would be to help fill out content sections in the developmemt phase

Heres how to implement it into your own code

First, you will need an array
{% codeblock Arrays lang:javascript URL link_text %}
var exampleArray = ["Orange", "Apple", "Blue"]
{% endcodeblock %}

Then, the fun part. You must create a function that will create a specific number of iterations of text that is randomly selected from its index in the array.
If you do not intend to have the functionality of being able to recursively add more randomly selected values, you can use the same code without the for loop and count argument.--------------------------------------------------------------------------------------------------------------------------------------------------------------
{% codeblock Program lang:javascript URL link_text %}
function soupExample(count) {
  for (var i = 0; i < count; i++)
    document.write(exampleArray[Math.floor(Math.random() * exampleArray.length)] + " ")
}
{% endcodeblock %}

{% codeblock Declaring lang:html URL link_text %}
<script>soupExample(1);</script>
{% endcodeblock %}