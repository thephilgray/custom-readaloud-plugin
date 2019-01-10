# Custom Read Aloud Plugin

## Overview

The custom-read-aloud plugin is designed as a text and audio
synchronization alternative to EPUB Media Overlays. It is inteded for
use cases where automatic page-turning is not required.

## Background

[EPUB Media Overlays
3.1](http://www.idpf.org/epub/31/spec/epub-mediaoverlays.html) defines a
set of standards for reading systems to provide \"enhanced accessibility
for any user who has difficulty following the text of a traditional
book\". Though a valuable accesibility feature for more traditional
text-heavy ebooks and children\'s literature, the specification does not
directly address second language learning. Further, vendor
implementations vary and provide a less than adequate API for developers
of interactive textbooks, who may want to put more control in the
reader\'s hands and can do without the page-turn feature.

## Solution

This is a purely front-end progressive enhancement approach. It executes
after the page is loaded and creates event listeners on the audio
element and text to be synced. These listeners add a CSS class to a
corresponding markup delimited segment of text as the audio is playing.

To avoid potential conflicts in some reading systems, it should not be
used with Media Overlays or within a book that may be utilizing that
feature.

## How It Works

The plugin provides a JavaScript class \`CustomReadAloud\` on the global
object. This can be instantiated in JS with the \`new\` keyword, passing
in element selectors as arguments for the two HTML elements to sync. The
first argument must be a selector for the element containing the
paragraphs or spans of text to be highlighted while the audio is
playing. The second argument must be a selector for the audio element.
In order to sync text with audio, data-attributes (specifying the start
time in seconds) must be manually added to each chunk of text. Upon
instantiation, the plugin will map the chunks of text with their
specified start times and add event listeners to each chunk and the
audio element. The plugin will also listen for \`timeupdate\` events
emitted from the audio object (about 4 times a second) during playback.
If the audio element\'s currentTime approximately matches (within 500ms)
any of the text chunk start times, a CSS class will be applied to
matching text chunk. A rule for this CSS class can be added to the
stylesheet to create a highlight effect. Each time the class is added to
an element containing a chunk of text, it is removed from any other
elements that may have been previously \"highlighted\".

## Notes On This Version

This version is heavily polyfilled to support some reading systems (such
as Adobe Digital Editions) which have not yet implemented standard ES5
(2009) JavaScript features. Polyfilling greatly increases the size of
the code, which subsequently increases page load time. A non-polyfilled
version can be provided, but has only been tested with the latest
versions of iBooks on macOS 10.13.6 and iPad iOS 12.0.

# How to Use It

1.  Assign a selector to the element containing the text to highlight.
    Break the text into chunks, wrapping each chunk in a span or any
    other inline element. Include the \`data-playhead\` attribute in
    each chunk\'s wrapping element, assigning it a value in seconds. You
    may use multiple decimal points for milliseconds, but the value will
    ultimately be rounded to the nearest .5s.

```html
<div id="readAloudText">
  <p>
    <span data-playhead="13.111">There is</span>
    <span data-playhead="13.53444">no Frigate</span>
    <span data-playhead="14">like</span>
    <span data-playhead="14.52">a Book</span>
  </p>
</div>
```

2.  Assign a selector to the audio element.

```html
<audio
  id="audioPlayer"
  src="../audio/05-there_is_no_frigate_dickinson_64kb.mp3"
  controls
></audio>
```

3.  Include the plugin in a script tag before the closing body tag in
    the HTML/XHTML document, followed by a second script tag for your
    script.

```html

      <script src="../script/custom-read-aloud-0.1.1.js" type="text/javascript"></script>
      <script type="text/javascript">
      // your code goes here
      </script>
      </body>
```

4.  Instantiate the \`CustomReadAloud\` class with the \`new\` keyword
    assigning it to a variable. Provide both required arguments: 1) the
    selector for the element containing the text elements; 2) the
    selector for the audio element.

```js
// your code goes here
var customReader = new CustomReadAloud('#readAloudText', '#audioPlayer');
```

5.  To create the highlight effect, add a rule for \`.highlighted\` to
    your stylesheet.

```css
.highlighted {
  background: yellow;
}
```

# Options

## highlightClass _(default: \"highlighted\")_

If you are already using the \`highlighted\` classname in your CSS or
prefer to change it to something else, pass in an options object on
instantiation, including the \`highlightClass\` property with the value
of your preferred classname.

```js
var options = { highlightClass: 'highlighted--red' };
var customReader = new CustomReadAloud(
  '#readAloudText',
  '#audioPlayer',
  options
);
```

## dataAttribute _(default: \"playhead\")_

The default data-attribute name is \`data-playhead\`. You can customize
the unique part of the name after the \"data-\" prefix.

```js
var options = { dataAttribute: 'start' };
var customReader = new CustomReadAloud(
  '#readAloudText',
  '#audioPlayer',
  options
);
// now you can use data-start as the attribute, as in <span data-start="2">epub</span>
```

## touchTextToPlay _(default: true)_

Disable to prevent user from touching or clicking text to begin
playback.

## audioClipBegin _(default: 0)_

The start time for the audio clip.

## audioClipEnd _(default: null)_

The end time for the audio clip.

## playbackRate _(default: 1)_

The initial playback rate for the audio element.

## Combining Options

You can include multiple options in any order. The options object must
be the third argument in the constructor call. All options have
defaults, so the argument is optional.

```js
var options = {
  dataAttribute: 'start',
  highlightClass: 'readAloudHighlight',
  audioClipBegin: 3.5111,
  audioClipEnd: 21.2,
  touchTextToPlay: false,
  playbackRate: 1.5
};
var customReader = new CustomReadAloud(
  '#readAloudText',
  '#audioPlayer',
  options
);
```

# Methods

## play

Sets \`currentTime\` and \`playbackRate\` on the audio element and calls
its \`play\` method.

To replace the default HTML5 audio play button:

```html
<!-- 1. Remove the `controls` attribute from the `audio` tag. -->
<audio
  id="audioPlayer"
  src="../audio/05-there_is_no_frigate_dickinson_64kb.mp3"
></audio>
<!-- 2. Create a button with an `onclick` attribute. Set its value to the customReader.play(), assuming you assigned the class instance to `var customReader`. -->
<button onclick="customReader.play()">Play</button>
```

## pause

Calls the audio element\'s \`pause\` method.

```html
<button onclick="customReader.pause()">Pause</button>
```

## stop

Simulates \`stop\` functionality by calling the element\'s \`pause\`
button and resetting its \`currentTime\` to 0. Also removes all
highlights and resets \`current\`.

```html
<button onclick="customReader.stop()">Stop</button>
```

## movePlayhead*( newTime {number \| string} )*

The initial playback rate for the audio element.

## changePlaybackRate*( newRate {number \| string} )*

Updates the audio element\'s playback rate.

NOTE: Currently incompatible with Adobe Digital Editions.

To create a custom playback rate control:

```html
<!-- Create a new HTML input element; it should at the very least have a selector and a value that is always a number -->
<input
  id="rate"
  name="rate"
  type="range"
  min="0.5"
  max="2"
  step=".25"
  value="1"
/>
```

```js

    // select the input and add an event listener that listens to the `change` event
    // on change, pause the audio, call the `changePlaybackRate` method on the instance, passing in `event.target.value`, and then resume playing
    var rateController = document.querySelector("#rate");
    rateController.addEventListener("change",
       function(e){
       customReader.pause(); customReader.changePlaybackRate(e.target.value); customReader.play();
       };
    );
```

# Events

## playStateChange

The audio player emits this custom event whenever playback state changes
to play, pause, or end. The event object contains a payload,
\`event.detail.isPlaying\`, which returns a boolean value for whether or
not the audio is currently playing. This value is identical and can be
used interchangeably with \`CustomReadAloud.isPlaying\`.

To subscribe to the event:

```js
    // add an event listener to the audio element used to instantiate the class
    var customReader = new CustomReadAloud(  '#readAloudText','#audioPlayer');
    var audioEl = document.querySelector("#audioPlayer");
    audioEl.addEventListener("playStateChange",
       function(e) {
       if(e.detail.isPlaying) {
       // do something if audio is playing
           };
       else {
       // do something else if audio is not playing
           };
       };
    );
```
