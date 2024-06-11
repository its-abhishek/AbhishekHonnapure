import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qabq9ng",
      "template_b56zth1",
      form.current,
      "uYhs2helF0OSXgIBH"
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="container">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="flex flex-col gap-4">
          <div class="bg-[#2c2c6c] p-4 text-center rounded-2xl flex flex-col justify-center items-center">
            <MdOutlineEmail className="text-center text-2xl mb-2" />
            <h5>Email</h5>
            <h5>abhihonnapure@gmail.com</h5>
            <a
              href="mailto:abhihonnapure@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>

          <div className="bg-[#2c2c6c] p-4 text-center rounded-2xl flex flex-col justify-center items-center">
            <BsInstagram className="text-center text-2xl mb-2" />
            <h5>Instagram</h5>
            <h5>@abhishek_honnapure</h5>
            <a
              href="https://www.instagram.com/abhishek_honnapure/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="bg-[#2c2c6c] p-4 text-center rounded-2xl flex flex-col justify-center items-center">
            <ImLocation2 className="text-center text-2xl mb-2" />
            <h5>Location</h5>
            <h5>Bangalore, India</h5>
            <a
              href="https://goo.gl/maps/urfTie1z58rKJRys5"
              target="_blank"
              rel="noreferrer"
            >
              Visit Me
            </a>
          </div>
        </div>
        {/*End Of Contact section*/}
        <div className="md:w-2/4">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              className="bg-transparent ring-1 ring-inset ring-[rgba(77,181,255,0.4)] rounded-md p-2"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              className="bg-transparent ring-1 ring-inset ring-[rgba(77,181,255,0.4)] rounded-md p-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="bg-transparent ring-1 ring-inset ring-[rgba(77,181,255,0.4)] rounded-md p-2"
              type="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="bg-transparent ring-1 ring-inset ring-[rgba(77,181,255,0.4)] rounded-md p-2"
              type="message"
              name="message"
              rows="8"
              placeholder="Massage"
              required
            />
            <button
              type="submit"
              className="bg-primary-400 rounded-md w-fit p-2 flex items-center text-black"
            >
              Send Message
              <span className="ml-2">
                <AiOutlineSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
