import { Car } from "../types";

export const CARS_MOCK: Car[] = [
  {
    id: 1,
    name: "Car 1",
    country: "Country 1",
    brand: {
      id: 1,
      name: "Brand 1",
      country: "Brand Country 1",
    },
    owner: {
      id: 1,
      name: "Owner 1",
      surname: "Owner Surname 1",
      city: "Owner City 1",
      age: 30,
      gender: "Male",
    },
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
    brand: {
      id: 2,
      name: "Brand 2",
      country: "Brand Country 2",
    },
    owner: {
      id: 2,
      name: "Owner 2",
      surname: "Owner Surname 2",
      city: "Owner City 2",
      age: 35,
      gender: "Female",
    },
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
    brand: {
      id: 3,
      name: "Brand 3",
      country: "Brand Country 3",
    },
    owner: {
      id: 3,
      name: "Owner 3",
      surname: "Owner Surname 3",
      city: "Owner City 3",
      age: 35,
      gender: "Female",
    },
    year_made: 2019,
    type: "SUV",
    engine: "SUV",
    image_url:
      "https://1884403144.rsc.cdn77.org/foto/fabia-skoda-skoda-fabia/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/5919851.jpg?v=0&st=6cv66vMnDXxkEI3l5696nStxyeTEDRnUF5W0_9Xe8b4&ts=1600812000&e=0",
  },
];
