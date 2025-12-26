import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import type { Product } from "../types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Card from "../components/Card";
import Header from "../components/Header";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

import { useState } from "react";

import CategoryFilter from "../components/filters/CategoryFilter";
import BrandFilter from "../components/filters/BrandFilter";

function SearchResults() {
  const groupedCategories = [
    {
      parentCategory: "Beauty & Personal Care",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
      categories: ["beauty", "fragrances", "skin-care"],
    },

    {
      parentCategory: "Home, Furniture & Decor",
      imgUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100",
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
        "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/1788f177649e6991.png?q=100",
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
  const [filter, setFilter] = useState(false);
  const [category, setCategory] = useState(false);
  const searchData = useSelector((state: RootState) => state.search.search);
  const categoryData = useSelector(
    (state: RootState) => state.products.category
  );
  const productsData = useSelector(
    (state: RootState) => state.products.products
  );
  const brandsData = useSelector((state: RootState) => state.products.brand);
  console.log(brandsData);

  const dispatch = useDispatch();

  console.log(searchData);
  const getUrl = async () => {
    const responce = await api.get("/products?limit=0");
    return responce.data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getUrl,
  });

  const bransValueName = brandsData.find((data) => data.id == true);

  const filteredSearch = data?.products.filter((product: Product) =>
    product.title.toLowerCase().includes(searchData.toLowerCase())
  );
  const filteredCategory = data?.products.filter((product: Product) =>
    categoryData.includes(product.category)
  );
  const brandCategory = data?.products.filter(
    (product: Product) => product.brand === bransValueName?.name
  );
  console.log(brandCategory);

  const uniqueBrands = [...new Set(productsData.map((data) => data.brand))];
  console.log(uniqueBrands);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    <h2>{error.message}</h2>;
  }

  return (
    <div className="bg-gray-100 ">
      <div className="fixed  w-full top-0 z-2 bg-blue-500 py-1">
        <Header textColor="text-white" iconColor="brightness-0 invert" />
      </div>
      <div className="md:mt-[100px] mt-[100px] container mx-auto   flex-row md:flex bg-white gap-4 p-3 ">
        <div className="w-full md:w-1/5 p-2  ">
          <h2 className="font-semibold text-[20px]">Filters</h2>
          <div className="md:hidden ">
            <div className="flex justify-between">
           
              <button
                onClick={() => setFilter(!filter)}
                className="flex font-semibold"
              >
                <SlidersHorizontal />
                filter
              </button>
              <button onClick={()=>setCategory(!category)} className="flex font-semibold ">
                <ArrowUpDown className="mr-2" /> sort
              </button>
            </div>
            <div>
           
              <div className={`mr-2 ${filter ? "block" : "hidden"} mb-4`}>
                <CategoryFilter />
              </div>
              <div className={`mr-2 ${category ? "block" : "hidden"} mb-4`}>
               <BrandFilter />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <CategoryFilter />
            <BrandFilter />
          </div>
        </div>
        <div className=" w-full md:w-4/5  ">
        <div><h1>Search results:</h1></div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 place-items-center  ">
   
          {categoryData.length > 0 ? (
            <Card
              products={filteredCategory}
              category={filteredCategory}
              loading={isLoading}
              error={error?.message}
            />
          ) : brandsData.filter((data) => data?.id === true).length > 0 ? (
            <>
              <Card
                products={brandCategory}
                category={filteredCategory}
                loading={isLoading}
                error={error?.message}
              />
            </>
          ) : (
            <>
              <Card
                products={filteredSearch}
                category={filteredCategory}
                loading={isLoading}
                error={error?.message}
              />
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
