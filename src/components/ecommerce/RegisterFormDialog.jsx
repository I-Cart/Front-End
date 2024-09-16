import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import RegisterForm from "./RegisterForm";

function RegisterFormDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <RegisterForm setIsOpen={setIsOpen} isAdmin={true} />
      </DialogContent>
    </Dialog>
  );
}

export default RegisterFormDialog;
