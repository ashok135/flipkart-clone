import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import type { Product } from "../types";
import {   useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Card from "../components/Card";
import Header from "../components/Header";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

import { useState } from "react";

import CategoryFilter from "../components/filters/CategoryFilter";
import BrandFilter from "../components/filters/BrandFilter";

function SearchResults() {
 
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
      <div className="md:mt-25 mt-25  container mx-auto   flex-row md:flex bg-white gap-4 p-3 ">
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
