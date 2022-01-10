import React from "react";

import { HexaComponentProps } from "./HexaComponent.types";

import "./HexaComponent.scss";

const HexaComponent: React.FC<HexaComponentProps> = ({ colorCode }) => (
  <div
    data-testid="hexa-component"
    className={`hexa-component`}
  >
    <h1 className="heading">${colorCode}</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default HexaComponent;