function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}
const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
window.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowDown" || e.key === "Down") {
    console.log(e.key);
    const currTop = extractPos(avatar.style.top);
    if (currTop < window.innerHeight) {
      avatar.style.top = `${currTop + 50}px`;
      console.log(avatar.style.top);
    }
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    console.log(e.key);
    const currTop = extractPos(avatar.style.top);
    if (currTop > 0) {
      avatar.style.top = `${currTop - 50}px`;
      console.log(avatar.style.top);
    }
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    avatar.style.transform = "scale(1,1)";
    console.log(e.key);
    const currLeft = extractPos(avatar.style.left);
    if (currLeft < window.innerWidth) {
      avatar.style.left = `${currLeft + 50}px`;
    }

    console.log(avatar.style.left);
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    avatar.style.transform = "scale(-1,1)";
    console.log(e.key);
    const currLeft = extractPos(avatar.style.left);
    if (currLeft > 0) {
      avatar.style.left = `${currLeft - 50}px`;
    }

    console.log(avatar.style.left);
  } else {
  }
});
const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};
const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};
moveCoin();
