'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-cardBg rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <div className="select-none pointer-events-none">
          <Image 
            src={product.imageThumbnail}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-cardTextPrimary">{product.name}</h3>
        <p className="text-cardTextSecondary mb-2">{product.category}</p>
        <p className="text-cardTextPrimary font-bold">Rp {product.price.toLocaleString()}</p>
        <Link 
          href={`/products/${product.id}`}
          className="mt-5 inline-block bg-cardButtonBg text-cardButtonText font-bold py-3 px-6 rounded-xl hover:bg-cardButtonHoverBg shadow-lg transition ease-in-out duration-300 "
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
