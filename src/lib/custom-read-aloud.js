/**
 * Listens to an audio element, adds a highlight class to elements with a data-attribute value for start time in seconds.
 *
 * @class CustomReadAloud
 * @author Phil Gray
 * @version 0.1.1
 *
 */
export class CustomReadAloud {
  /**
   * Creates an instance of CustomReadAloud.
   * @param {string} el - The id of a container element for the elements to be highlighted.
   * @param {string} audioEl - The id of the audio element.
   * @param {object} [options={}]
   * @param {boolean} [options.touchTextToPlay=true] - Enable to allow user to touch or click text to begin playback.
   * @param {string} [options.highlightClass=highlighted] - The classname applied to highlighted elements. Customize for preference or to avoid namespace conflicts in stylesheet.
   * @param {string} [options.dataAttribute=playhead] - The unique part of the data-attribute property name. The default is `playhead`, so the data-attribute name is `data-playhead`. Customize for preference or to avoid namespace conflicts with other libraries.
   * @param {number} [options.audioClipBegin=0] - The start time for the audio clip.
   * @param {number|null} [options.audioClipEnd=null] - The end time for the audio clip.
   * @param {number} [options.playbackRate=1] - The initial playback rate for the audio element.
   * @memberof CustomReadAloud
   */
  constructor(el, audioEl, options = {}) {
    this.el = document.querySelector(el);
    this.audioEl = audioEl;
    Object.assign(
      this,
      {
        touchTextToPlay: true,
        highlightClass: 'highlighted',
        dataAttribute: 'playhead',
        audioClipBegin: 0,
        audioClipEnd: null,
        playbackRate: 1
      },
      options
    );
    this.current = this._roundHalf(this.audioClipBegin);
    this.lines = this.el.querySelectorAll(`[data-${this.dataAttribute}]`);
    this.player = document.querySelector(this.audioEl);
    this.times = null;
    this.highlighted = null;

    this._init();
  }

  /** Utility Methods */

  /**
   * Rounds a number to the nearest 0.5.
   *
   * @param {number} n
   * @returns {number}
   * @memberof CustomReadAloud
   */
  _roundHalf(n) {
    return Number((Math.round(Number(n) * 2) / 2).toFixed(1));
  }

  /**
   * Checks that `lines` and `player` elements are found in the document and not undefined. Then, extracts `times` as an object from the dataset for each line and sets event listeners on each line as well as the audio player.
   *
   * @returns {void}
   * @memberof CustomReadAloud
   */
  _init() {
    if (this.lines && this.player) {
      /** may require `Array.from` polyfill for older browsers */
      this.times = Array.from(this.lines).reduce((acc, curr) => {
        const roundedTime = this._roundHalf(curr.dataset.playhead);
        if (!acc[roundedTime]) {
          acc[roundedTime] = curr;
        }
        return acc;
      }, {});

      /** Event Listeners */
      if (this.touchTextToPlay) {
        /** may require `Array.forEach` polyfill for older browsers */
        this.lines.forEach(span =>
          span.addEventListener('click', () =>
            this._movePlayhead(span.dataset.playhead)
          )
        );
      }

      this.player.addEventListener('timeupdate', () => this._onTimeUpdate());
      this.player.addEventListener('ended', () => this.stop());
    }
  }

  /** "Private" methods prefixed with _ */

  /**
   * Removes all highlights and adds the class to the selected element.
   *
   * @param {HTMLElement} highlighted
   * @returns {void}
   * @memberof CustomReadAloud
   */
  _highlight(highlighted) {
    this._removeHighlights();
    highlighted.classList.add(this.highlightClass);
    this.highlighted = highlighted;
  }
  /**
   * Iterates through `lines` and removes highlighted class from each.
   *
   * @returns {void}
   * @memberof CustomReadAloud
   */
  _removeHighlights() {
    this.lines.forEach(span => span.classList.remove(this.highlightClass));
  }
  /**
   * Sets `this.current` for each `timeupdate` event emitted randomly 4 times each second by the audio element.
   *
   * @returns {void}
   * @memberof CustomReadAloud
   */
  _onTimeUpdate() {
    this.current = this._roundHalf(this.player.currentTime);
    const highlighted = this.times[this.current];
    /** Only call`_highlight` if `highlighted` has changed since the last time. */
    if (highlighted && highlighted !== this.highlighted) {
      this._highlight(highlighted);
    }
    if (
      this.audioClipEnd &&
      this.current >= this._roundHalf(this.audioClipEnd)
    ) {
      this.stop();
    }
  }

  /**
   * Sets `current` and plays the audio.
   *
   * @param {number} newTime - The number of seconds from the start of the actual audio clip.
   * @returns {void}
   * @memberof CustomReadAloud
   */
  _movePlayhead(newTime) {
    this.current = this._roundHalf(newTime);
    this.play();
  }

  /** Public Methods */
  /**
   * Sets `currentTime` and `playbackRate` on the audio element and calls its `play` method.
   *
   * @returns {void}
   * @memberof CustomReadAloud
   */
  play() {
    this.player.currentTime = this.current;
    this.player.playbackRate = this.playbackRate;
    this.player.play();
  }
  /**
   * Calls the audio element's `pause` method.
   *
   * @returns {void}
   * @memberof CustomReadAloud
   */
  pause() {
    this.player.pause();
  }
  /**
   * Simulates `stop` functionality by calling the element's `pause` button and resetting its `currentTime` to 0. Also removes all highlights and resets `current`.
   *
   * @returns {void}
   * @memberof CustomReadAloud
   */
  stop() {
    this.pause();
    this._removeHighlights();
    this.player.currentTime = this.audioClipBegin;
    this.current = this.audioClipBegin;
  }
  /**
   * Updates the audio element's playback rate.
   *
   * @returns {void}
   * @param {number|string} newRate - The playback rate for the audio element in seconds.
   * @memberof CustomReadAloud
   */
  changePlaybackRate(newRate) {
    /** Dynamically typed for ease of use. */
    const rate = Number(newRate);
    if (isNaN(rate)) {
      console.log('playback rate must be a number');
    } else {
      this.playbackRate = rate;
    }
  }
  /**
   * Calls `_movePlayhead` with a new time in seconds.
   *
   * @param {number|string} newTime - The number of seconds from the start of the actual audio clip.
   * @returns {void}
   * @memberof CustomReadAloud
   */
  movePlayhead(newTime) {
    /** Dynamically typed for ease of use. */
    const time = Number(newTime);
    if (isNaN(time)) {
      this._movePlayhead(time);
    }
  }
}
