import React from "react";
import { render, screen } from "@testing-library/react";
import AppTwo from "./AppTwo";

it("Render AppTwo component correctly", () => {
  render(<AppTwo />);
  const testMsg = "Strategfy Web App # MFE 2";
  expect(screen.queryByText(testMsg)).toHaveLength(1);
});
