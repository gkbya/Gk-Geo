function checkAnswer(element, isCorrect) {
  const siblings = element.parentElement.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].onclick = null; // disable after first click
  }
  if (isCorrect) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }
}
w
