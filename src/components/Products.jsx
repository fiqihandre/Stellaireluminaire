import Image from 'next/image';

export default function Products() {
  return (
    <section id='products' className="py-12 bg-[#3c3c3c]">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">See What's New</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4 px-4 sm:px-8 md:px-12">
          {/* Product Cards */}
          {[
            { name: 'Truckher Hat Brown Stellaire Luminaire', image: '/topi/topi1.webp', price: '100.000' },
          ].map((product, index) => (
            <div key={index} className="card bg-[#3c3c3c] shadow-lg rounded-lg overflow-hidden w-72 mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
                width={288}
                height={224}
                draggable="false"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-100">{product.name}</h4>
                <p className="text-sm text-gray-200">Rp {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="mt-8 text-center">
          <a href="/products" className="bg-buttonBg textWhite font-bold py-3 px-6 rounded-lg hover:bg-buttonHoverBg shadow-lg transition ease-in-out duration-300">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
