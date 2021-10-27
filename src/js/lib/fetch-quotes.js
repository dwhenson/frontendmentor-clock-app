import { quote, author } from "../utils/elements";

/**
 * Fetches quotes for quotes section
 */
export function fetchQuotes() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data.content;
      author.textContent = data.author;
    })
    .catch((error) => console.error(error));
}
