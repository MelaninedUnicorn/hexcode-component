import React from "react";

import { HexaComponentProps } from "./HexaComponent.types";

import "./HexaComponent.scss";

const HexaComponent: React.FC<HexaComponentProps> = ({ colorCode }) => (
  <div
    data-testid="hexa-component"
    className={`hexa-component-container`}
  >
    <h1 className="heading">${colorCode}</h1>
    <h2>This is the color</h2>
  </div>
);

export default HexaComponent;