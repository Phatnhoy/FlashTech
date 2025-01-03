import HomePageComponent from "./components/HomePageComponent";
import axios from "axios";

const getBestsellers = async () => {
  const { data } = await axios.get("/api/products/bestsellers");
  console.log(data)
  return data;
}
const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  console.log(data)
  return data
}
const getHotProducts = async () => {
  const { data } = await axios.get("/api/products/hotproducts");
  console.log(data)
  return data
}
const getNewProducts = async () => {
  const { data } = await axios.get("/api/products/new");
  console.log(data)
  return data
}

const HomePage = () => {
  return <HomePageComponent getBestsellers={getBestsellers} getProducts={getProducts} getHotProducts={getHotProducts} getNewProducts={getNewProducts}/>
};

export default HomePage;

