const navBarOptions = {
  about: "about",
  portfolio: "portfolio",
};
const projectsData = [
  {
    id: 9,
    title: "KAZI",
    subTitle: "Packaging",
    description:
      "KAZI   |   Packaging design for a vitamin and nutritional supplement company.",
    imageUrl: "/assets/projects/KaziCover.png",
    imageUrlMobile: "/assets/projects/KaziCoverMobile.png",
    imageAlt: "kazi",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/kazi/kazi1.png", alt: "kazi1" },
      { url: "/assets/projects/kazi/kazi2.png", alt: "kazi2" },
      { url: "/assets/projects/kazi/kazi3.png", alt: "kazi3" },

    ],
  },
  {
    id: 10,
    title: "The ARCHIVE",
    subTitle: "Logo",
    description:
      "The Archive   |   Logo design for a store for vintage magazine collectors.",
    imageUrl: "/assets/projects/ArchiveCover.png",
    imageUrlMobile: "/assets/projects/ArchiveCoverMobile.png",
    imageAlt: "archive",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/archive/archive3.png", alt: "archive-white-logo" },
      { url: "/assets/projects/archive/archive1.png", alt: "archive-sign" },
      { url: "/assets/projects/archive/archive2.png", alt: "archive-red-logo" },
      { url: "/assets/projects/archive/archive4Grid.png", alt: "archive-grid" },
    ],
  },
  {
    id: 2,
    title: "Zot Ani",
    subTitle: "Video",
    description:
      "Zot Ani   |   “Zot Ani” means this is me. short video introducing me. Cut out Video.",
    imageUrl: "/assets/projects/zotAni.png",
    imageUrlMobile:  "/assets/projects/zotAniMobile.png",
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
    subTitle: "Packaging",
    description: "Cé Bon   |   Soap Bar Package design. ",
    imageUrl: "/assets/projects/cebon/mockup-mix-cover.png",
    imageUrlMobile: "/assets/projects/cebonMobile.png",
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
    id: 4,
    title: "ELIFELET",
    subTitle: "Logo",
    description: "ELIFELET   |   Logo design inspired by street art.",
    imageUrl: "/assets/projects/elifelet.png",
    imageUrlMobile: "/assets/projects/elifeletMobile.png",
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
    id: 11,
    title: "Ambiguous Loss",
    subTitle: "Posters",
    description:
      "Ambiguous Loss   |   The feeling of losing a person who is apparently still alive, but is actually not present with us physically or cognitively/emotionally. Posters. ",
    imageUrl: "/assets/projects/AmbiguousLossCover.png",
    imageUrlMobile: "/assets/projects/AmbiguousLossCoverMobile.png",
    imageAlt: "AmbiguousLoss",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/ambiguousLoss/ambiLoss1.png", alt: "ambiLoss1" },
      { url: "/assets/projects/ambiguousLoss/ambiLoss2.png", alt: "ambiLoss2" },
      { url: "/assets/projects/ambiguousLoss/ambiLoss3.png", alt: "ambiLoss3" },
      { url: "/assets/projects/ambiguousLoss/ambiLoss4.png", alt: "ambiLoss4" },

    ],
  },
  {
    id: 3,
    title: "Zohar Argov",
    subTitle: "Album Cover",
    description:
      'Zohar Argov   |   Album Cover for the famous Israeli singer Zohar Argov. Zohar Argov, who was very famous in the 80’s, is widely known in Israel as "The king of Mizrahi (Middle Eastern) music". Print.',
    imageUrl: "/assets/projects/zoharArgov.png",
    imageUrlMobile:  "/assets/projects/zoharArgovMobile.png",
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
    id: 7,
    title: "A - Z",
    subTitle: "Animation",
    description:
      "A-Z   |   An animation of a metamorphosis of the letter A into the letter Z. Classic animation.",
    imageUrl: "/assets/projects/a-z.png",
    imageUrlMobile: "/assets/projects/a-zMobile.png",
    imageAlt: "a-z",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/a-z.mp4", alt: "a-z", orientation: "vertical" },
    ],
  },
  {
    id: 5,
    title: "Sky Bubbles",
    subTitle: "UX/UI",
    description:
      "Sky Buubles   |   luxury hotel located on top of the highest mountains in the world. Website.",
    imageUrl: "/assets/projects/skyBubbles.png",
    imageUrlMobile: "/assets/projects/skyBubblesMobile.png",
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
    title: "Constructivisim Tools",
    subTitle: "Poster",
    description:
      "Constructivism Tools   |   Tools design inspired by Constructivism. Vector.",
    imageUrl: "/assets/projects/constructivisim.png",
    imageUrlMobile:  "/assets/projects/constructivisimMobile.png",
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
    id: 8,
    title: "Mix of Illustrations",
    imageUrl: "/assets/projects/frogiKusama.png",
    imageUrlMobile:  "/assets/projects/frogiKusamaMobile.png",
    imageAlt: "frogiKusama",
    layout: "TwoSideGallery",
    images: [{ url: "/assets/projects/frogiKusama.png", alt: "frogiKusama" }],
  },
];
export { navBarOptions, projectsData };
