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
