import React from "react";
import SecondaryBtn from "../ui/secondaryBtn";
import Input from "./Input";
import Button from "../ui/button";

function ContactSection() {
  return (
    <div id="contact" className="py-[5rem] px-[1rem] md:px-[13rem] bg-[#020301] flex flex-col md:flex-row  gap-[3.05rem]">
      <div className="flex w-full flex-col gap-[1.5rem] flex-1">
        <SecondaryBtn title="Contact us" />
        <p className="text-white font-Inter text-base w-4/5">
          Fill out the contact form and our Sales team will be in touch.
        </p>
      </div>

      <form className="w-full flex-1 flex flex-col gap-[2rem]">
        <div>
            <Input placeholder="Full name" />
        </div>

        <div>
            <Input type="tel" placeholder="Phone number" />
        </div>

        <div>
            <Input type="email" placeholder="Email address" />
        </div>

        <div>
            <Input textArea type="email" placeholder="Message" />
        </div>

        <div className="w-full md:w-2/5">
            <Button type="submit" title="Send Message" />
        </div>
      </form>
    </div>
  );
}

export default ContactSection;
