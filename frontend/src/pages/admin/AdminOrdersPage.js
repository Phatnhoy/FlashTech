import OrderPageComponent from "./components/OrderPageComponent";

import axios from "axios";

const fetchOrders = async (abctrl) => {
  const { data } = await axios.get("/api/orders/admin", {
    signal: abctrl.signal,
  });
  return data
}

const AdminOrdersPage = () => {
  return <OrderPageComponent fetchOrders={fetchOrders} />
};

export default AdminOrdersPage;





