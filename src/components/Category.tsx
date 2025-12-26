import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchCategoryList, setCategory } from "../slice/porductsSlice";
import { setSearch } from "../slice/searchSlice";
import { useNavigate } from "react-router-dom";

function Category() {
  const groupedCategories = [
    {
      parentCategory: "Beauty & Personal Care",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100",
      categories: ["beauty", "fragrances", "skin-care"],
    },

    {
      parentCategory: "Home, Furniture & Decor",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/1788f177649e6991.png?q=100",
      categories: ["furniture", "home-decoration"],
    },

    {
      parentCategory: "Grocery & Daily Essentials",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e730a834ad950bae.png?q=100",
      categories: ["groceries"],
    },

    {
      parentCategory: "Kitchen & Home Appliances",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e90944802d996756.jpg?q=100",
      categories: ["kitchen-accessories"],
    },

    {
      parentCategory: "Electronics, Mobiles & Gadgets",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
      categories: ["laptops", "smartphones", "tablets", "mobile-accessories"],
    },

    {
      parentCategory: "Fashion, Sports & Lifestyle",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/b3020c99672953b9.png?q=100",
      categories: [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-dresses",
        "womens-bags",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches",
        "tops",
        "sunglasses",
        "sports-accessories",
        "motorcycle",
        "vehicle",
      ],
    },
  ];

  const categoryData = useSelector(
    (state: RootState) => state.products.category
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(categoryData);

  const filterCategory = (item: string) => {
    console.log(item);
    dispatch(setCategory(item));
    navigate("/search");

    setCategory;
  };

  return (
    <div className="grid  grid-cols-3 md:grid-cols-6 place-items-center max-w-5xl mx-auto gap-4  py-4 p-2 ">
      {groupedCategories.map((data, index) => (
        <div className="flex flex-col justify-center items-center cursor-pointer group relative ">
          <img
            key={index + "img"}
            src={data.imgUrl}
            alt=""
            className="w-[70px] h-auto text-center"
          />
          <h3 className="text-center font-semibold">{data.parentCategory}</h3>
          <ul
            className=" absolute top-full left-0
      hidden group-hover:block
      bg-white shadow-lg
      p-3
      z-50 p-4 flex gap-4 w-[200px]"
          >
            {data.categories.map((item) => {
              return (
                <li
                  className="mt-2 hover:font-semibold"
                  onClick={() => filterCategory(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Category;
