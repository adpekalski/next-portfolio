# [CLICK HERE TO VIEW DEMO](https://next-portfolio-cyan-psi.vercel.app/)   

# Project Description
This website was created as a portfolio showcasing my projects and to convey information about me.  
It was intended to have a sophisticated look (***hope it worked***) and incorporate as many animations as possible  
(***without exceeding the limits of good taste***). But in the end it's up to you to decide how it looks.

Maybe the style and animations aren't the most typical and are a little bit odd.  
This is because I wanted this one to have a specific (***Cyberpunk-like***) style that I am fond of.  
The picture on the home page was generated using an AI based on my portrait (***yeah, I know, it's as close as it could be, haha***).  

PS: Normally, I strive to make more informative commits with detailed descriptions.   
However, in this case, with only personal use in mind, time was a decisive factor.

### What I have used 
- `Next.js` as the foundation for building this project.
- `Swiper` for the entire website to create a carousel-like feeling.
- `Framer Motion` to implement animations.
- `EmailJS` as the contact form engine with validation.
- `React Fast Marquee` as a container for icons to move them horizontally.
- `Devicon` for icons inside the marquee/news ticker.
- `React Feather` for other icons.

# Upcoming Changes

### Important! 
- Responsivness based on matchMedia should be changed to typical css media query with *"display: none"*.  
Currently after resizing window on desktop (as much as to get mobile size) the text for **About me** isn't changing.  

### Interaction
- The **Go Back** button currently works based on user search history (not functioning when the website is accessed through a link).
  - This button should be changed to work based on history **OR** bring the user back to the search engine (let's say Google).
- ~~The current navigation on desktops isn't the most intuitive (scrolling by dragging or via pagination).~~
  - ~~Addition of navigation through using the scroll wheel.~~

### Style
- New animations and upgrades for the ones currently used.
- Elimination of the background color change for inputs on autofill.
- Buttons on mobile have a bluish rectangular highlight box after selection (probably default style).
- Double-checking pointer events for all elements with interactions.
- Implementing animations for different states (active, focus, hover, tap etc.).

### Code
- Cleanup for DRYness.
- Further componentization.

### Content
- Updates for next projects and current descriptions.

### Ideas
- Spam protection for contact form?
- About me section as a card?
- Addition of particle effects on the home page?
- Next page or new content for current pages?
- Filter single characters at the end of line in texts and move to next one? 
  
# How to run this code on your device

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
