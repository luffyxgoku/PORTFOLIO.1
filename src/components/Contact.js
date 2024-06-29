import React from "react";
import ContactUs from "./ContactUs.js";

function Contact() {
  return (
    <div className="pt-24 md:pt-10 ">
      <section id="contact">
        <h1 className="font-bold text-center text-sky-600 pt-4 underline underline-offset-8 decoration-sky-950">
          <span className="text-black">Get in</span> Touch
        </h1>

        <ContactUs />
      </section>
    </div>
  );
}
export default Contact;
