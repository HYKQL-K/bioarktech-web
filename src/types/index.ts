export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  isFeatured: boolean;
  showInGeneEditing: boolean;
  showInReagent: boolean;
  variants: {
    id: string;
    sku: string;
    label: string;
    price: number;
    stockStatus: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  showInServiceSection: boolean;
}
