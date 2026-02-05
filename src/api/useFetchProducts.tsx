 import { useDispatch,} from 'react-redux'
 import { fetchProducts } from '../slice/porductsSlice.tsx'
  import type {AppDispatch} from '../store/store.tsx'
 

const  useFetchProducts =()=>{
   const dispatch= useDispatch<AppDispatch>()

 return  function fetchApiData (){
      dispatch(fetchProducts())
   }
}
    

        
 

export default useFetchProducts