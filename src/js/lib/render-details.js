import { timezone, dayOfYear, dayOfWeek, week } from "../utils/elements";

export function renderDetails() {
  fetch("http://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      timezone.textContent = data.timezone;
      dayOfYear.textContent = data.day_of_year;
      dayOfWeek.textContent = data.day_of_week;
      week.textContent = data.week_number;
    })
    .catch((error) => console.error(error));
}
