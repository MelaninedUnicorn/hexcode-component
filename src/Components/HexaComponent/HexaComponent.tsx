import React from "react";

import { HexaComponentProps } from "./HexaComponent.types";

import "./HexaComponent.scss";

const HexaComponent: React.FC<HexaComponentProps> = ({ colorCode }) => (
  <div
    data-testid="hexa-component"
    className={`hexa-component-container`}
    style={{backgroundColor:colorCode}}
  >
    <p>{colorCode}</p>
  </div>
);

export default HexaComponent;