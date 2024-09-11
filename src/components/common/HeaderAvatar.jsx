import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

function HeaderAvatar() {
  return (
    <Link to="">
      <div>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width="35px"
            className="rounded-full"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </div>
    </Link>
  );
}

export default HeaderAvatar;
