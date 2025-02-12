const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");
const yesMessage = document.getElementById("yesMessage");
const questionGif = document.getElementById("questionGif");
const emojiGif = document.getElementById("emojiGif");
const happyGif = document.getElementById("happyGif");
const buttons = document.getElementById("buttons");

yesBtn.addEventListener("click", () => {
  questionGif.classList.add("hidden");
  emojiGif.classList.add("hidden");
  happyGif.classList.remove("hidden");
  buttons.classList.add("hidden");
  noMessage.classList.add("hidden");
  yesMessage.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  questionGif.classList.add("hidden");
  happyGif.classList.add("hidden");
  emojiGif.classList.remove("hidden");
  noMessage.classList.remove("hidden");
  noMessage.classList.add("shake");
  setTimeout(() => noMessage.classList.remove("shake"), 300);
});
