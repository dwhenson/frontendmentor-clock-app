import { toggle, sections, fetchQuote } from "./utils/elements";
import { fetchQuotes } from "./lib/fetch-quotes";

// Toggle overall page transition
toggle.addEventListener("change", function () {
  for (const section of sections) {
    section.classList.toggle("translate");
  }
});

fetchQuote.addEventListener("click", fetchQuotes);
