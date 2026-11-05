
(function () {
  "use strict";
  var track = document.querySelector(".prom-track");
  if (!track) { return; }
  function centre() {
    var extra = track.scrollWidth - track.clientWidth;
    if (extra > 0 && track.scrollLeft === 0) {
      // The family walks at about 44 % of the scene width.
      track.scrollLeft = Math.round(track.scrollWidth * 0.44 - track.clientWidth / 2);
    }
  }
  if (document.readyState === "complete") { centre(); } else { window.addEventListener("load", centre); }
})();
