import React from "react";
import { useState } from "react";

// const [listInput, setListInput] = useState("");

interface Props {
  y: number;
  x: number;
  width: number;
  height: number;
  handleInput: () => void;
}

function ListInput({ x, y, width, height, handleInput }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="button-container"
      style={{
        top: y + "px",
        left: x + "px",
        width: width + "px",
        height: height + "px",
        fontSize: 0.75 * height + "px",
      }}
    >
      <input
        className="list-input"
        placeholder="'()"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          handleInput();
        }}
      />
    </div>
  );
}

ListInput.defaultProps = {
  width: 200,
  height: 20,
  x: 0,
  y: 0,
};

export default ListInput;
