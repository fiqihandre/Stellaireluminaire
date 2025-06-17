'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { products } from '@/data/products'
import Header from '@/components/Header'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0])
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0])

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-100 pt-24 pb-12">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold">Product not found</h1>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Product Images */}
              <div className="md:w-1/2">
                <div className="relative h-96">
                  {product.images.length > 1 ? (
                    <Slider {...sliderSettings}>
                      {product.images.map((image, index) => (
                        <div key={index} className="relative h-96">
                          <Image
                            src={image}
                            alt={`${product.name} - ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            draggable="false"
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      draggable="false"
                    />
                  )}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2 p-6 relative">
                <h1 className="text-3xl font-bold mb-2 text-black mt-3">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <p className="text-2xl font-bold text-black mb-4">
                  Rp {product.price.toLocaleString()}
                </p>
                <div className="md:absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  {product.colors && (
                    <div className="mb-3 md:mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map(color => (
                          <button 
                            key={color}
                            className={`px-3 py-1 border rounded-md text-sm ${
                              selectedColor === color ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                            onClick={() => setSelectedColor(color)}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {product.sizes && (
                    <div className="mb-3 md:mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map(size => (
                          <button 
                            key={size}
                            className={`px-3 py-1 border rounded-md text-sm ${
                              selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <a 
                    href={`${product.link}?text=Hi, I want to buy *${product.name}* (Color: ${selectedColor}, Size: ${selectedSize})`} 
                    target='blank'
                    className="mt-4 inline-block bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 shadow-lg transition ease-in-out duration-300 w-full text-center"
                  >
                    Buy the product
                  </a>
                </div>
              </div>
            </div>
            {/* Description below image */}
            <div className="p-6 md:mt-3">
              {product.description.map((item, index) => {
                return (
                  <p key={index} className='text-black mb-2'>
                    {item.split('\n').map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < item.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
