'use client';

import React, { useState } from 'react';
import { useStore, Product } from '../context/StoreContext';

export const Admin: React.FC = () => {
  const { products, services, addProduct, updateProduct, deleteProduct, updateService } = useStore();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    category: '',
    images: [],
    isFeatured: false,
    showInGeneEditing: false,
    showInReagent: false,
    variants: [],
  });

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('确定要删除这个产品吗？')) {
      deleteProduct(id);
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setNewProduct({
      name: '',
      description: '',
      category: '',
      images: [],
      isFeatured: false,
      showInGeneEditing: false,
      showInReagent: false,
      variants: [],
    });
  };

  const handleSaveProduct = () => {
    if (newProduct.name && newProduct.description && newProduct.category && newProduct.variants.length > 0) {
      if (editingProduct) {
        updateProduct(editingProduct.id, newProduct);
      } else {
        addProduct(newProduct);
      }
      setEditingProduct(null);
      setNewProduct({
        name: '',
        description: '',
        category: '',
        images: [],
        isFeatured: false,
        showInGeneEditing: false,
        showInReagent: false,
        variants: [],
      });
    }
  };

  const handleAddVariant = () => {
    setNewProduct(prev => ({
      ...prev,
      variants: [...prev.variants, { id: Date.now().toString(), sku: '', label: '', price: 0, stockStatus: 'In Stock' }],
    }));
  };

  const handleRemoveVariant = (variantId: string) => {
    setNewProduct(prev => ({
      ...prev,
      variants: prev.variants.filter(variant => variant.id !== variantId),
    }));
  };

  const handleVariantChange = (variantId: string, field: keyof Product['variants'][0], value: any) => {
    setNewProduct(prev => ({
      ...prev,
      variants: prev.variants.map(variant => 
        variant.id === variantId ? { ...variant, [field]: value } : variant
      ),
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...newProduct.images];
    newImages[index] = value;
    setNewProduct(prev => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleAddImage = () => {
    setNewProduct(prev => ({
      ...prev,
      images: [...prev.images, ''],
    }));
  };

  const handleRemoveImage = (index: number) => {
    const newImages = newProduct.images.filter((_, i) => i !== index);
    setNewProduct(prev => ({
      ...prev,
      images: newImages,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">管理面板</h1>
      
      {/* 添加/编辑产品表单 */}
      {(editingProduct || newProduct.name || newProduct.description || newProduct.category || newProduct.variants.length > 0) && (
        <div className="mb-12 p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{editingProduct ? '编辑产品' : '添加新产品'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">产品名称</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入产品名称"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
              <input
                type="text"
                value={newProduct.category}
                onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入分类（例如：基因编辑）"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
              <textarea
                value={newProduct.description}
                onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="请输入产品描述"
              />
            </div>
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">图片（URL）</label>
                <button
                  onClick={handleAddImage}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                >
                  添加图片
                </button>
              </div>
              {newProduct.images.map((image, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`图片 ${index + 1} URL`}
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    删除
                  </button>
                </div>
              ))}
            </div>
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">变体</label>
                <button
                  onClick={handleAddVariant}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                >
                  添加变体
                </button>
              </div>
              {newProduct.variants.map((variant) => (
                <div key={variant.id} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2 p-2 border rounded-md">
                  <input
                    type="text"
                    value={variant.label}
                    onChange={(e) => handleVariantChange(variant.id, 'label', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="规格（例如：0.1 mL）"
                  />
                  <input
                    type="text"
                    value={variant.sku}
                    onChange={(e) => handleVariantChange(variant.id, 'sku', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="SKU（例如：BAL100468）"
                  />
                  <input
                    type="number"
                    value={variant.price}
                    onChange={(e) => handleVariantChange(variant.id, 'price', parseFloat(e.target.value) || 0)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="价格（例如：35.00）"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={variant.stockStatus}
                      onChange={(e) => handleVariantChange(variant.id, 'stockStatus', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="库存状态（例如：现货）"
                    />
                    <button
                      onClick={() => handleRemoveVariant(variant.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-2">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={newProduct.isFeatured}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, isFeatured: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="isFeatured">在首页轮播中显示</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showInGeneEditing"
                    checked={newProduct.showInGeneEditing}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, showInGeneEditing: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="showInGeneEditing">在基因编辑部分显示</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showInReagent"
                    checked={newProduct.showInReagent}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, showInReagent: e.target.checked }))}
                    className="w-4 h-4 text-gray-400 rounded cursor-not-allowed"
                    disabled
                  />
                  <label htmlFor="showInReagent" className="text-gray-500">在试剂部分显示（即将推出）</label>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex gap-2">
              <button
                onClick={handleSaveProduct}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {editingProduct ? '保存更改' : '添加产品'}
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 产品列表 */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">产品</h2>
          <button
            onClick={handleAddProduct}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            添加新产品
          </button>
        </div>
        <div className="space-y-6">
          {products.map(product => (
            <div key={product.id} className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600"
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                  >
                    删除
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`featured-${product.id}`}
                    checked={product.isFeatured}
                    onChange={(e) => updateProduct(product.id, { isFeatured: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor={`featured-${product.id}`}>在首页轮播中显示</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`gene-editing-${product.id}`}
                    checked={product.showInGeneEditing}
                    onChange={(e) => updateProduct(product.id, { showInGeneEditing: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor={`gene-editing-${product.id}`}>在基因编辑部分显示</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`reagent-${product.id}`}
                    checked={product.showInReagent}
                    onChange={(e) => updateProduct(product.id, { showInReagent: e.target.checked })}
                    className="w-4 h-4 text-gray-400 rounded cursor-not-allowed"
                    disabled
                  />
                  <label htmlFor={`reagent-${product.id}`} className="text-gray-500">在试剂部分显示（即将推出）</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 服务列表 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">服务</h2>
        <div className="space-y-6">
          {services.map(service => (
            <div key={service.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">{service.title}</h3>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`service-${service.id}`}
                  checked={service.showInServiceSection}
                  onChange={(e) => updateService(service.id, { showInServiceSection: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor={`service-${service.id}`}>在服务部分显示</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};