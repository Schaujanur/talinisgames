
(function () {
  "use strict";
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var pic = document.querySelector(".cine .cine__pic");
  var frond = document.querySelector(".cine .cine__frond");
  var title = document.querySelector(".cine .cine__title");
  if (!pic) return;
  var ticking = false;
  function update() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset || 0;
    var h = window.innerHeight || 800;
    if (y > h * 1.2) return;
    var t = "translate3d(0," + (y * 0.22).toFixed(1) + "px,0) scale(1.04)";
    pic.style.transform = t;
    if (frond) frond.style.transform = "translate3d(0," + (y * -0.06).toFixed(1) + "px,0)";
    if (title) title.style.opacity = String(Math.max(0, 1 - y / (h * 0.7)).toFixed(3));
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
