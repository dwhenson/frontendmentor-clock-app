import { city, country, time, timezoneAbb, greeting } from "../utils/elements";

/**
 * Updates the greeting based on the user time hour
 * @param      {string}  timeString  The datatime string
 */
function updateGreeting(timeString) {
  const hour = Number.parseInt(timeString, 10);
  if (hour >= 5 && hour <= 11) {
    greeting.textContent = "Good morning";
  }
  if (hour >= 12 && hour <= 17) {
    greeting.textContent = "Good afternoon";
  }
  if (hour >= 18 || hour <= 4) {
    greeting.textContent = "Good evening";
  }
}

/**
 * Updates the time and passes the hour to updateGreeting
 * @param      {Date}  timezone  The timezone
 */
export function updateTime(timezone) {
  timezoneAbb.textContent = timezone;
  const timeString = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  time.textContent = timeString;
  updateGreeting(timeString);
}

/**
 * Fetches the user location data based on an IP address
 * @param      {string}  ip      The user IP address
 */
function fetchLocation(ip) {
  fetch(`https://ipapi.co/${ip}/json/`)
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.city;
      country.textContent = data.country_name;
    })
    .catch((error) => console.error(error));
}

/**
 * Fetches the user IP address and passes to fetchLocation
 */
export function fetchIp() {
  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      fetchLocation(data.ip);
    })
    .catch((error) => console.error(error));
}
