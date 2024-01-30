import { useForm } from "react-hook-form";
import { SecondaryButton } from "../UI/Buttons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ContactFormProps, FormDataProps } from "@/models";

export default function NewContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => console.log(data);

  const registerOptions = {
    name: { required: "Name required" },
    email: { required: "Email required" },
    company: { required: "Company name required" },
    title: { required: "Title required" },
    inquiry: { required: "Please fill in your inquiry" },
  };

  //   const initialFormData = {
  //     id: uuidv4(),
  //     name: "",
  //     email: "",
  //     company: "",
  //     title: "",
  //     message: "",
  //     subscribe: true,
  //   };

  //   const [formData, setFormData] = useState({
  //     id: uuidv4(),
  //     name: "",
  //     email: "",
  //     company: "",
  //     title: "",
  //     message: "",
  //     subscribe: true,
  //   });

  function handleError(errors: any) {}

//   async function addContactHandler(contactDetails: FormDataProps) {
//     try {
//       console.log("Contact Details:", contactDetails);

//       const response = await fetch("/api/new-contact", {
//         method: "POST",
//         body: JSON.stringify(contactDetails),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit contact form");
//       }
//     } catch (error) {
//       alert("Error submitting contact form");
//     }
//   }

  //   function handleChange(event: { target: { name: any; value: any } }) {
  //     //Destructured name and value from event.target
  //     const { name, value } = event.target;
  //     setFormData((currData: any) => {
  //       return { ...currData, [name]: value };
  //     });
  //   }

  //   function dataSubmit() {
  //     addContactHandler(formData);
  //     setFormData(initialFormData);
  //   }

  return (
    <>
      <form
        className="flex flex-col gap-4 text-blue mx-6 my-14 md:mx-44 lg:mr-10"
        onSubmit={handleSubmit(handleError, onSubmit)}
      >
        <div className="flex justify-between border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="name" className="opacity-50">
            Name
          </label>
          <input
            className="bg-transparent text-right"
            type="text"
            name="name"
            placeholder="John Smith"
            // onChange={handleChange}
            // value={formData.name}
            {...register("name", registerOptions.name)}
          />
          {errors?.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div className="flex justify-between gap-4  border-b-2 border-blue border-opacity-30 p-5">
          {" "}
          <label htmlFor="email" className="opacity-50">
            Email Address
          </label>
          <input
            className="bg-transparent text-right"
            type="email"
            name="email"
            placeholder="john@email.com"
            // onChange={handleChange}
            // value={formData.email}
            {...register("email", registerOptions.email)}
          />
          {errors?.email && (
            <small className="text-red-500">{errors.email.message}</small>
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
            // onChange={handleChange}
            // value={formData.company}
            {...register("company", registerOptions.company)}
          />
          {errors?.company && (
            <small className="text-red-500">{errors.company.message}</small>
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
            // onChange={handleChange}
            // value={formData.title}
            {...register("title", registerOptions.title)}
          />
          {errors?.title && (
            <small className="text-red-500">{errors.title.message}</small>
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
            // onChange={handleChange}
            // value={formData.message}
            {...register("inquiry", registerOptions.inquiry)}
          />
          {errors?.inquiry && (
            <small className="text-red-500">{errors.inquiry.message}</small>
          )}
        </div>

        <small className="text-xs p-4">All fields are required</small>

        <div className="flex gap-6 opacity-100 my-4">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            className="bg-transparent text-right"
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
