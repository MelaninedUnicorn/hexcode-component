import React from "react";
import { render } from "@testing-library/react";

import HexaComponent from "./HexaComponent";
import { HexaComponentProps } from "./HexaComponent.types";

describe("Hexa Component", () => {
  let props: HexaComponentProps;

  beforeEach(() => {
    props = {
      colorCode: "#ff8da1"
    };
  });

  const renderComponent = () => render(<HexaComponent {...props} />);

  it("should have the hexa-component container class", () => {
    const { getByTestId } = renderComponent();

    const hexaComponent = getByTestId("hexa-component"); 

    expect(hexaComponent).toHaveClass("hexa-component-container");
  });

  it("should have the background color set to the colorCode prop", () => {
    props.colorCode = "#ff8da1";
    const { getByTestId } = renderComponent();

    const hexaComponent = getByTestId("hexa-component");

    expect(hexaComponent).toHaveStyle(`background-color: #ff8da1`);;
  });
});