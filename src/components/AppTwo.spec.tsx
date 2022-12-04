import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import AppTwo from "./AppTwo";

afterEach(cleanup);

it("Render AppTwo component correctly", () => {
  render(<AppTwo />);
  const testMsg = "Strategfy Web App # MFE 2";
  expect(screen.queryByText(testMsg)).toHaveLength(1);
});
