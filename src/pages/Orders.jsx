import OrdersTable from "@/components/ecommerce/OrdersTable";

export default function Orders() {
  return (
    <div className="container flex-1 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      <OrdersTable />
    </div>
  );
}
