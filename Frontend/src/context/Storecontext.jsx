import React,{useState,createContext, useEffect} from 'react';
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) {
                return { ...prev, [itemId]: 1 };
            }
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    }

    const removeFromCart = (itemId)=>{
  setCartItems((prev)=>{
    if(!prev[itemId]) return prev
    if(prev[itemId] === 1){
      const newCart = {...prev}
      delete newCart[itemId]
      return newCart
    }
    return {...prev,[itemId]:prev[itemId]-1}
  })
}

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;