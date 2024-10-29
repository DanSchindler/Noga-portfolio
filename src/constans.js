const navBarOptions = {
  about: "about",
  portfolio: "portfolio",
};
const projectsData = [
  {
    id: 1,
    title: "KAZI",
    subTitle: "Packaging",
    description:
      "KAZI   |   packaging design for KAZI - a vitamin and nutritional supplement brand, inspired by calendars and office elements to make taking daily vitamins easier to remember. The packaging is both attractive and interactive, featuring a refillable design that can be updated each month. With sleek, organized layouts and a functional design, KAZI helps users stay on track with their health routines while fitting seamlessly into a workspace or home environment.",
    courseDetails: "[ Packaging  |  2024 ]",
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
    id: 2,
    title: "The ARCHIVE",
    subTitle: "Logo",
    description:
      "The Archive   |   The logo is for a boutique store, specializing in rare and vintage magazines, is a blend of old-school charm and modern design, crafted to appeal to magazine collectors and vintage enthusiasts alike. It captures the store’s unique character as a fusion of past and present, inspired by values of density, authenticity, nostalgia, and eclecticism. The design reflects a deep appreciation for print culture’s rich history.",
    courseDetails: "[ Logo Design  |  2024 ]",
    imageUrl: "/assets/projects/ArchiveCover.png",
    imageUrlMobile: "/assets/projects/ArchiveCoverMobile.png",
    imageAlt: "archive",
    layout: "StackedImageLayout",
    images: [
      {
        url: "/assets/projects/archive/archive3.png",
        alt: "archive-white-logo",
      },
      { url: "/assets/projects/archive/archive1.png", alt: "archive-sign" },
      { url: "/assets/projects/archive/archive2.png", alt: "archive-red-logo" },
      { url: "/assets/projects/archive/archive4Grid.png", alt: "archive-grid" },
    ],
  },
  {
    id: 3,
    title: "Everyone Looks the Same",
    subTitle: "Editorial Design",
    description:
      "Everyone looks the same  |   This book project offers a visual exploration of the traditional clothing styles of the ultra -Orthodox Jewish community. Through detailed imagery and descriptions, it examines the symbolism, historical significance, and cultural identity expressed in these garments.",
    courseDetails: "[ Editorial Design  |  2024 ]",
    imageUrl: "/assets/projects/LookTheSameCover.png",
    imageUrlMobile: "/assets/projects/LookTheSameMobile.png",
    imageAlt: "LookTheSame",
    layout: "StackedImageLayout",
    images: [
      {
        url: "/assets/projects/LookTheSame/lookTheSame1.png",
        alt: "lookTheSame1",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame2.png",
        alt: "lookTheSame2",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame3.png",
        alt: "lookTheSame3",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame4.png",
        alt: "lookTheSame4",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame5.png",
        alt: "lookTheSame5",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame6.png",
        alt: "lookTheSame6",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame7.png",
        alt: "lookTheSame7",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame8.png",
        alt: "lookTheSame8",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame9.png",
        alt: "lookTheSame9",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame10.png",
        alt: "lookTheSame10",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame11.png",
        alt: "lookTheSame11",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame12.png",
        alt: "lookTheSame12",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame13.png",
        alt: "lookTheSame13",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame14.png",
        alt: "lookTheSame14",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame15.png",
        alt: "lookTheSame15",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame16.png",
        alt: "lookTheSame16",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame17.png",
        alt: "lookTheSame17",
      },
      {
        url: "/assets/projects/LookTheSame/lookTheSame18.png",
        alt: "lookTheSame18",
      },
    ],
  },
  {
    id: 4,
    title: "Zot Ani",
    subTitle: "Video",
    description:
      "Zot Ani   |   “Zot Ani” means in Hebrew “this is me”. This short video is a personal introduction, capturing who I am through different angles and interests.",
    courseDetails: "[ Video  |  2024 ]",
    imageUrl: "/assets/projects/zotAni.png",
    imageUrlMobile: "/assets/projects/zotAniMobile.png",
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
    id: 5,
    title: "Ambiguous Loss",
    subTitle: "Posters",
    description:
      "Ambiguous Loss   |   series of posters that explore the concept of Ambiguous Loss, which describes the emotional experience of losing someone who is apparently still alive, but emotionally or physically absent. To convey this complex feeling, I chose the color yellow, symbolizing hope and resilience, especially in the context of Israel's ongoing struggle to bring hostages back home from captivity in Gaza. The posters aim to evoke a sense of longing and awareness, capturing the pain of uncertainty while also highlighting the collective effort to reconnect with those who are missing in both body and spirit.",
    courseDetails: "[ Posters  |  2024 ]",
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
    id: 6,
    title: "ELIFELET",
    subTitle: "Logo",
    description:
      "ELIFELET   |   ELIFELET is an urban brewery that is as much a part of the city's culture as it is a place to craft exceptional beer. The logo design is Inspired by the energy and diversity of city life. The design embraces the grit, creativity, and raw authenticity found in urban environments. The minimalist color palette emphasizes bold lines and high contrast, giving the brand a clean yet edgy identity that resonates with a modern, urban audience.",
    courseDetails: "[ Logo Design  |  2024 ]",
    imageUrl: "/assets/projects/elifelet.png",
    imageUrlMobile: "/assets/projects/elifeletMobile.png",
    imageAlt: "elifelet",
    layout: "StackedImageLayout",
    headerIndex: 1,
    gap: "10px",
    postHeaderGap: "110px",
    process: true,
    images: [
      {
        url: "/assets/projects/elifelet/mainLogo.png",
        alt: "main-logo-elifelet",
      },
      {
        url: "/assets/projects/elifelet/elifeltMix.png",
        alt: "elifeltMix",
      },
      {
        url: "/assets/projects/elifelet/graffity.png",
        alt: "graffity-elifelet",
        description:
          "Step 1  |  Finding Inspiration: The process began by exploring various graffiti styles to capture the raw, expressive energy of street art. After reviewing multiple styles, one specific graffiti piece was chosen to serve as the core inspiration for the design. This piece guided the creative direction for the rest of the process, grounding the brand in a unique, urban aesthetic.",
      },
      {
        url: "/assets/projects/elifelet/processIdeas.png",
        alt: "processIdeas-elifelet",
        description:
          "Step 2 |   Discovering Interesting Shapes: Identifying unique shapes within graffiti style by observing the negative and positive spaces. The goal was to find shapes that are both striking and versatile, conveying a sense of movement and personality that aligns with the brewing brand’s identity.",
        orientation: "smaller",
      },
      {
        url: "/assets/projects/elifelet/processSymbol.png",
        alt: "processSymbol-elifelet",
        description:
          "Step 3 |   Selecting the Main Shape: From the pool of shapes, one main shape was chosen as the foundation of the brand’s logo. This shape served as a base, representing the core of the brand and setting the tone for the logo’s overall look.",
        orientation: "vertical smaller",
      },
      {
        url: "/assets/projects/elifelet/letters.png",
        alt: "letters-elifelet",
        description:
          "Step 4 |   Creating Hebrew Lettering: Using the chosen shape as a guide, custom Hebrew letters were designed to embody its essence. Each letter was crafted to reflect the bold, edgy character of the shape, aligning with the graffiti-inspired theme and giving the brand a distinct urban edge in its lettering.",
      },
      {
        url: "/assets/projects/elifelet/mainLogoSmall.png",
        alt: "mainLogo-elifelet",
        description:
          "Step 5 |   Final Logo: With the Hebrew lettering complete, the final step was to bring everything together into a harmonized logo. The chosen shape, combined with the custom letters, formed a bold, graffiti-inspired logo that embodies the brand’s urban, edgy personality. The minimalist black-and-white color palette highlighted the contrast and structure of the design, giving the logo a modern yet raw feel that resonates with the essence of street art.",
      },
    ],
  },
  {
    id: 7,
    title: "Cé Bon",
    subTitle: "Packaging",
    description:
      "Cé Bon   |   The 'Ce Bon' soap packaging is inspired by the elegant style of Art Deco posters, bringing a French feel to each design. The name  'Ce Bon', meaning 'something good' in French, and the clean lines, and vintage colors give the soap a classic, stylish look. The result is a timeless package that adds a touch of French charm to everyday soap - something you’d want to keep even after use.",
    courseDetails: "[ Packaging  |  2024 ]",
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
    id: 8,
    title: "Zohar Argov",
    subTitle: "Album Cover",
    description:
      "Zohar Argov   |   Album Cover and packaging design for the famous Israeli singer Zohar Argov, often called 'The King of Mizrahi Music.' Argov made a big impact on Israeli culture with his unique voice. This design is inspired by the 1980s, when Argov was at his peak, combining a vintage feel with Mediterranean style. Using colors, fonts, and patterns, I aimed to capture both the nostalgic vibe of his era and the lasting influence of his music.",
    courseDetails: "[ Packaging  |  2023 ]",
    imageUrl: "/assets/projects/zoharArgov.png",
    imageUrlMobile: "/assets/projects/zoharArgovMobile.png",
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
    id: 9,
    title: "Sky Bubbles",
    subTitle: "UX/UI",
    description:
      "Sky Buubles   |   Sky Bubbles is a website concept I designed to offer a unique, dream-like experience for booking a vacation in an imaginary luxury hotel perched atop the world’s highest mountains. I crafted the UX/UI to immerse users in an atmosphere of serenity and elevation, evoking transparency and open skies, with design elements that blend seamlessly with cloud-like visuals. The interface is intuitive and light, giving users the sensation of floating above the world, surrounded by endless views. Sky Bubbles is designed for those seeking an exclusive and ethereal escape, combining luxury with the breathtaking beauty of nature.",
    courseDetails: "[ UX/UI  |  2024 ]",
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
    id: 10,
    title: "A - Z",
    subTitle: "Animation",
    description:
      "A-Z   |   A short video that illustrates the transformation of the letter A as it morphs into the letter Z through shifting a series of dynamic shapes.",
    courseDetails: "[ Classic Animation  |  2024 ]",
    imageUrl: "/assets/projects/a-z.png",
    imageUrlMobile: "/assets/projects/a-zMobile.png",
    imageAlt: "a-z",
    layout: "StackedImageLayout",
    images: [
      { url: "/assets/projects/a-z.mp4", alt: "a-z", orientation: "vertical" },
    ],
  },
  {
    id: 11,
    title: "Constructivisim Tools",
    subTitle: "Poster",
    description:
      "Constructivism Tools   |   This poster features tools inspired by the Constructivism art movement.",
    courseDetails: "[ Poster  |  2023 ]",
    imageUrl: "/assets/projects/constructivisim.png",
    imageUrlMobile: "/assets/projects/constructivisimMobile.png",
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
    id: 12,
    title: "Mix of Illustrations",
    imageUrl: "/assets/projects/frogiKusama.png",
    imageUrlMobile: "/assets/projects/frogiKusamaMobile.png",
    imageAlt: "frogiKusama",
    layout: "TwoSideGallery",
    images: [{ url: "/assets/projects/frogiKusama.png", alt: "frogiKusama" }],
  },
];

const getNumOfProjects = () => {
  return projectsData.length;
};
export { navBarOptions, projectsData, getNumOfProjects };
