import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  font-size: 1rem;
  width: 5.5em;
  height: 3em;
  border: 0.125em solid ${({ theme: { text } }) => text};
  border-radius: 1.5em;
  margin: 0 auto;
  padding: 0.125em;
  overflow: hidden;
  background: ${({ theme: { body } }) => body};
  cursor: pointer;
  transition: all 0.3s linear;
`;

const Switch = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: ${({ theme: { text } }) => text};
  position: relative;
  transform: ${({ theme: { name } }) =>
    name === "light" ? "translateX(0)" : "translateX(2.5em)"};
  transition: inherit;
`;

const Toggle = ({ onToggle }) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <Switch />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;
