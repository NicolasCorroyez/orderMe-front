import { useState, useRef, useEffect } from 'react';
import Products from '../components/Products';
import Discover from '../components/Discover';
import Contact from '../components/Contact';
import Cart from '../components/Cart';
import products from '../data/products.json';

const HomeClient = () => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', quantity: 2, price: 10 },
    { id: 2, name: 'Item 2', quantity: 1, price: 20 },
  ]);
  const [activeMenu, setActiveMenu] = useState('Produits');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const menuRefs = useRef([]);

  useEffect(() => {
    const activeIndex = ['Produits', 'Decouvrir', 'Contact'].indexOf(
      activeMenu,
    );
    if (menuRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = menuRefs.current[activeIndex];
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeMenu]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'Produits':
        return <Products />;
      case 'Decouvrir':
        return <Discover />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-svh min-w-svw bg-primary">
        <div className="p-5 max-w-screen-xl mx-auto w-full">
          <div className="flex flex-row justify-between gap-4">
            <div className="text-white text-sm xsm:text-base">
              Les huitres de <span className="text-yellow-300">Tom</span>
            </div>
            <div className="text-white italic text-xs xsm:text-base">
              powered by OrderMe
            </div>
          </div>
          <div className="h-0.5 bg-white"></div>
          <div className="text-white mt-15 my-6 w-2/3 font-rammetto text-7xl">
            <div>Commandez</div>
            <div className="mt-4">
              les huîtres de <span className="text-yellow-300">Tom</span>
            </div>
          </div>
          <div className="text-white w-full p-4">
            Lorem ipsum dolor sit amet consectetur heyadipisicing elit.
            Necessitatibus cumque et impedit modi cum, consequatur iste nemo
            omnis eum dicta, magni quibusdam blanditiis. Illo sunt consequuntur
            quaerat ut, libero eius tenetur aspernatur laborum nemo, tempora,
            maxime autem iusto delectus veniam! Corrupti pariatur odit i
            consequuntur doloremque numquam assumenda? Consectetur, non porro.
          </div>
          <div className="h-0.5 bg-white"></div>
          <div className="relative">
            <div className="flex flex-row justify-start gap-4 md:gap-15 px-5 py-2">
              {['Produits', 'Decouvrir', 'Contact'].map((menu, index) => (
                <button
                  key={menu}
                  ref={(el) => (menuRefs.current[index] = el)}
                  className={`text-white italic hover:text-green-400 ${
                    activeMenu === menu ? 'font-bold' : ''
                  }`}
                  onClick={() => setActiveMenu(menu)}
                >
                  {menu}
                </button>
              ))}
            </div>
            <div
              className="absolute bottom-0 h-1 bg-yellow-300 transition-all duration-300"
              style={underlineStyle}
            ></div>
          </div>
          <div className="h-0.5 bg-white"></div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/3">
              <div className="mt-3 flex flex-col xsm:flex-row justify-center items-center md:items-start md:justify-start gap-4 flex-wrap">
                {renderContent()}
              </div>
            </div>
            <Cart cartItems={cartItems} removeItem={removeItem} total={total} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClient;
