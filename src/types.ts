 

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
  description:string
  reviews:Ratings[]
  dimensions:{
    depth:number
    height:number
    width:number

  }
  warrantyInformation:string
  qty:number
   
 

}
 interface Ratings{
  rating:number
  comment:string
  date:string
  reviewerEmail:string
  reviewerName:string


}
//  export interface Products {
//     products:Product[]
//     loading: boolean
//     error: string | null |undefined
//  }
