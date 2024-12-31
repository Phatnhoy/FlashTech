import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";

import axios from "axios";

const getOrder = async (orderId) => {
  const { data } = await axios.get("/api/orders/user/" + orderId)
  return data
}

const markAsDelivered = async (id) => {
  const { data } = await axios.put("/api/orders/delivered/" + id);
  return data
}

const AdminOrderDetailsPage = () => {
  return <OrderDetailsPageComponent
    getOrder={getOrder}
    markAsDelivered={markAsDelivered}
  ></OrderDetailsPageComponent>
};

export default AdminOrderDetailsPage;

