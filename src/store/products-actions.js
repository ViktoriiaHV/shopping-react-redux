import { productActions } from "./products-slice";
import { uiActions } from "./ui-slice";

export const fetchProductsData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-food-app-237ac-default-rtdb.europe-west1.firebasedatabase.app/products.json');
            if (!response.ok){
             throw new Error('Fetching product data failed')
            }
            const data = await response.json();

            return data;
          };
          try {
            const productsData =  await fetchData();
            const productsDataArray = Object.values(productsData);
            dispatch(productActions.loadProducts(productsDataArray))
          } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching product data failed",
                })
              );
          }
    }
}