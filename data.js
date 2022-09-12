import bcrypt from 'bcryptjs';

//I create first data.js for seed all datas into db
const data = {
  users: [
    {
      username: "Admin",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("admin"),
      isAdmin: true,
    },
  ],
  blogs: [
    {
      title: "Blog One",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas reprehenderit nesciunt itaque dicta. Eum fuga dolor accusamus, culpa recusandae ratione nihil ea vero quis molestias officia molestiae similique natus.",
    },
    {
      title: "Blog Two",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas reprehenderit nesciunt itaque dicta. Eum fuga dolor accusamus, culpa recusandae ratione nihil ea vero quis molestias officia molestiae similique natus.",
    },
    {
      title: "Blog Three",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas reprehenderit nesciunt itaque dicta. Eum fuga dolor accusamus, culpa recusandae ratione nihil ea vero quis molestias officia molestiae similique natus.",
    },
    {
      title: "Blog Four",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas reprehenderit nesciunt itaque dicta. Eum fuga dolor accusamus, culpa recusandae ratione nihil ea vero quis molestias officia molestiae similique natus.",
    },
    {
      title: "Blog Five",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas reprehenderit nesciunt itaque dicta. Eum fuga dolor accusamus, culpa recusandae ratione nihil ea vero quis molestias officia molestiae similique natus.",
    },
    {
      title: "Blog Six",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas reprehenderit nesciunt itaque dicta. Eum fuga dolor accusamus, culpa recusandae ratione nihil ea vero quis molestias officia molestiae similique natus.",
    },
  ],
  products: [
    {
      title: "Product One",
      category: "Women",
      subcategory: "Dresses",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima, fugit dignissimos nulla vero quaerat illum asperiores cupiditate ducimus harum odio. Modi, iste. Ex ut porro, eveniet expedita aliquid voluptas?",
      price: 400,
      star: "4",
      sizes: [{ title: "S" }, { title: "L" }, { title: "XL" }],
      colors: [{ title: "Blue" }, { title: "Silver" }, { title: "White" }],
      image: "./assets/images/products/2.jpg",
      imageOne: "./assets/images/products/4.jpg",
    },
    {
      title: "Product Two",
      category: "Women",
      subcategory: "Dresses",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima, fugit dignissimos nulla vero quaerat illum asperiores cupiditate ducimus harum odio. Modi, iste. Ex ut porro, eveniet expedita aliquid voluptas?",
      price: 799,
      star: "4",
      sizes: [{ title: "XS" }, { title: "M" }, { title: "XL" }],
      colors: [{ title: "Rose" }],
      image: "./assets/images/products/3.jpg",
      imageOne: "./assets/images/products/5.jpg",
    },
    {
      title: "Product Three",
      category: "Men",
      subcategory: "Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima, fugit dignissimos nulla vero quaerat illum asperiores cupiditate ducimus harum odio. Modi, iste. Ex ut porro, eveniet expedita aliquid voluptas?",
      price: 1330,
      star: "5",
      sizes: [
        { title: "M" },
        { title: "L" },
        { title: "XL" },
        { title: "XXL" },
      ],
      colors: [{ title: "White" }, { title: "Grey" }],
      image: "./assets/images/products/6.jpg",
      imageOne: "./assets/images/products/7.jpg",
    },
    {
      title: "Product Four",
      category: "Men",
      subcategory: "T-Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima, fugit dignissimos nulla vero quaerat illum asperiores cupiditate ducimus harum odio. Modi, iste. Ex ut porro, eveniet expedita aliquid voluptas?",
      price: 120,
      star: "4",
      sizes: [{ title: "S" }, { title: "M" }, { title: "L" }, { title: "XL" }],
      colors: [{ title: "Black" }],
      image: "./assets/images/products/8.jpg",
      imageOne: "./assets/images/products/9.jpg",
    },
    {
      title: "Product Five",
      category: "Men",
      subcategory: "Jeans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minima, fugit dignissimos nulla vero quaerat illum asperiores cupiditate ducimus harum odio. Modi, iste. Ex ut porro, eveniet expedita aliquid voluptas?",
      price: 130,
      star: "4",
      sizes: [
        { title: "30" },
        { title: "31" },
        { title: "32" },
        { title: "34" },
      ],
      colors: [{ title: "Blue" }],
      image: "./assets/images/products/10.jpg",
      imageOne: "./assets/images/products/11.jpg",
    },
  ],
  category: [
    {
      value: "Men",
      label: "Men",
    },
    {
      value: "Women",
      label: "Women",
    },
    {
      value: "Kids",
      label: "Kids",
    },
  ],
  subcategory: [
    {
      checked: false,
      label: "Dresses",
    },
    {
      checked: false,
      label: "Jeans",
    },
    {
      checked: false,
      label: "T-Shirt",
    },
    {
      checked: false,
      label: "Shorts",
    },
    {
      checked: false,
      label: "Skirts",
    },
  ],
  rating: [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
  ],
};

export default data;