import cocoGroveCorner from "@/assets/projects/coco-grove-house/corner-arch-view.jpg";
import cocoGroveGuestBath from "@/assets/projects/coco-grove-house/guest-bathroom.jpg";
import cocoGroveGuestRoom from "@/assets/projects/coco-grove-house/guest-room.jpg";
import cocoGroveOverview from "@/assets/projects/coco-grove-house/overview.png";
import cocoGroveBedroom from "@/assets/projects/coco-grove-house/primary-bedroom.jpg";
import cocoGroveShower from "@/assets/projects/coco-grove-house/shower-view.jpg";
import cocoGroveToilet from "@/assets/projects/coco-grove-house/toilet-view.jpg";
import cocoplumOutside from "@/assets/projects/cocoplum-bath-suite/outside-pov.jpg";
import cocoplumSunlight from "@/assets/projects/cocoplum-bath-suite/sunlight-view.jpg";
import gablesOne from "@/assets/projects/gables-bathroom/1.jpg";
import gablesTwo from "@/assets/projects/gables-bathroom/2.jpg";
import gablesThree from "@/assets/projects/gables-bathroom/3.jpg";
import outdoorKitchenMain from "@/assets/projects/outdoor-kitchen-concept/bbq-daytime.jpg";
import salonHairwash from "@/assets/projects/salon/hairwash-station.jpg";
import salonMiddle from "@/assets/projects/salon/middle-chairs.jpg";
import salonWaiting from "@/assets/projects/salon/waiting-chairs.jpg";
import reserveBar1 from "@/assets/projects/the-reserve/bar1.jpg";
import reserveBar2 from "@/assets/projects/the-reserve/bar2.jpg";
import reserveBar3 from "@/assets/projects/the-reserve/bar3.jpg";
import reserveBar4 from "@/assets/projects/the-reserve/bar4.jpg";
import cornerstoneOutside1 from "@/assets/projects/the-cornerstone/outside1.jpg";
import cornerstoneOutside2 from "@/assets/projects/the-cornerstone/outside2.jpg";
import cornerstoneOutside3 from "@/assets/projects/the-cornerstone/outside3.jpg";
import cornerstoneOutside4 from "@/assets/projects/the-cornerstone/outside4.jpg";
import cornerstoneOutside5 from "@/assets/projects/the-cornerstone/outside5.jpg";
import cornerstoneOutside6 from "@/assets/projects/the-cornerstone/outside6.jpg";
import gossamerBathroom from "@/assets/projects/the-gossamer-suite/bathroom.jpg";
import gossamerBedroom from "@/assets/projects/the-gossamer-suite/bedroom.jpg";
import gossamerBedroomEvening from "@/assets/projects/the-gossamer-suite/bedroom-evening.jpg";
import gossamerMediaWall from "@/assets/projects/the-gossamer-suite/media-wall.jpg";
import gossamerOverview from "@/assets/projects/the-gossamer-suite/suite-overview.jpg";
import gossamerWardrobe from "@/assets/projects/the-gossamer-suite/wardrobe.jpg";
import gossamerWardrobeLighting from "@/assets/projects/the-gossamer-suite/wardrobe-lighting.jpg";
import annexBathroom from "@/assets/projects/the-annex/bathroom.jpg";
import annexBedroom from "@/assets/projects/the-annex/bedroom.jpg";
import annexBedroomStorage from "@/assets/projects/the-annex/bedroom-storage.jpg";
import annexKitchenAndDining from "@/assets/projects/the-annex/kitchen-and-dining.jpg";
import annexLivingArea from "@/assets/projects/the-annex/living-area.jpg";
import annexLivingAreaEvening from "@/assets/projects/the-annex/living-area-evening.jpg";

export const site = {
  name: "Muse Designs",
  navName: "Muse by Samantha",
  footerMark: "Muse by Samantha",
  owner: "Samantha Morales",
  location: "Miami, Florida",
  email: "samanthadecorates@gmail.com",
  instagramUrl: "https://www.instagram.com/samanthadecorates",
  title: "Muse Designs - Interior Design Portfolio",
  description:
    "A Miami-based interior design portfolio by Samantha Morales, featuring refined 3D room concepts and residential renderings.",
};

export const footerQuotes = [
  {
    text: "Give me a muse\nand I will paint for you a world\nso bright you must close your eyes to see.",
    author: "Atticus",
  },
  {
    text: "A good muse gives you calm seas\nand storms to make you kiss the shore.",
    author: "Atticus",
  },
  {
    text: "Be your own muse.",
    author: "E. Russell",
  },
  {
    text: "There is no place for grief\nin a house which serves the Muse.",
    author: "Sappho",
  },
  {
    text: "The muse is not an artist's possession;\nshe is an artist's longing.",
    author: "Richard Power",
  },
  {
    text: "The muse visits during the act of creation,\nnot before.",
    author: "Roger Ebert",
  },
  {
    text: "The Muse honors the working artist.",
    author: "Steven Pressfield",
  },
  {
    text: "A muse can be a mirror,\nreflecting back the best parts of ourselves.",
    author: "Elizabeth Gilbert",
  },
] as const;

export type Project = {
  n: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  year: string;
  img: string;
  images: string[];
  description: string;
  status:
    | "Portfolio Study"
    | "In Progress"
    | "Organic Modern Contemporary"
    | "Timeless Modern Luxury"
    | "Refined Minimalistic Modern"
    | "Modern Industrial Minimalism"
    | "Organic Contemporary Luxe"
    | "Organic Contemporary Luxury"
    | "Organic Contemporary Outdoor Living"
    | "Warm Contemporary Luxury"
    | "Contemporary Compact Minimalist Living";
};

export const projects: Project[] = [
  {
    n: "001",
    slug: "coco-grove-house",
    title: "The Grove Residence",
    location: "Coconut Grove, Miami, FL",
    type: "Residential",
    year: "2025",
    img: cocoGroveBedroom,
    images: [
      cocoGroveBedroom,
      cocoGroveToilet,
      cocoGroveShower,
      cocoGroveGuestRoom,
      cocoGroveGuestBath,
      cocoGroveCorner,
      cocoGroveOverview,
    ],
    description:
      "The Grove Residence is a residential concept balancing refined luxury with artistic expression. Warm walnut tones, natural materials, soft contemporary forms, and curated custom details create a home that feels sophisticated, personal, and timeless.",
    status: "Organic Modern Contemporary",
  },
  {
    n: "002",
    slug: "cocoplum-bath-suite",
    title: "Serenity Master Bath",
    location: "Cocoplum, Miami, FL",
    type: "Bathroom",
    year: "2026",
    img: cocoplumSunlight,
    images: [cocoplumSunlight, cocoplumOutside],
    description:
      "Serenity Master Bath was designed as a private sanctuary where relaxation and luxury coexist. Soft textures, calming tones, natural materials, and thoughtful spatial planning create a tranquil retreat centered on comfort, restoration, and everyday wellness.",
    status: "Organic Contemporary Luxe",
  },
  {
    n: "003",
    slug: "the-reserve",
    title: "The Reserve",
    location: "Kendall Hammocks, Miami, FL",
    type: "Residential",
    year: "2026",
    img: reserveBar1,
    images: [reserveBar1, reserveBar2, reserveBar3, reserveBar4],
    description:
      "The Reserve was designed as a place to gather, unwind, and connect. By blending warm, neutral, and cool materials with layered textures and subtle lighting, I created a welcoming atmosphere that feels both contemporary and timeless.",
    status: "Organic Contemporary Luxury",
  },
  {
    n: "004",
    slug: "the-cornerstone",
    title: "The Cornerstone",
    location: "Kendall Hammocks, Miami, FL",
    type: "Outdoor Living",
    year: "2026",
    img: cornerstoneOutside1,
    images: [
      cornerstoneOutside1,
      cornerstoneOutside2,
      cornerstoneOutside3,
      cornerstoneOutside4,
      cornerstoneOutside5,
      cornerstoneOutside6,
    ],
    description:
      "The Cornerstone was designed to elevate outdoor living through a custom entertaining station that blends seamlessly with the home and poolside setting. Natural textures, contemporary finishes, and functional details create a welcoming space for gathering, relaxing, and hosting with ease.",
    status: "Organic Contemporary Outdoor Living",
  },
  {
    n: "005",
    slug: "gables-bathroom",
    title: "Duality Bath Suite",
    location: "Coral Gables, Miami, FL",
    type: "Bathroom",
    year: "2025",
    img: gablesOne,
    images: [gablesOne, gablesTwo, gablesThree],
    description:
      "Duality Bath Suite explores balance, symmetry, and individuality within a shared retreat. Rich materials, layered textures, and bold architectural details create a luxurious bathroom concept shaped around elegance, harmony, and everyday indulgence.",
    status: "Timeless Modern Luxury",
  },
  {
    n: "006",
    slug: "salon",
    title: "The Atelier",
    location: "Downtown Miami, FL",
    type: "Commercial",
    year: "2025",
    img: salonMiddle,
    images: [salonMiddle, salonWaiting, salonHairwash],
    description:
      "The Atelier blends contemporary design with natural sleek elements to create a refreshing, uplifting salon experience. A restrained palette, organic greenery, and clean modern lines bring calm, while the overall atmosphere remains inspiring, welcoming, and effortless.",
    status: "Refined Minimalistic Modern",
  },
  {
    n: "007",
    slug: "outdoor-kitchen-concept",
    title: "The Veranda Grill",
    location: "Pinecrest, Miami, FL",
    type: "Outdoor Kitchen",
    year: "2025",
    img: outdoorKitchenMain,
    images: [outdoorKitchenMain],
    description:
      "The Veranda Grill blends contemporary design with rustic character. Natural stone textures, clean architectural lines, and durable materials create an outdoor retreat that feels elevated, welcoming, and built for memorable moments with family and friends.",
    status: "Modern Industrial Minimalism",
  },
  {
    n: "008",
    slug: "the-gossamer-suite",
    title: "The Gossamer Suite",
    location: "CocoWalk, Miami, FL",
    type: "Bedroom Suite",
    year: "2026",
    img: gossamerBedroom,
    images: [
      gossamerBedroom,
      gossamerMediaWall,
      gossamerWardrobe,
      gossamerBathroom,
      gossamerBedroomEvening,
      gossamerOverview,
      gossamerWardrobeLighting,
    ],
    description:
      "The Gossamer Suite blends contemporary elegance with warmth, understated luxury, and intentional details. Soft neutrals, marble-inspired finishes, and subtle gold accents create a refined atmosphere, while layered lighting and custom wardrobe systems enhance both comfort and functionality.",
    status: "Warm Contemporary Luxury",
  },
  {
    n: "009",
    slug: "the-annex",
    title: "The Annex",
    location: "South Miami, Miami, Florida",
    type: "Residential",
    year: "2026",
    img: annexKitchenAndDining,
    images: [
      annexKitchenAndDining,
      annexLivingArea,
      annexBedroom,
      annexBedroomStorage,
      annexBathroom,
      annexLivingAreaEvening,
    ],
    description:
      "The Annex redefines compact living through modern simplicity and thoughtful design. A refined neutral palette, marble-inspired finishes, and subtle accents create a cohesive, inviting atmosphere. With an efficient layout that maximizes functionality and comfort.",
    status: "Contemporary Compact Minimalist Living",
  },
];

export const featuredProjects = [projects[0], projects[2]];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
