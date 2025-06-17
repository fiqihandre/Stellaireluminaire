'use client'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import Header from '@/components/Header'

export default function ProductsPage() {
  const categories = ['All', ...new Set(products.map(p => p.category))]
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center text-black">Our Products</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
