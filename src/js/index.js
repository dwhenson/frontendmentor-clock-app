import { toggle, sections, fetchQuote } from "./utils/elements";
import { fetchIp } from "./lib/fetch-ip-time";
import { fetchDetails } from "./lib/fetch-details";
import { fetchQuotes } from "./lib/fetch-quotes";

// Fetch ip and location
fetchIp();

// Fetch and render details
fetchDetails();

// Toggle overall page transition
toggle.addEventListener("change", function () {
  for (const section of sections) {
    section.classList.toggle("translate");
  }
});

// Fetch quotes
fetchQuote.addEventListener("click", fetchQuotes);
