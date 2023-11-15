![homepage](./public/preview.jpg)

# PayAPI Multi Page Website

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Links

- Solution URL: [PayAPI Repo](https://github.com/kebin20/payapi-multi-page-website)
- Live Site URL: [PayAPI site](https://payapi-multi-page-website-kebin20s-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwind.com/) - For styling

### What I learned

One of the interesting thing I learnt while doing the form validation was, rather than manually adding an error message for each input field, dynamically outputting it using state was a much more efficient way of displaying the error messages. In addition, to make sure that no errors have occurred before submitting the form,  a for loop is used to loop over the keys in the formData object to make sure there are no errors, and if there are no errors, then the form can be safely submitted.

```js
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
      addContact(formData);
    }
  }
```

NOTE: getStaticProps(); normally in React, initial data is not fetched until the next render cycle (client-side data fetching after a page is fully rendered), therefore, the initial page will load with no data until the next render cycle, which is not good for SEO. However, with getStaticProps(), the data will initially render during the build phase, so that when the initial page is rendered, the data will also be rendered too. Hence, eliminating the need of using useEffect() in the component. 

### Continued development

Will create a dashboard to display the registered user data from the contact form page, using MongoDB so that the app can become a CRUD app. Will implement a review system as well in the future.


### Useful resources

- [Validate an Email in an Input field in React](https://bobbyhadz.com/blog/react-check-if-email-is-valid) - This helped me to write a basic way fo validating emails in React
- [How to Check if an Input is Empty in React](https://bobbyhadz.com/blog/react-check-if-input-is-empty) - In addition to email input validation, the same author also outlines how to check for empty input fields
- [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) - Part of the TS handbook, showed the "as" type assertion, used for declaring the type of the keys within my formData data object
- [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) - Part of the TS handbook, referred to this for returning types of the keys within my formData data object

## Author

- PayAPI multi-page website - [Kevin Tanzyl](https://ktanzyl.netlify.app/)
- Frontend Mentor - [@kebin20](https://www.frontendmentor.io/profile/kebin20)

## Frontend Mentor - PayAPI multi-page website solution

This is a solution to the [PayAPI multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e). 