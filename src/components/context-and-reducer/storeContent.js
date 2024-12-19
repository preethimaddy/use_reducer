import { createContext, useReducer } from "react";
import  storeReducer, { initialState } from './reducer'

export const StoreContext = createContext();


export const StoreProvider = ({children}) =>{
    const [state, dispatch] = useReducer(storeReducer, initialState);

    const addToBasket = (product) =>{
  // Create a new array to avoid mutating state
  const updatedBasket = [...state.products, product];
    

        dispatch({
            type: "add",
            payload: updatedBasket
        })
          // Optionally update the total price
    updatePrice(updatedBasket);
    }
    const removeFromBasket = (product) =>{
       const updatedBasket = state.products.filter(
        (currentProduct)=> currentProduct.name !== product.name )
          dispatch({
              type: "remove",
              payload: updatedBasket
          });
             // Call updatePrice to recalculate the total
    updatePrice(updatedBasket);
      }
      const updatePrice = (products) => {
        let total = 0;
        products.forEach(product =>{
            total += product.price
        });
        dispatch({
            type: "update price",
            payload: total
        })
      }

      const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
      }

          // Return StoreContext.Provider
    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}