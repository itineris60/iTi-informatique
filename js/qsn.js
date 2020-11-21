
const animDuration = 50000;
const animFrom = 0;
const animMargin = 800;
const animFantomSep = 70;
const animTo = 4000;

function playAnimation() {
  KUTE.fromTo(
    "#pacman",
    { translateX: animFrom },
    { translateX: animTo },
    { easing: KUTE.Easing.easingCubicOut, duration: animDuration }
  ).start();
  KUTE.fromTo(
    "#fantome1",
    { translateX: animFrom-animMargin },
    { translateX: animTo },
    { easing: KUTE.Easing.easingCubicOut, duration: animDuration-5000 }
  ).start();
  KUTE.fromTo(
    "#fantome2",
    { translateX: animFrom-animMargin+animFantomSep },
    { translateX: animTo },
    { easing: KUTE.Easing.easingCubicOut, duration: animDuration-5000 }
  ).start();
  KUTE.fromTo(
    "#fantome3",
    { translateX: animFrom-animMargin+animFantomSep*2 },
    { translateX: animTo },
    { easing: KUTE.Easing.easingCubicOut, duration: animDuration-5000 }
  ).start();
  KUTE.fromTo(
    "#fantome4",
    { translateX: animFrom-animMargin+animFantomSep*3 },
    { translateX: animTo },
    { easing: KUTE.Easing.easingCubicOut, duration: animDuration-5000 }
  ).start();
  KUTE.fromTo(
    "#fantome5",
    { translateX: animFrom-animMargin+animFantomSep*4 },
    { translateX: animTo },
    { easing: KUTE.Easing.easingCubicOut, duration: animDuration-5000 }
  ).start();
}

setInterval(function () {
  playAnimation();
}, 24000);
playAnimation();
