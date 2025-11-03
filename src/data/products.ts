import productLoafer from "@/assets/product-loafer.jpg";
import productChelsea from "@/assets/product-chelsea.jpg";
import productSneaker from "@/assets/product-sneaker.jpg";
import productBag from "@/assets/product-bag.jpg";
import productDerby from "@/assets/product-derby.jpg";
import productCombat from "@/assets/product-combat.jpg";
import productMinimalist from "@/assets/product-minimalist.jpg";
import productTote from "@/assets/product-tote.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  sizes: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Leather Loafer",
    category: "shoes",
    price: 129.99,
    image: productLoafer,
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
  },
  {
    id: "2",
    name: "Chelsea Ankle Boot",
    category: "boots",
    price: 189.99,
    image: productChelsea,
    sizes: ["7", "8", "9", "10"],
    inStock: true,
  },
  {
    id: "3",
    name: "Urban Runner Sneaker",
    category: "sneakers",
    price: 99.99,
    image: productSneaker,
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: false,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    category: "accessories",
    price: 79.99,
    image: productBag,
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: "5",
    name: "Platform Derby Shoe",
    category: "shoes",
    price: 149.99,
    image: productDerby,
    sizes: ["6", "7", "8", "9", "10"],
    inStock: true,
  },
  {
    id: "6",
    name: "Lace-Up Combat Boot",
    category: "boots",
    price: 169.99,
    image: productCombat,
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
  },
  {
    id: "7",
    name: "Minimalist Low-Top Sneaker",
    category: "sneakers",
    price: 89.99,
    image: productMinimalist,
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: true,
  },
  {
    id: "8",
    name: "Structured Tote Bag",
    category: "accessories",
    price: 99.99,
    image: productTote,
    sizes: ["One Size"],
    inStock: false,
  },
];
