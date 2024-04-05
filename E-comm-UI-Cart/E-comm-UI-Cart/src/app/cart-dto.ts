export class CartDto {
    constructor(
         public cartId: number,
        public productId: number,
        public name: string,
        public email: string,
        public description: string,
        public thumbnail: string,
        public price: number,
        public quantity: number,
        public category: string,
        public subcategory1: string,
        public subcategory2: string,
        public totalproductPrice: number

      ) {}
}
