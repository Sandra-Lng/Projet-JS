const form = document.querySelector("#comment-form");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const errorMessage = document.querySelector("#error-message");
const commentsList = document.querySelector("#comments-list");

function createCommentCard(author, text) {
  const card = document.createElement("div");
  card.classList.add("comment-card");

  const authorEl = document.createElement("p");
  authorEl.classList.add("comment-author");
  authorEl.textContent = author;

  const textEl = document.createElement("p");
  textEl.classList.add("comment-text");
  textEl.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.textContent = "🗑️ Supprimer";

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(authorEl);
  card.appendChild(textEl);
  card.appendChild(deleteBtn);

  return card;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

function hideError() {
  errorMessage.textContent = "";
  errorMessage.hidden = true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const commentValue = commentInput.value.trim();

  if (nameValue.length < 2) {
    showError("Le nom doit contenir au moins 2 caractères.");
    return;
  }

  if (commentValue.length < 10) {
    showError("Le commentaire doit contenir au moins 10 caractères.");
    return;
  }

  hideError();

  const newComment = createCommentCard(nameValue, commentValue);
  commentsList.prepend(newComment);

  form.reset();
});

const initialComments = [
  { author: "Téo", text: "Superbe recette !" },
  { author: "Léa", text: "Test de commentaire" }
];

initialComments.forEach(function (comment) {
  const card = createCommentCard(comment.author, comment.text);
  commentsList.appendChild(card);
});
