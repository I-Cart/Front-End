import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { logout } from "@/store/auth/authSlice";
function HeaderAvatar() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width="35px"
            className="rounded-full"
          />
          <AvatarFallback>
            {user?.name
              .split(" ")
              .map((el) => el[0].toUpperCase())
              .join("")}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-bold text-xl">{user?.name}</h3>
          <Link to={"mailto:" + user?.email}>{user?.email}</Link>
          <Link to={"tel:" + user?.phone}>{user?.phone}</Link>
          <Dialog>
            <Button asChild variant={"destructive"}>
              <DialogTrigger>Logout</DialogTrigger>
            </Button>
            <DialogContent aria-describedby={undefined}>
              <DialogHeader>
                <DialogTitle>Are you sure you want to log out?</DialogTitle>
              </DialogHeader>
              <DialogFooter className="justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    onClick={() => {
                      dispatch(logout());
                    }}
                    type="button"
                    variant={"destructive"}
                  >
                    Logout
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default HeaderAvatar;
