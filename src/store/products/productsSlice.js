import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Regular Fit Jersey top",
      price: "249.00",
      cat_prefix: "men",
      img: "/assets/regular_Fit_jersey_top.jpeg",
      description:
        "A comfortable regular fit jersey top made from soft fabric, perfect for casual wear.",
    },
    {
      id: 2,
      title: "Regular Fit Jersey top",
      price: "229.00",
      cat_prefix: "men",
      img: "/assets/regular_Fit_jersey_top_3.jpeg",
      description:
        "Stylish and versatile, this regular fit jersey top offers both comfort and style.",
    },
    {
      id: 3,
      title: "Cotton polo shirt",
      price: "200.00",
      cat_prefix: "men",
      img: "/assets/Cotton_polo_shirt.jpeg",
      description:
        "A classic cotton polo shirt ideal for everyday casual outings, featuring breathable fabric.",
    },
    {
      id: 4,
      title: "Cotton t-shirt",
      price: "100.00",
      cat_prefix: "women",
      img: "/assets/Cotton_T-shirt.jpeg",
      description:
        "This cotton t-shirt provides a comfortable and lightweight feel, perfect for everyday wear.",
    },
    {
      id: 5,
      title: "Sweatshirt shorts",
      price: "300.00",
      cat_prefix: "women",
      img: "/assets/Sweatshirt_shorts.jpeg",
      description:
        "Soft and cozy sweatshirt shorts designed for lounging or casual activities.",
    },
    {
      id: 6,
      title: "Velour top",
      price: "300.00",
      cat_prefix: "kids",
      img: "/assets/Velour_zip-through_hoodie.jpeg",
      description:
        "A velvety soft velour top perfect for keeping kids warm and stylish.",
    },
    {
      id: 9,
      title: "Pile all-in-one suit with ears",
      price: "500.00",
      cat_prefix: "baby",
      img: "/assets/Pile_pram_suit_with_ears.jpg",
      description:
        "Adorable all-in-one suit for babies, with cozy pile fabric and cute ears on the hood.",
    },
    {
      id: 17,
      title: "Regular Fit football shirt",
      price: "449.00",
      cat_prefix: "sport",
      img: "/assets/DryMove_Printed_sports_T-shirt.jpg",
      description:
        "Regular fit football shirt with moisture-wicking fabric, ideal for active sports.",
    },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
