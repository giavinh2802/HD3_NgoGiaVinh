const products = [
  {
    name: "Sneaker1",
    image: "/images/p1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Velcro Sneakers For Boys & Girls  (Blue)",
    image: "/images/p2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 599,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
    image: "/images/p3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 929,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Lace Casual Boots For Boys & Girls  (Tan)",
    image: "/images/p4.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 399,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Lace Walking Shoes For Boys & Girls  (Pink)",
    image: "/images/p40.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 49,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Sneaker 2",
    image: "/images/p7.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p8.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p6.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p10.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p11.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p36.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p13.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p39.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p14.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p16.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p17.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p18.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p19.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p20.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p21.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p22.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p37.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p35.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p25.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p26.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p27.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p28.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p29.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p30.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p31.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p32.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p33.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p34.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p24.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p23.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p5.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p38.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },  {
    name: "Sneaker 2",
    image: "/images/p15.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
  {
    name: "Sneaker 2",
    image: "/images/p12.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 5,
    rating: 2,
    numReviews: 0,
  },
];

export default products;
