import OrdersTable from "@/components/ecommerce/OrdersTable";

export default function Orders() {
  return (
    <div className="container flex-1 mx-auto flex flex-col p-4">
      <h1 className="text-2xl text-primary font-bold mb-4">Your Orders</h1>
      <OrdersTable />
    </div>
  );
}
