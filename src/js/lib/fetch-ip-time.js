import { city, country } from "../utils/elements";

function fetchLocation(ip) {
  fetch(`https://ipapi.co/${ip}/json/`)
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.city;
      country.textContent = data.country_name;
    })
    .catch((error) => console.error(error));
}

export function fetchIp() {
  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      fetchLocation(data.ip);
    })
    .catch((error) => console.error(error));
}
