import React, { useState } from 'react';
import jollynO from '../images/product/jolly-huitre-numero-0.jpg';
import jollyn1 from '../images/product/jolly-huitre-numero-1.jpg';
import jollyn2 from '../images/product/jolly-huitre-numero-2.jpg';
import jollyn3 from '../images/product/jolly-huitre-numero-3.jpg';
import jollyn4 from '../images/product/jolly-huitre-numero-4.jpg';

const Products = () => {
  const [quantities, setQuantities] = useState({});
  const [flipped, setFlipped] = useState({});

  const products = [
    {
      id: 1,
      name: 'Huîtres creuses n°0',
      price: 10,
      image: jollynO,
      description: 'Description du produit 0',
    },
    {
      id: 2,
      name: 'Huîtres creuses n°1',
      price: 12,
      image: jollyn1,
      description: 'Description du produit 1',
    },
    {
      id: 3,
      name: 'Huîtres creuses n°2',
      price: 8,
      image: jollyn2,
      description: 'Description du produit 2',
    },
    {
      id: 4,
      name: 'Huîtres creuses n°3',
      price: 10,
      image: jollyn3,
      description: 'Description du produit 3',
    },
    {
      id: 5,
      name: 'Huîtres creuses n°4',
      price: 12,
      image: jollyn4,
      description: 'Description du produit 4',
    },
  ];

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const handleFlip = (id) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [id]: !prevFlipped[id],
    }));
  };

  return (
    <div className="p-4">
      <div className="mt-2 flex flex-col xsm:flex-row justify-center items-center md:items-start md:justify-start gap-4 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="group h-100 w-65">
            <div
              className={`bg-white relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
                flipped[product.id] ? '[transform:rotateY(180deg)]' : ''
              }`}
              onClick={() => handleFlip(product.id)}
            >
              {/* Front Face */}
              <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                <div className="h-1/2 bg-gray-300 rounded-t-lg flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover cursor-pointer h-full w-full rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="text-md font-rammetto text-center">
                    {product.name}
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="mt-5 text-2xl font-bold font-rammetto text-center text-primary text-6xl">
                      {product.price}€
                    </div>
                    <div>la douzaine</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-white bg-yellow-400 h-10 rounded-b-lg">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDecrement(product.id);
                    }}
                    className="text-1xl  font-rammetto px-10 py-1 rounded"
                    style={{ minWidth: '50px' }}
                  >
                    -
                  </button>
                  <span
                    className="mx-2 font-rammetto text-3xl"
                    style={{ minWidth: '50px', textAlign: 'center' }}
                  >
                    {quantities[product.id] || 0}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIncrement(product.id);
                    }}
                    className="text-1xl font-rammetto px-10 py-1 rounded"
                    style={{ minWidth: '50px' }}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-yellow-400 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {product.name}
                  </h2>
                  <p className="text-lg text-pretty text-center mb-4 text-primary">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
