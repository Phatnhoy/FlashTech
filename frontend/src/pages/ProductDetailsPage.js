import ProductDetailsPageComponent from "./components/ProductDetailsPageComponent";
import axios from "axios";
import { useDispatch, } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const getProduct = async (productId) => {
    const { data } = await axios.get("/api/products/get-one/" + productId)
    return data
  }



  return <ProductDetailsPageComponent addToCartReduxAction={addToCart} reduxDispatch={dispatch} getProduct={getProduct} />
};

export default ProductDetailsPage;

