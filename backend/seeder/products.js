const products = [
  {
    name: "SUV",
    description:
      "A Sport Utility Vehicle(SUV) is defined by its off-road capabilities and roominess. It boasts a comfortable ride in rough, rugged cross-country terrain.",
    count: 5,
    price: 1200,
    category: "SUV",
    images: [
      { path: "/images/SUV-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "SUV1",
    description:
      "A Sport Utility Vehicle(SUV) is defined by its off-road capabilities and roominess. It boasts a comfortable ride in rough, rugged cross-country terrain.",
    count: 5,
    price: 1400,
    category: "SUV",
    images: [
      { path: "/images/cars/SUV/1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "SUV2",
    description:
      "A Sport Utility Vehicle(SUV) is defined by its off-road capabilities and roominess. It boasts a comfortable ride in rough, rugged cross-country terrain.",
    count: 5,
    price: 1500,
    category: "SUV",
    images: [
      { path: "/images/cars/SUV/2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "SUV3",
    description:
      "A Sport Utility Vehicle(SUV) is defined by its off-road capabilities and roominess. It boasts a comfortable ride in rough, rugged cross-country terrain.",
    count: 3,
    price: 1500,
    category: "SUV",
    images: [
      { path: "/images/cars/SUV/3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "SUV4",
    description:
      "A Sport Utility Vehicle(SUV) is defined by its off-road capabilities and roominess. It boasts a comfortable ride in rough, rugged cross-country terrain.",
    count: 5,
    price: 1300,
    category: "SUV",
    images: [
      { path: "/images/cars/SUV/4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "SUV5",
    description:
      "A Sport Utility Vehicle(SUV) is defined by its off-road capabilities and roominess. It boasts a comfortable ride in rough, rugged cross-country terrain.",
    count: 5,
    price: 1200,
    category: "SUV",
    images: [
      { path: "/images/cars/SUV/5.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Hatchback",
    description:
      "The most noticeable part of a hatchback is its hatch or a rear door that swings upward. It usually comes with two or four doors, excluding the trunk's door",
    count: 5,
    price: 1400,
    category: "Hatchback",
    images: [
      { path: "/images/hatchback-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Hatchback1",
    description:
      "The most noticeable part of a hatchback is its hatch or a rear door that swings upward. It usually comes with two or four doors, excluding the trunk's door",
    count: 5,
    price: 1500,
    category: "Hatchback",
    images: [
      { path: "/images/cars/hatchback/1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Hatchback2",
    description:
      "The most noticeable part of a hatchback is its hatch or a rear door that swings upward. It usually comes with two or four doors, excluding the trunk's door",
    count: 5,
    price: 1200,
    category: "Hatchback",
    images: [
      { path: "/images/cars/hatchback/2.jpg" },
    ],
    rating: 2,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Hatchback3",
    description:
      "The most noticeable part of a hatchback is its hatch or a rear door that swings upward. It usually comes with two or four doors, excluding the trunk's door",
    count: 5,
    price: 1500,
    category: "Hatchback",
    images: [
      { path: "/images/cars/hatchback/3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Hatchback4",
    description:
      "The most noticeable part of a hatchback is its hatch or a rear door that swings upward. It usually comes with two or four doors, excluding the trunk's door",
    count: 5,
    price: 1500,
    category: "Hatchback",
    images: [
      { path: "/images/cars/hatchback/4.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Hatchback5",
    description:
      "The most noticeable part of a hatchback is its hatch or a rear door that swings upward. It usually comes with two or four doors, excluding the trunk's door",
    count: 5,
    price: 1500,
    category: "Hatchback",
    images: [
      { path: "/images/cars/hatchback/5.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "crossover",
    description:
      "Crossovers have the practicality of an SUV but also come with superb fuel efficiency like hatchbacks do, as they are built on a unibody construction that is lighter and consumes less fuel",
    count: 5,
    price: 1700,
    category: "CrossOver",
    images: [
      { path: "/images/crossover-category.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "crossover1",
    description:
      "Crossovers have the practicality of an SUV but also come with superb fuel efficiency like hatchbacks do, as they are built on a unibody construction that is lighter and consumes less fuel",
    count: 5,
    price: 1600,
    category: "CrossOver",
    images: [
      { path: "/images/cars/crossover/1.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "convertible",
    description:
      "A convertible or a cabriolet is a vehicle that has a roof that can be removed or folded down. When it comes to the roof, it comes in two types: hard-top and soft-top",
    count: 5,
    price: 2000,
    category: "Convertible",
    images: [
      { path: "/images/convertible-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "convertible1",
    description:
      "A convertible or a cabriolet is a vehicle that has a roof that can be removed or folded down. When it comes to the roof, it comes in two types: hard-top and soft-top",
    count: 5,
    price: 2100,
    category: "Convertible",
    images: [
      { path: "/images/cars/convertible/1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "convertible2",
    description:
      "A convertible or a cabriolet is a vehicle that has a roof that can be removed or folded down. When it comes to the roof, it comes in two types: hard-top and soft-top",
    count: 5,
    price: 2200,
    category: "Convertible",
    images: [
      { path: "/images/cars/convertible/2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Sedan",
    description:
      "A sedan is a conventional example of a four-door passenger car. More often than not, sedans have a 3-box design with separate areas for the engine, passenger, and cargo",
    count: 5,
    price: 2300,
    category: "Sedan",
    images: [
      { path: "/images/sedan-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Sedan1",
    description:
      "A sedan is a conventional example of a four-door passenger car. More often than not, sedans have a 3-box design with separate areas for the engine, passenger, and cargo",
    count: 5,
    price: 2200,
    category: "Sedan",
    images: [
      { path: "/images/cars/sedan/1.jpg" },
    ],
    rating: 3,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Sedan2",
    description:
      "A sedan is a conventional example of a four-door passenger car. More often than not, sedans have a 3-box design with separate areas for the engine, passenger, and cargo",
    count: 5,
    price: 2900,
    category: "Sedan",
    images: [
      { path: "/images/cars/sedan/2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Sports car",
    description:
      "By definition, sports cars are two-seater convertibles that allow for open-air driving and have a sporty appearance",
    count: 5,
    price: 9000,
    category: "Sports Car",
    images: [
      { path: "/images/sportscar-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Sports car1",
    description:
      "By definition, sports cars are two-seater convertibles that allow for open-air driving and have a sporty appearance",
    count: 5,
    price: 9500,
    category: "Sports Car",
    images: [
      { path: "/images/cars/sportscar/1.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Sports car2",
    description:
      "By definition, sports cars are two-seater convertibles that allow for open-air driving and have a sporty appearance",
    count: 5,
    price: 10000,
    category: "Sports Car",
    images: [
      { path: "/images/cars/sportscar/2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Coupe",
    description:
      "a coupe is typically loaded with extra bells and whistles, from sharp handling to hundreds of horsepower",
    count: 5,
    price: 2000,
    category: "Coupe",
    images: [
      { path: "/images/coupe-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Coupe1",
    description:
      "a coupe is typically loaded with extra bells and whistles, from sharp handling to hundreds of horsepower",
    count: 5,
    price: 1000,
    category: "Coupe",
    images: [
      { path: "/images/cars/coupe/1.jpg" },
    ],
    rating: 3,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Minivan",
    description:
      "Comfort and safety, the most beneficial points promised by minivans still take on significant importance in the family car world",
    count: 5,
    price: 1000,
    category: "Minivan",
    images: [
      { path: "/images/minivan-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Minivan1",
    description:
      "Comfort and safety, the most beneficial points promised by minivans still take on significant importance in the family car world",
    count: 5,
    price: 1200,
    category: "Minivan",
    images: [
      { path: "/images/cars/minivan/1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Station Wagon",
    description:
      "Most notably, station wagons, also called estate cars, have a shape of an elongated version of a sedan, offering extra cargo space",
    count: 5,
    price: 2100,
    category: "Station Wagon",
    images: [
      { path: "/images/stationwagon-category.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
  {
    name: "Station Wagon1",
    description:
      "Most notably, station wagons, also called estate cars, have a shape of an elongated version of a sedan, offering extra cargo space",
    count: 5,
    price: 2000,
    category: "Station Wagon",
    images: [
      { path: "/images/cars/stationwagon/1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
    ],
  },
]

module.exports = products
