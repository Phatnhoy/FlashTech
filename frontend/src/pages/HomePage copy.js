import HomePageComponent from "./components/HomePageComponent";
import axios from "axios";

const getBestsellers = async () => {
  const { data } = await axios.get("/api/products/bestsellers");
  console.log(data)
  return data;
}

const HomePage = () => {
  return <HomePageComponent getBestsellers={getBestsellers} />
};

export default HomePage;

