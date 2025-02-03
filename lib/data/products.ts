import { Product } from "@/lib/types";


export const products: Product[] = [
  // Original products...
  {
    id: "plant-pot-2",
    name: "Modern Terracotta Pot",
    description: "Minimalist terracotta pot with clean lines",
    price: 34.99,
    images: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800"],
    category: "plant-pots",
    variants: [
      { id: "pp2-s", name: "Small", type: "size", value: "S", inStock: true },
      { id: "pp2-m", name: "Medium", type: "size", value: "M", inStock: true },
    ],
    features: ["Hand-crafted", "Natural material", "Drainage hole"],
    stockLevel: 20,
    specifications: {
      material: "Terracotta",
      dimensions: "8 x 8 x 8 inches",
      weight: "3 lbs",
    },
  },
  {
    id: "ceramic-2",
    name: "Contemporary Bowl Set",
    description: "Set of 3 contemporary ceramic bowls",
    price: 89.99,
    images: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"],
    category: "ceramics",
    variants: [
      { id: "cb2-white", name: "White", type: "color", value: "#FFFFFF", inStock: true },
      { id: "cb2-black", name: "Black", type: "color", value: "#000000", inStock: true },
    ],
    features: ["Microwave safe", "Dishwasher safe", "Stackable design"],
    stockLevel: 15,
    specifications: {
      material: "Ceramic",
      dimensions: "Various sizes",
      weight: "4 lbs (set)",
    },
  },

  {
    id: "table-3",
    name: "Wooden Tables",
    description: "Dining Wooden Tables",
    price: 10.99,
    images: ["https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=600"],
    category: "tables",
    variants: [
      { id: "cb2-white", name: "White", type: "color", value: "#FFFFFF", inStock: true },
      { id: "cb2-black", name: "Black", type: "color", value: "#000000", inStock: true },
    ],
    features: ["Microwave safe", "Dishwasher safe", "Stackable design"],
    stockLevel: 15,
    specifications: {
      material: "Tables",
      dimensions: "Various sizes",
      weight: "4 lbs (set)",
    },
  },

  {
    id: "chair-4",
    name: "Wooden Chairs",
    description: "Set of 4 Chairs",
    price: 34.99,
    images: ["https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600"],
    category: "chairs",
    variants: [
      { id: "cb2-white", name: "White", type: "color", value: "#FFFFFF", inStock: true },
      { id: "cb2-black", name: "Black", type: "color", value: "#000000", inStock: true },
    ],
    features: ["Microwave safe", "Dishwasher safe", "Stackable design"],
    stockLevel: 15,
    specifications: {
      material: "Tables",
      dimensions: "Various sizes",
      weight: "4 lbs (set)",
    },
  },

  {
    id: "crockery-5",
    name: "Crockery",
    description: "2 Set of Crockeries ",
    price: 24.99,
    images: ["https://images.pexels.com/photos/5975/food-fashion-meal-white.jpg?auto=compress&cs=tinysrgb&w=600"],
    category: "crockery",
    variants: [
      { id: "cb2-white", name: "White", type: "color", value: "#FFFFFF", inStock: true },
      { id: "cb2-black", name: "Black", type: "color", value: "#000000", inStock: true },
    ],
    features: ["Microwave safe", "Dishwasher safe", "Stackable design"],
    stockLevel: 15,
    specifications: {
      material: "Crockery",
      dimensions: "Various sizes",
      weight: "4 lbs (set)",
    },
  },
  
  {
    id: "tableware-6",
    name: "Table-ware",
    description: "Table Wares ",
    price: 11.99,
    images: ["https://images.pexels.com/photos/18777541/pexels-photo-18777541/free-photo-of-restaurant-table-decorated-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600"],
    category: "tableware",
    variants: [
      { id: "cb2-white", name: "White", type: "color", value: "#FFFFFF", inStock: true },
      { id: "cb2-black", name: "Black", type: "color", value: "#000000", inStock: true },
    ],
    features: ["Microwave safe", "Dishwasher safe", "Stackable design"],
    stockLevel: 15,
    specifications: {
      material: "Crockery",
      dimensions: "Various sizes",
      weight: "4 lbs (set)",
    },
  },
  
  {
    id: "cutlery-7",
    name: "Cutlery",
    description: "Cutleries",
    price: 29.99,
    images: ["https://images.pexels.com/photos/291767/pexels-photo-291767.jpeg?auto=compress&cs=tinysrgb&w=600"],
    category: "cutlery",
    variants: [
      { id: "cb2-white", name: "White", type: "color", value: "#FFFFFF", inStock: true },
      { id: "cb2-black", name: "Black", type: "color", value: "#000000", inStock: true },
    ],
    features: ["Microwave safe", "Dishwasher safe", "Stackable design"],
    stockLevel: 15,
    specifications: {
      material: "Cutlery",
      dimensions: "Various sizes",
      weight: "4 lbs (set)",
    },
  },
  


  // Add more products for each category...
];