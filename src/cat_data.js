import generalCat from "./assets/general-cat.jpg";
import hobbiesCat from "./assets/hobbies-cat.jpg";
import sleepingCat from "./assets/sleeping-cat.jpeg";

const hobbies = [
  "playing with toy mouse",
  "Scratching the couch",
  "Dropping things from shelves",
];

const places_to_sleep = [
  "inside a closet",
  "on her blancket",
  "on my backpack",
  "on my laptop cover",
];

export const CAT_DATA = [
  {
    title: "General information",
    description: ["shosh is a cat who likes to play with other people"],
    pic: generalCat,
  },
  {
    title: "Hobbies",
    description: hobbies,
    pic: hobbiesCat,
  },
  {
    title: "Places to sleep",
    description: places_to_sleep,
    pic: sleepingCat,
  },
];
