import { useState } from "react";
import { SecondaryButton } from "../UI/Buttons";

function ContactForm({ addContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
    subscribe: true,
  });

  function handleChange(event: { target: { name: any; value: any } }) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addContact(formData);
  }

  return (
    <>
      <form
        className="flex flex-col gap-4 text-blue mx-6 my-14 md:mx-44 lg:mr-10"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="name" className="opacity-50">
            Name
          </label>
          <input
            className="bg-transparent text-right"
            type="text"
            id="name"
            name="name"
            placeholder="John Smith"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="flex justify-between  border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="email" className="opacity-50">
            Email Address
          </label>
          <input
            className="bg-transparent text-right"
            type="text"
            id="email"
            name="email"
            placeholder="john@email.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="flex justify-between  border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="company" className="opacity-50">
            Company Name
          </label>
          <input
            className="bg-transparent w-7/12 text-right"
            type="text"
            id="company"
            name="company"
            placeholder="Company limited"
            onChange={handleChange}
            value={formData.company}
          />
        </div>

        <div className="flex justify-between  border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="title" className="opacity-50">
            Title
          </label>
          <input
            className="bg-transparent text-right"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
        </div>

        <div className="flex justify-between border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="message" className="opacity-50">
            Message
          </label>
          <textarea className="bg-transparent" id="message" name="message" />
        </div>

        <div className="flex gap-6 opacity-100 my-4">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            className="bg-transparent text-right"
            onChange={handleChange}
          />
          <label className="flex" htmlFor="subscribe">
            Stay up-to-date with company announcements and updates to our API
          </label>
        </div>

        <SecondaryButton
          className="border-blue text-blue opacity-100 self-start"
          type="submit"
        >
          Submit
        </SecondaryButton>
      </form>
    </>
  );
}

export default ContactForm;
