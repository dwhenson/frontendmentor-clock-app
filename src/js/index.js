import { toggle, sections, fetchQuote } from "./utils/elements";
import { fetchQuotes } from "./lib/fetch-quotes";
import { renderDetails } from "./lib/render-details";

// Render details
renderDetails();

// Toggle overall page transition
toggle.addEventListener("change", function () {
  for (const section of sections) {
    section.classList.toggle("translate");
  }
});

// Fetch quotes
fetchQuote.addEventListener("click", fetchQuotes);
