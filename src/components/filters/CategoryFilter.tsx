import React from 'react'
import   { useState } from "react";
    import {
  ChevronDown,
  ChevronUp,} from "lucide-react";
import { useDispatch } from 'react-redux';
import { setCategory } from '../../slice/porductsSlice';

function CategoryFilter() {

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
    const [isToggle, setIsToggle] = useState(false);
    const [isIndex, setIsIndex] = useState("");
    const dispatch = useDispatch()

    
       function showCategory(innerdata:string){
        dispatch(setCategory(innerdata))
        
    
           
       }

  return (
    <div>
            <h2 className="font-semibold mt-2">CATEGORIES</h2>
            {groupedCategories.map((data) => (
              <>
            
                <h2
                  key={data.parentCategory}
                  onClick={() => {
                    setIsToggle(!isToggle); 
                    setIsIndex(data.parentCategory);
                   
                  }}
                  className=" flex justify-between cursor-pointer font-semibold mb-1 mt-3 "
                >
                  {data.parentCategory} 
                  {isIndex===data.parentCategory && isToggle ? <ChevronUp /> : <ChevronDown />}
                </h2> 
                <ul className={isIndex===data.parentCategory && isToggle ? "block" : "hidden"}>
               
                  {data.categories.map((innerdata) => (
                    <li
                      key={innerdata}
                      onClick={()=>showCategory(innerdata)}
                      className=" hover:font-semibold cursor-pointer pl-2  "
                    >
                      {innerdata}
                    </li>
                  ))}
                </ul>
              </>
            ))}
            
           
          </div>
  )
}

export default CategoryFilter