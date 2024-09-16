import AdminProducts from "@/components/ecommerce/AdminProducts";
import Users from "@/components/ecommerce/Users";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Dashboard() {
  return (
    <div className="flex-1 p-2 md:p-5 xl:p-7">
      <h1 className="text-primary text-3xl mb-3 font-bold text-center lg:text-left">
        Dashboard
      </h1>
      <Tabs defaultValue="products" className="w-full ">
        <TabsList className="mx-auto lg:mx-0 flex w-fit">
          <TabsTrigger
            className="[&[aria-selected=true]]:bg-primary [&[aria-selected=true]]:text-white"
            value="products"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            className="[&[aria-selected=true]]:bg-primary [&[aria-selected=true]]:text-white"
            value="users"
          >
            Users
          </TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <AdminProducts />
        </TabsContent>
        <TabsContent value="users">
          <Users />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Dashboard;
