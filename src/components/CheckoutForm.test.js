import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const nameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const cityInput = screen.getByLabelText(/City/i);
  const stateInput = screen.getByLabelText(/State/i);
  const zipInput = screen.getByLabelText(/Zip/i);

  userEvent.type(nameInput, "Sayo");
  userEvent.type(lastNameInput, "lovingfoss");
  userEvent.type(addressInput, "6611 East Mayo Blvd.");
  userEvent.type(cityInput, "Phoenix");
  userEvent.type(stateInput, "Arizona");
  userEvent.type(zipInput, "85054");
  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  const successMsg = screen.getByTestId("successMessage");
  expect(successMsg).toBeInTheDocument();

  //   await waitFor(() => {
  // let successName = screen.getByText(/Sayo/i);
  //       let successName = screen.getByText(/lovingfoss/i);
  //       let successName = screen.getByText(/6611 East Mayo Blvd./i);
  //       let successName = screen.getByText(/Phoenix/i);
  //       let successName = screen.getByText(/Arizona/i);
  //       let successName = screen.getByText(/85054/i);
  //   });
});
