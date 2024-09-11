import { Injectable } from '@nestjs/common';
import { Product } from './productDto/productDto';

@Injectable()
export class ProductService {
  getProduct(): Product[] {
   const products = [
    {
      id: 1,
      name: "Google Pixel Slate 12.3-Inch 2 in 1 Laptop Intel Core m3, 8GB RAM, 64GB, Aspect Ratio 3:2",
      image: "https://images-na.ssl-images-amazon.com/images/I/71k%2BKbTBn5L._SL1500_.jpg",
    },
    {
      id: 2,
      name: "GOOGLE PIXEL 4A (JUST BLACK, 6GB RAM, 128GB STORAGE)",
      image: "https://images-na.ssl-images-amazon.com/images/I/71k%2BKbTBn5L._SL1500_.jpg",
    },
    {
      id: 3,
      name: "Quick Charger For Google Pixel 2 XL,3,3a,3a XL,3XL,4,4 XL,4 XL,4a,4a 5G,5,XL Charger Original Like Charger Type-C Qualcomm QC 3.1 Quick Charge Adaptive Fast Charging, Rapid, Dash, VOOC, AFC Charger(3.1 Amp,OP2, WHITE)",
      image: "https://images-na.ssl-images-amazon.com/images/I/31nj8q6QKAL.jpg",
    },
  ]
    return products;
  }
}
