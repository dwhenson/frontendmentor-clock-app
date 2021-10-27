import { timezone, dayOfYear, dayOfWeek, week } from "../utils/elements";
import { updateTime } from "./fetch-ip-time";

/**
 * Fetches content required for details section
 */
export function fetchDetails() {
  fetch("http://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      timezone.textContent = data.timezone;
      dayOfYear.textContent = data.day_of_year;
      dayOfWeek.textContent = data.day_of_week;
      week.textContent = data.week_number;
      updateTime(data.abbreviation);
    })
    .catch((error) => console.error(error));
}
