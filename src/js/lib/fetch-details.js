import {
  timezone,
  dayOfYear,
  dayOfWeek,
  week,
  time,
  timezoneAbb,
} from "../utils/elements";

export function fetchDetails() {
  fetch("http://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      timezone.textContent = data.timezone;
      dayOfYear.textContent = data.day_of_year;
      dayOfWeek.textContent = data.day_of_week;
      week.textContent = data.week_number;
      // time.textContent = new Date(Date.parse(data.datetime));
      time.textContent = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      timezoneAbb.textContent = data.abbreviation;
    })
    .catch((error) => console.error(error));
}
