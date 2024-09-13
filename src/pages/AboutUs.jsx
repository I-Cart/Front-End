import PersonInfo from "@/components/about/PersonInfo";
import { FaGithub } from "react-icons/fa";
function AboutUs() {
  return (
    <div className="p-[40px]">
      <h2 className="text-[hsl(var(--primary))] text-[40px] font-bold text-center lg:text-left">
        About us
      </h2>
      <div className=" flex flex-col-reverse lg:flex-row  mt-20 mx-auto w-fit text- gap-20 ">
        <div className=" border-solid border-[hsl(var(--primary))] border-[3px]  rounded-md py-3 px-20">
          <h3 className=" text-[30px] text-[hsl(var(--primary))] font-bold ">
            Our Team
          </h3>
          <p className=" max-w-[300px] text-[hsl(var(--primary))]">
            We are a group of front-end developers who are driven by passion and
            a love of learning and facing challenges
          </p>
          <h3 className=" text-[30px] text-[hsl(var(--primary))] font-bold ">
            Team members
          </h3>
          <ul>
            <PersonInfo
              name="Ahmed Al-Sayyad"
              gitHubLink="https://github.com/HunterXNB"
            />
            <PersonInfo
              name="Anas Al-saeed"
              gitHubLink="https://github.com/anasMAS123"
            />
            <PersonInfo
              name="Ahmed Wael"
              gitHubLink="https://github.com/a7medwael10"
            />
            <PersonInfo name="Omar Goger" gitHubLink="" />
            <PersonInfo
              name="Islam Mohamed"
              gitHubLink="https://github.com/islammohamedatia"
            />
          </ul>
        </div>

        <div>
          <img src="/assets/aboutus.svg" alt="" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
