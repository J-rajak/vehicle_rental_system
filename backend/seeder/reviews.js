const ObjectId = require("mongodb").ObjectId

const reviews = [
  //   {
  //   comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
  //   rating: 5,
  //   user: { _id: ObjectId(), name: "John Doe" },
  // },
  // {
  //   comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
  //   rating: 5,
  //   user: { _id: ObjectId(), name: "John Doe" },
  // },
  // {
  //   comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
  //   rating: 5,
  //   user: { _id: ObjectId(), name: "John Doe" },
  // },
  // {
  //   comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
  //   rating: 4,
  //   user: { _id: ObjectId(), name: "John Doe" },
  // },
  // {
  //   comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
  //   rating: 3,
  //   user: { _id: ObjectId(), name: "John Doe" },
  // },
  {
    comment: "Best car ever",
    rating: 3,
    user: { _id: ObjectId(), name: "Jerry Walter" },
  },
  {
    comment: "Very good experience using this",
    rating: 5,
    user: { _id: ObjectId(), name: "Justin Jessie" },
  },
]

module.exports = reviews

