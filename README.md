# Frontend Mentor - Clock app solution

![](./design/preview.jpg)

## Overview

I'm not entirely happy with this one (see problems below for details). I had problems with the recommended APIs, with one just reporting a duplicate API key, which I couldn't get past, despite trying with multiple email addresses and accounts. This led to me using a more unreliable API as an alternative, which used `http` rather than `https`. As a result **sometimes** the city location is not retrieved and Chrome rejects the call.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

## Lessons learnt

- 💡 I need to carefully consider the APIs I use. Not just ease of use, but also reliability and how up to date they are with recent best practices.

## Problems

I would very much welcome advice on the following issues:

- ⚠️ I have prevented scrolling on desktop but the page still scrolls on iOS, and possibly other mobile browsers. I'm not sure if I need to add another CSS rule to prevent this?
- ⚠️ Overall I am not 100% convinced that I took the right approach here. I set a grid on the `body` with three rows of 50vh each. Then add a class with JS translate the three sections by their height.

## Future learning

- 🙇‍♂️ Controlling scroll behavior is still a bit of a mystery to me. Some additional research into this would help with this and other issues (e.g. open burger menus)
