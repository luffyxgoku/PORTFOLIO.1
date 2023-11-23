import React from "react";
import ContactUs from "./ContactUs.js";

function Contact() {
  return (
    <div className="bg-zinc-300 pt-10 ">
      <section id="contact">
        <h1 className="font-bold text-center text-blue-600 pt-4">
          <span className="text-black">Get in</span> Touch
        </h1>

        <ContactUs />
      </section>
    </div>
  );
}
export default Contact;
