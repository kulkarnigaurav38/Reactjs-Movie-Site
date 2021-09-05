import React from "react";
import PropTypes from "prop-types";
//styles
import { Wrapper, Image } from "./Actor.styles";
const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>Name: {name}</h3>
    <p>Character: {character}</p>
  </Wrapper>
);
Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Actor;
