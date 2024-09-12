import RegisterForm from "@/components/ecommerce/RegisterForm";
import { useSelector } from "react-redux";

function Register() {
  const isAdmin = useSelector((state) => state.auth.user?.role === "admin");
  return <RegisterForm isAdmin={isAdmin} />;
}

export default Register;
