import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../components/LandingPage";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <LandingPage /> // Nos fijamos en el componente LandingPage.
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/countries/i);
  expect(linkElement.length).toBe((linkElement.length = 2));
});
