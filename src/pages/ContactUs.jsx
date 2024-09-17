import ContactForm from "@/components/ecommerce/ContactForm";
function ContactUs() {
  return (
    <div className="p-[40px] flex-1">
      <h2 className="text-[hsl(var(--primary))] text-[40px] font-bold text-center lg:text-left">
        Contact us
      </h2>
      <div className=" flex flex-col-reverse lg:flex-row  mt-20 mx-auto w-fit text- gap-20 ">
        <ContactForm />
        <div>
          <img
            src="/assets/contact us.webp"
            alt=""
            className=" max-w-full lg:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
