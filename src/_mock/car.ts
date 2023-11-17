import { Car } from "../types";
import { BRAND_MOCK } from "./brand";
import { OWNERS_MOCK } from "./owner";

export const CARS_MOCK: Car[] = [
  {
    id: 1,
    name: "Car 1",
    country: "Country 1",
    brand: BRAND_MOCK[0],
    owner: OWNERS_MOCK[0],
    year_made: 2020,
    type: "Sedan",
    engine: "Sedan",
    image_url:
      "https://1884403144.rsc.cdn77.org/foto/skoda-ceniky-ceskytrh-video-malevozy-redakcnivideo/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/4833662.jpg?v=0&st=ru07rYnX5wkzxWTwkd_ltZfcT_g6WO7_JZCrggszZX0&ts=1600812000&e=0",
  },
  {
    id: 2,
    name: "Car 2",
    country: "Country 2",
    brand: BRAND_MOCK[1],
    owner: OWNERS_MOCK[1],
    year_made: 2019,
    type: "SUV",
    engine: "SUV",
    image_url:
      "https://1884403144.rsc.cdn77.org/foto/fabia-skoda-skoda-fabia/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/5919851.jpg?v=0&st=6cv66vMnDXxkEI3l5696nStxyeTEDRnUF5W0_9Xe8b4&ts=1600812000&e=0",
  },
  {
    id: 3,
    name: "Car 3",
    country: "Country 3",
    brand: BRAND_MOCK[2],
    owner: OWNERS_MOCK[2],
    year_made: 2019,
    type: "SUV",
    engine: "SUV",
    image_url:
      "https://1884403144.rsc.cdn77.org/foto/fabia-skoda-skoda-fabia/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/5919851.jpg?v=0&st=6cv66vMnDXxkEI3l5696nStxyeTEDRnUF5W0_9Xe8b4&ts=1600812000&e=0",
  },
];
