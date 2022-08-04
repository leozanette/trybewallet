import React from "react";
import App from "../App";
import { screen } from "@testing-library/react";
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import userEvent from "@testing-library/user-event";

describe('testando componente Login', () => {
  it('renderiza input de e-mail', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputEmail2 = screen.getByRole('textbox', {name: 'email'})

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail2).toBeInTheDocument();

    const password = screen.getByTestId('password-input')
    expect(password).toBeInTheDocument();

    userEvent.type(inputEmail, 'trybe@trybe.com')
    userEvent.type(password, '147258')

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();

    userEvent.click(button)
    expect(button).not.toBeInTheDocument();
  })
})