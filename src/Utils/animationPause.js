function pauseAnimation (route, pause) {
  switch (route) {
    case "/":
      document.getElementById("svgWrapper").style.animationPlayState = pause ? "paused" : "running";
      document.getElementById("backGlow").style.animationPlayState = pause ? "paused" : "running";
      document.getElementById("frontGlow").style.animationPlayState = pause ? "paused" : "running";
      document.getElementById("zakSvg").style.animationPlayState = pause ? "paused" : "running";
      break;
    case "/projects":
      break;
    case "/about":
      break;
    case "/contact":
      break;
    default:
      break;
  }
}

export default pauseAnimation;