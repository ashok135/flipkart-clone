 

export interface Product {
  id: number |undefined;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];

  category: string;
  brand:string
  discountPercentage:number
  rating:number
  stock:number
 

}
//  export interface Products {
//     products:Product[]
//     loading: boolean
//     error: string | null |undefined
//  }
