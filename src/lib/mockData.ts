import { Product, Service } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'CRISPR-Cas9 Kit',
    description: 'Advanced gene editing tool for precise DNA modifications',
    images: ['https://via.placeholder.com/300'],
    category: 'Gene Editing',
    isFeatured: true,
    showInGeneEditing: true,
    showInReagent: false,
    variants: [
      { id: '1', sku: 'CRISPR1001', label: 'Standard', price: 199.99, stockStatus: 'in_stock' }
    ]
  },
  {
    id: '2',
    name: 'sgRNA Library',
    description: 'Comprehensive library of single-guide RNAs for genome-wide screening',
    images: ['https://via.placeholder.com/300'],
    category: 'Gene Editing',
    isFeatured: true,
    showInGeneEditing: true,
    showInReagent: false,
    variants: [
      { id: '2', sku: 'SGRNA2001', label: 'Human Genome', price: 499.99, stockStatus: 'in_stock' }
    ]
  },
  {
    id: '3',
    name: 'Cas9 Nickase',
    description: 'Nickase variant for precise single-strand DNA cleavage',
    images: ['https://via.placeholder.com/300'],
    category: 'Gene Editing',
    isFeatured: false,
    showInGeneEditing: false,
    showInReagent: false,
    variants: [
      { id: '3', sku: 'CAS93001', label: 'Standard', price: 249.99, stockStatus: 'in_stock' }
    ]
  },
  {
    id: '4',
    name: 'Base Editor',
    description: 'Enables precise base pair changes without double-strand breaks',
    images: ['https://via.placeholder.com/300'],
    category: 'Gene Editing',
    isFeatured: true,
    showInGeneEditing: true,
    showInReagent: false,
    variants: [
      { id: '4', sku: 'BASE4001', label: 'C-to-T', price: 399.99, stockStatus: 'in_stock' }
    ]
  },
  {
    id: '5',
    name: 'Prime Editor',
    description: 'Next-generation gene editing technology for precise insertions, deletions, and substitutions',
    images: ['https://via.placeholder.com/300'],
    category: 'Gene Editing',
    isFeatured: true,
    showInGeneEditing: false,
    showInReagent: false,
    variants: [
      { id: '5', sku: 'PRIME5001', label: 'PE2', price: 599.99, stockStatus: 'in_stock' }
    ]
  },
  {
    id: '6',
    name: 'Gene Knockout Kit',
    description: 'Complete kit for efficient gene knockout experiments',
    images: ['https://via.placeholder.com/300'],
    category: 'Gene Editing',
    isFeatured: false,
    showInGeneEditing: true,
    showInReagent: false,
    variants: [
      { id: '6', sku: 'KO6001', label: 'Human', price: 299.99, stockStatus: 'in_stock' }
    ]
  },
  {
    id: '7',
    name: 'BioArkLipo® In Vitro Transfection Kit',
    description: 'High-efficiency transfection kit for in vitro gene delivery',
    images: ['https://via.placeholder.com/300'],
    category: 'Reagents',
    isFeatured: true,
    showInGeneEditing: true,
    showInReagent: false,
    variants: [
      { id: '7-1', sku: 'BAL100468', label: '0.1 mL', price: 35.00, stockStatus: 'in_stock' },
      { id: '7-2', sku: 'BAL100469', label: '0.5 mL', price: 120.00, stockStatus: 'in_stock' },
      { id: '7-3', sku: 'BAL100470', label: '1.0 mL', price: 320.00, stockStatus: 'in_stock' },
      { id: '7-4', sku: 'BAL100471', label: '6 x 1.0 mL', price: 1600.00, stockStatus: 'in_stock' }
    ]
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom sgRNA Design',
    description: 'Tailored single-guide RNA design for your specific research needs',
    image: 'https://via.placeholder.com/300',
    showInServiceSection: true,
  },
  {
    id: '2',
    title: 'Gene Editing Consultation',
    description: 'Expert consultation on experimental design and troubleshooting',
    image: 'https://via.placeholder.com/300',
    showInServiceSection: true,
  },
  {
    id: '3',
    title: 'CRISPR Screening Service',
    description: 'High-throughput genome-wide screening using CRISPR technology',
    image: 'https://via.placeholder.com/300',
    showInServiceSection: false,
  },
  {
    id: '4',
    title: 'Vector Construction',
    description: 'Custom vector construction for gene delivery and expression',
    image: 'https://via.placeholder.com/300',
    showInServiceSection: true,
  },
];
