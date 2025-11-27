export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isFeatured: boolean;
  showInGeneEditing: boolean;
  showInReagent: boolean;
  variants?: {
    size: string;
    price: number;
    sku: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  showInServiceSection: boolean;
}
