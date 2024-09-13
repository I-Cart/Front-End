import { FaGithub } from "react-icons/fa";

function PersonInfo({ name, gitHubLink }) {
  return (
    <li>
      <div className=" flex justify-between">
        <h4 className=" font-bold text-[hsl(var(--primary))] ">{name}</h4>
        <a href={gitHubLink} target="_blank">
          <span className="text-[hsl(var(--primary))] cursor-pointer">
            <FaGithub />
          </span>
        </a>
      </div>
    </li>
  );
}

export default PersonInfo;
