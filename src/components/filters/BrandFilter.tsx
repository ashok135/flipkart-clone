import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
    import {
  ChevronDown,
  ChevronUp,} from "lucide-react";
import { type BrandProps, setBrand, setCategory } from "../../slice/porductsSlice";
import { useEffect, useState } from "react";
import { setSearch } from "../../slice/searchSlice";
 
 

function BrandFilter() {
  const productsData = useSelector(
    (state: RootState) => state.products.products
  );
  const brandsData = useSelector((state:RootState)=>state.products.brand)
  const dispatch = useDispatch();
  const [isBrand, setIsBrand]= useState(false)
  
 

  const uniqueBrands = [...new Set(productsData.map((data) => data.brand))];



  const fineldata =uniqueBrands.map((brand)=>{
    return {name:brand,id:false}
  })
 function handleBrands(name:string){
 
 
 
  const updatedData = fineldata.map((oldBrands)=> oldBrands?.name ===name ? {...oldBrands, id:!oldBrands.id} : oldBrands)
  console.log(updatedData)
 
    
      dispatch(setSearch(''))
      dispatch(setCategory(""))
      dispatch  (setBrand(updatedData))
   
 }
 
  useEffect(()=>{

    dispatch(setBrand(fineldata))
    console.log(fineldata)


  },[isBrand ])
 
  return (
    <div className="mt-10">
       <h2
        onClick={() => setIsBrand(!isBrand)}
        className="font-semibold mt-3 mb-1 flex justify-between cursor-pointer"
      >
        BRAND {isBrand ? <ChevronUp /> : <ChevronDown />}
      </h2>
      <ul className={`${isBrand? "" :'hidden'}`}>
        {brandsData?.map((product) => (
            < div key={product.name}>
          <li className="flex justify-between" value={product.name} >
            {product.name}
            <input
              type="checkbox"
              checked={product.id}
              onChange={()=>handleBrands(product.name)}
              
            />
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BrandFilter;
