export const links = {};

export const wordColorMap = {
  darkBlue: ["const", "new"],
  blue: ["pedroGardim", "i"],
  yellow: [
    "hire",
    "16beats",
    "modulab",
    "bless",
    "kat",
    "webDaw",
    "metrono",
    "pumblr",
    "musabeat",
    "leukos",
    "gitHub",
  ],
  green: ["Date"],
  lightBlue: ["now"],
  salmon: [`'`],
};

export const colorPalette = {
  yellow: "#DCDCAA",
  darkBlue: "#569cd6",
  lightBlue: "#9CDCFE",
  blue: "#4FC1FF",
  green: "#4EC9B0",
  lime: "#b5cea8",
  salmon: "#ce9178",
  gray: "#777",
};

export const colorMap = {};

Object.entries(wordColorMap).map((color) =>
  color[1].map((word) => {
    colorMap[word] = colorPalette[color[0]];
  })
);

export const projects = [
  {
    title: "Agape",
    picture: "../assets/images/projects/agape.png",
    description:
      "An innovative Meet & Connect App, which allows users to meet people with similar interests. Built with React Native (Expo), Redux TK, Tailwind,  Node.js (Fastify) and MongoDB.",
    url: "https://agape-app.com/",
  },
  {
    title: "Modulab",
    picture: "../assets/images/projects/modulab.png",
    url: "https://github.com/pedrogardim/modulab",
    description:
      "Simulation of modular syntesis on the web. Combine different audio processing modules to create unique sounds.",
  },
  {
    title: "Musabeat",
    picture:
      "https://user-images.githubusercontent.com/81443264/224987137-e1a61977-9b35-4c13-b9a2-88ca67447c9c.gif",
    description:
      "A collaborative music creation web app, which combines most features of a DAW (Digital Audio Workstation), with social network aspects",
    url: "https://github.com/pedrogardim/musabeat",
  },
  {
    title: "GameboyJS",
    picture:
      "https://user-images.githubusercontent.com/81443264/269696469-3289bf5a-41e7-4823-9bd7-fe8c459ee238.gif",
    description:
      "Songbook system for liturgical music. The mobile app features chord transpose and song playback, while the desktop app will project the lyrics",
    url: "https://github.com/pedrogardim/gameboyjs",
  },
  {
    title: "Mastermind",
    picture:
      "https://user-images.githubusercontent.com/81443264/271700137-2aded648-1aa6-419c-9938-ff447aa40d03.gif",
    description:
      "Web adaptation of the classic code-breaking board game Mastermind",
    url: "https://github.com/pedrogardim/mastermind",
  },
  {
    title: "Web DAW",
    picture: "../assets/images/projects/webdaw.png",
    description: "My first experiment with Web Audio API, a music creation app",
    url: "https://github.com/pedrogardim/daw_prototype",
  },
  {
    title: "Coffea Co Landing Page",
    picture:
      "https://user-images.githubusercontent.com/81443264/268409367-a3d7f006-e88c-4c65-8a47-e29b9827b7be.gif",
    description:
      "Welcome to the Coffea Co landing page! This project was completed as Project 1 of the Full Stack Developer Bootcamp at Geekshubs Academy.",
    url: "https://github.com/pedrogardim/bcfs-coffea-landing-page/",
  },
  {
    title: "Scriptura API",
    picture:
      "https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?cs=srgb&dl=pexels-thisisengineering-3861976.jpg&fm=jpg&w=640&h=960&_gl=1*14j4rc9*_ga*OTAwNTgzNzYxLjE2ODg2Nzg2NDA.*_ga_8JE65Q40S6*MTY5ODU5OTY4MC42LjEuMTY5ODU5OTk0NC4wLjAuMA..",
    description:
      "RESTful API offering data on biblical characters, places, verses, and events. Based on Golang and PostgreSQL.",
    url: "https://github.com/pedrogardim/scriptura-api",
  },
];

export const education = [
  { title: "Bless" },
  { title: "Leukos" },
  { title: "Modulab" },
  { title: "Musabeat" },
  { title: "Kat" },
  { title: "Web DAW" },
  { title: "Metrono" },
  { title: "Pumblr" },
];
