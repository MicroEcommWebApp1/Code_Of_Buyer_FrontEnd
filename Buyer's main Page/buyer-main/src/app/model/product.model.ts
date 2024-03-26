import { FileHandle } from "./file-handle.model";

export interface Product{
    name:String;
    description:String,
    price : number,
    quantity: number,
    category : String,
    subcategory1:String,
    subcategory2 : String,
    productThumbnail:FileHandle[],
  // productImages: FileHandle[],

}