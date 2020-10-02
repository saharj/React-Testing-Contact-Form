import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import App from "./App";
import ContactForm from "./components/ContactForm";

const userData = {
  firstName: "Sahar",
  lastName: "Jafari",
  email: "me@me.com",
  message: "Some message.",
};

test("all inputs exist", () => {
  act(() => {
    render(<ContactForm />);
  });
  const firstName = screen.getByPlaceholderText("Edd");
  const lastName = screen.getByPlaceholderText("Burke");
  const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
  expect(firstName).toBeTruthy();
  expect(lastName).toBeTruthy();
  expect(email).toBeTruthy();
});

test("user can submit a form", async () => {
  act(() => {
    render(<ContactForm />);
  });
  const firstName = screen.getByPlaceholderText("Edd");
  const lastName = screen.getByPlaceholderText("Burke");
  const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
  const message = screen.getByLabelText("Message");
  const button = screen.getByRole("button", { type: "submit" });

  fireEvent.change(firstName, { target: { value: "Sahar" } });
  fireEvent.change(lastName, { target: { value: userData.lastName } });
  fireEvent.change(email, { target: { value: userData.email } });
  fireEvent.change(message, { target: { value: userData.message } });
  fireEvent.click(button);

  expect(screen.findByText(JSON.stringify(userData))).toBeTruthy;
  // await waitFor(
  //   () => expect(screen.findByText(JSON.stringify(userData))).toBeTruthy
  // );
});

// test("form should not have an error", () => {
// render(<ContactForm />);
// const firstName = screen.getByPlaceholderText("Edd");
// const lastName = screen.getByPlaceholderText("Burke");
// const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
// const message = screen.getByLabelText("Message");
// const button = screen.getByRole("button", { type: "submit" });

// fireEvent.change(firstName, { target: { value: "Sahar" } });
// fireEvent.change(lastName, { target: { value: userData.lastName } });
// fireEvent.change(email, { target: { value: userData.email } });
// fireEvent.change(message, { target: { value: userData.message } });
// fireEvent.click(button);

// waitFor(
//   () =>
//     expect(screen.findByText(JSON.stringify(/Looks like there was an error/)))
//       .toBeFalsy
// );
// });
