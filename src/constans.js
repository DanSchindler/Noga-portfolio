const navBarOptions = {
  about: "about",
  portfolio: "portfolio",
};
const projectsData = [
  {
    id: 2,
    title: "Zot Ani \n (This is Me)",
    description:
      "Zot Ani   |   “Zot Ani” means this is me. short video introducing me. Cut out Video.",
    imageUrl: "/assets/projects/zotAni.png",
    imageAlt: "",
    layout: "StackedImageLayout",
    coverMedia: {
      url: "/assets/projects/zotani/zot-ani.mp4",
      alt: "zot-ani-vid",
      orientation: "horizontal",
    },
    images: [
      { url: "/assets/projects/zotani/zotAniGrid.png", alt: "zot-ani-grid" },
    ],
  },
  {
    id: 1,
    title: "Cé Bon",
    description: "Cé Bon   |   Soap Bar Package design. ",
    imageUrl: "/assets/projects/cebon/mockup-mix.png",
    imageAlt: "soap",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/cebon/mockup-pear.png", alt: "pear-soap" },
      { url: "/assets/projects/cebon/mockup-lemon.png", alt: "lemon-soap" },
      { url: "/assets/projects/cebon/mockup-fig.png", alt: "fig-soap" },
      { url: "/assets/projects/cebon/mockup-mix.png", alt: "mix-soap" },
      { url: "/assets/projects/cebon/swimmers.png", alt: "swimmers" },
    ],
  },
  {
    id: 3,
    title: "Album Cover \n Zohar Argov",
    description:
      'ZOHAR   |   Album Cover for the famous Israeli singer Zohar Argov. Zohar Argov, who was very famous in the 80’s, is widely known in Israel as "The king of Mizrahi (Middle Eastern) music". Print.',
    imageUrl: "/assets/projects/zoharArgov.png",
    imageAlt: "zoharArgov",
    layout: "StackedImageLayout",
    images: [
      {
        url: "/assets/projects/zohar/frontCoverZohar.png",
        alt: "front-cover-zohar",
      },
      {
        url: "/assets/projects/zohar/backCoverZohar.png",
        alt: "back-cover-zohar",
      },
      {
        url: "/assets/projects/zohar/openCoverZohar.png",
        alt: "open-cover-zohar",
      },
      { url: "/assets/projects/zohar/zoharArgov.gif", alt: "zohar-show-gif" },
    ],
  },
  {
    id: 4,
    title: "ELIFELET \n Logo",
    description: "ELIFELET   |   Logo design inspired by street art.",
    imageUrl: "/assets/projects/elifelet.png",
    imageAlt: "elifelet",
    layout: "StackedImageLayout",
    headerIndex: 2, 
    gap: '10px',
    postHeaderGap: '110px',
    process: true,
    images: [
      {
        url: "/assets/projects/elifelet/mainLogo.png",
        alt: "main-logo-elifelet",
      },
      {
        url: "/assets/projects/elifelet/stickers.png",
        alt: "stickers-elifelet",
      },
      {
        url: "/assets/projects/elifelet/coasters.png",
        alt: "coasters-elifelet",
      },
      {
        url: "/assets/projects/elifelet/graffity.png",
        alt: "graffity-elifelet",
      },
      {
        url: "/assets/projects/elifelet/processIdeas.png",
        alt: "processIdeas-elifelet",
        orientation: "smaller",
        
      },
      {
        url: "/assets/projects/elifelet/processSymbol.png",
        alt: "processSymbol-elifelet",
        orientation: "vertical smaller",
      },
      { url: "/assets/projects/elifelet/letters.png", alt: "letters-elifelet" },
      {
        url: "/assets/projects/elifelet/mainLogo.png",
        alt: "mainLogo-elifelet",
      },
    ],
  },

  {
    id: 5,
    title: "Sky Bubbles",
    description:
      "Sky Buubles   |   luxury hotel located on top of the highest mountains in the world. Website.",
    imageUrl: "/assets/projects/skyBubbles.png",
    imageAlt: "skyBubbles",
    layout: "StackedImageLayout",
    images: [
      {
        url: "/assets/projects/skyBubbleDemo.mp4",
        alt: "skybuuble-demo",
        orientation: "horizontal",
      },
    ],
  },
  {
    id: 6,
    title: "Constructivisim \n Tools",
    description:
      "Constructivism Tools   |   Tools design inspired by Constructivism. Vector.",
    imageUrl: "/assets/projects/constructivisim.png",
    imageAlt: "constructivisim",
    layout: "StackedImageLayout",
    images: [
      {
        url: "/assets/projects/constructivisim/constructivisimPoster.png",
        alt: "constructivisimPoster",
      },
      {
        url: "/assets/projects/constructivisim/constructivisimGrid.png",
        alt: "constructivisimGrid",
      },
    ],
  },
  {
    id: 7,
    title: "A - Z Animation",
    description:
      "A-Z   |   An animation of a metamorphosis of the letter A into the letter Z. Classic animation.",
    imageUrl: "/assets/projects/a-z.png",
    imageAlt: "a-z",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/a-z.mp4", alt: "a-z", orientation: "vertical" },
    ],
  },
  {
    id: 8,
    title: "Frogi - Kusama",
    description:
      "Frogi Kusama   |   An illustration of a cross between the artist Yayoi Kusama and a frog. Ink on paper.",
    imageUrl: "/assets/projects/frogiKusama.png",
    imageAlt: "frogiKusama",
    layout: "StackedImageLayout",
    images: [{ url: "/assets/projects/frogiKusama.png", alt: "frogiKusama" }],
  },
];
export { navBarOptions, projectsData };
