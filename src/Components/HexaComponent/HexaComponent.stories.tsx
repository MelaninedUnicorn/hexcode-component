import React from "react";
import HexaComponent from './HexaComponent';
import { getRandomValue } from '../../Utils/hexadecimal/hexadecimal';

export default {
  title: "HexaComponent"
};

export const Pink = () => <HexaComponent colorCode="#ff8da1" />;

export const Blue = () => <HexaComponent colorCode="#4666d0" />;

export const Random = () => <HexaComponent colorCode={getRandomValue()} />;

