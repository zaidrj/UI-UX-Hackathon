export const CATEGORIES = [
  { id: "plant-pots", name: "Plant Pots" },
  { id: "ceramics", name: "Ceramics" },
  { id: "tables", name: "Tables" },
  { id: "chairs", name: "Chairs" },
  { id: "crockery", name: "Crockery" },
  { id: "tableware", name: "Tableware" },
  { id: "cutlery", name: "Cutlery" },
] as const;

export type CategoryId = typeof CATEGORIES[number]["id"];