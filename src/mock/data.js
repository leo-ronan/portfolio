import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Nice to meet you! I am',
  name: 'Leo Ronan,',
  subtitle: 'a Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'leo.png',
  paragraphOne:
    'I began my coding journey when I was 13, when I learned how to put together my first website. After finding my passion, I decided to attend Central Connecticut State University in 2018, majoring in Computer Science.',
  paragraphTwo: `With the realization in early 2020 that a novel virus discovered in China just may become a problem worldwide, I decided to withdraw and begin a new self-taught coding journey.`,
  paragraphThree: `After exploring different resources, and coming across the UCONN/Trilogy Full Stack Web Development Coding Bootcamp, I decided a program such as this could be a good compromise between earning a bachelor's degree, and being self-taught`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'proj1.png',
    title: 'Historical Weather',
    info:
      'My first group project created during the UCONN Coding Bootcamp. A simple app that introduced me to Web APIs and handling JSON data.',
    info2:
      'This app allows the user to submit a city (US) and a date, and they would be presented with the weather on the requested day, as well as on the same day from the previous five years. My role in this project was to provide back-end functionality.',
    repo: 'https://github.com/leo-ronan/HistoricalWeather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proj2.png',
    title: 'Mock Restaurant Online Ordering',
    info:
      'The second group project I partook in was a online to-go ordering system for a mock deli, which utilized a mySQL database to handle menu items and the placing of orders.',
    info2:
      'This website was designed to serve both the customer, and the restaurant management. Customers have the ability to add menu items to an order, and place it. If a phone number and/or email is submitted, the customer would be notified via email and/or phone when their order total, to confirm the order been placed, is in progress, and is complete. Restaurant employees may also log in to access pages where they may add or edit menu items and their corresponding values, as well as view and manage all orders placed by customers.',
    repo: 'https://github.com/troylochner/tlt_deli', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proj3.png',
    title: 'Is It Safe Outside',
    info:
      'My third and final group project created during the bootcamp. This is a React app that processed API response data from the openFEMA and openWeather APIs.',
    info2:
      'With the Covid-19 pandemic still in full swing in the United States, my group and I decided to create a convenient place to check location-based safety-related information. The key page of this site allows a user to submit their city and state (US only), where they would be presented with a five day weather forecast, as well as any nearby declared disaster warnings that are still active. General UI polishing is still needed, and some features had to be cut due to time constraints, such as a user login and "Daily Overview" notification system, are planned to be added soon.',
    repo: 'https://github.com/leo-ronan/IsItSafe1.3/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'leoronan15@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leo-ronan-36b9851b3',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/leo-ronan/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
