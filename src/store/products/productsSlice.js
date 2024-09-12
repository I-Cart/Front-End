import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Regular Fit Jersey top",
      price: "249.00",
      cat_prefix: "men",
      img: "/assets/regular_Fit_jersey_top.jpeg",
    },
    {
      id: 2,
      title: "Regular Fit Jersey top",
      price: "229.00",
      cat_prefix: "men",
      img: "/assets/regular_Fit_jersey_top_3.jpeg",
    },
    {
      id: 3,
      title: "Cotton polo shirt",
      price: "200.00",
      cat_prefix: "men",
      img: "/assets/Cotton_polo_shirt.jpeg",
    },
    {
      id: 4,
      title: "Cotton t-shirt",
      price: "100.00",
      cat_prefix: "women",
      img: "/assets/Cotton_T-shirt.jpeg",
    },
    {
      id: 5,
      title: "Sweatshirt shorts",
      price: "300.00",
      cat_prefix: "women",
      img: "/assets/Sweatshirt_shorts.jpeg",
    },
    {
      id: 6,
      title: "Velour top",
      price: "300.00",
      cat_prefix: "kids",
      img: "/assets/Velour_zip-through_hoodie.jpeg",
    },
    {
      id: 9,
      title: "Pile all-in-one suit with ears",
      price: "500.00",
      cat_prefix: "baby",
      img: "/assets/Pile_pram_suit_with_ears.jpg",
    },
    {
      id: 17,
      title: "Regular Fit football shirt",
      price: "449.00",
      cat_prefix: "sport",
      img: "/assets/DryMove_Printed_sports_T-shirt.jpg",
    },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
