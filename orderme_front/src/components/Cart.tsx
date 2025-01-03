import React from 'react';

const Cart = ({ cartItems, removeItem, total }) => {
  return (
    <div className="ml-auto my-9 bg-white h-96 w-full md:w-1/3 rounded-lg flex flex-col border-4 border-white">
      <div className="font-bold bg-slate-700 rounded-t-lg p-1 py-3 text-md text-center text-white">
        Votre commande
      </div>
      <div className="flex-grow overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-600">
            <tr>
              <th className="px-2 py-1 text-left text-xs font-bold text-white uppercase tracking-wider">
                Nom
              </th>
              <th className="px-2 py-1 text-left text-xs font-bold text-white uppercase tracking-wider">
                Quantité
              </th>
              <th className="px-2 py-1 text-left text-xs font-bold text-white uppercase tracking-wider">
                Prix
              </th>
              <th className="px-2 py-1 text-left text-xs font-bold text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-2 py-1 whitespace-nowrap text-sm italic text-black-0">
                  {item.name}
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">
                  {item.quantity}
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">
                  {item.price}€
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.id)}
                  >
                    Retirer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between mb-2">
          <div className="font-bold font-bold italic pl-2">Total</div>
          <div className="font-rammetto text-4xl text-primary pr-2">
            {total}€
          </div>
        </div>
        <button className="w-full text-sm text-white font-bold bg-primary py-2 rounded hover:bg-yellow-300 hover:text-black">
          Reserver
        </button>
      </div>
    </div>
  );
};

export default Cart;
