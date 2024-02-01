import { useState } from "react";
import { SecondaryButton } from "../UI/Buttons";
import { FormDataProps } from "@/models";
import { v4 as uuidv4 } from "uuid";

export default function OldContactForm() {
  const initialFormData = {
    id: uuidv4(),
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
    subscribe: true,
  };

  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
    subscribe: true,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function addContactHandler(contactDetails: FormDataProps) {
    try {
      console.log("Contact Details:", contactDetails);

      const response = await fetch("/api/new-contact", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }
    } catch (error) {
      alert("Error submitting contact form");
    }
  }

  function handleChange(event: { target: { name: any; value: any } }) {
    //Destructured name and value from event.target
    const { name, value } = event.target;

    let error = "";

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Please use a valid email address";
    } else if (
      name !== "email" &&
      typeof value === "string" &&
      value.trim() === ""
    ) {
      error = "This field can't be empty";
    }
    setFormData((currData) => {
      return { ...currData, [name]: value };
    });
    setErrors((prevErrors) => {
      return { ...prevErrors, [name]: error };
    });
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    //Check for errors before submitting
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        handleChange({
          target: { name: key, value: formData[key as keyof FormDataProps] },
        });
      }
    }

    //If there are no errors, submit the form
    if (Object.values(errors).every((error) => !error)) {
      addContactHandler(formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    }
  }

  return (
    <>
      {submitSuccess && alert("Form submitted successfully!")}
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
            required
          />
          {errors.name && <small className="text-red-500">{errors.name}</small>}
        </div>

        <div className="flex justify-between gap-4  border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="email" className="opacity-50">
            Email Address
          </label>
          <input
            className="bg-transparent text-right"
            type="email"
            id="email"
            name="email"
            placeholder="john@email.com"
            onChange={handleChange}
            value={formData.email}
            required
          />
          {errors.email && (
            <small className="text-red-500">{errors.email}</small>
          )}
        </div>

        <div className="flex justify-between gap-4  border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="company" className="opacity-50">
            Company Name
          </label>
          <input
            className="bg-transparent w-7/12 text-right"
            type="text"
            id="company"
            name="company"
            placeholder="ABC Ltd"
            onChange={handleChange}
            value={formData.company}
            required
          />
          {errors.company && (
            <small className="text-red-500">{errors.company}</small>
          )}
        </div>

        <div className="flex justify-between gap-4  border-b-2 border-blue border-opacity-30 p-5">
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
            required
          />
          {errors.title && (
            <small className="text-red-500">{errors.title}</small>
          )}
        </div>

        <div className="flex justify-between gap-4 border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="message" className="opacity-50">
            Message
          </label>
          <textarea
            className="bg-transparent"
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
          />
          {errors.message && (
            <small className="text-red-500">{errors.message}</small>
          )}
        </div>
        <p className="text-xs p-4">All fields are required</p>
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
