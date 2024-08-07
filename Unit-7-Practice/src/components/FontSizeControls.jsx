import React from "react";

const FontSizeControl = ({ increaseFontSize, decreaseFontSize }) => (
    <div>
        <button onClick={decreaseFontSize}>-</button>
        <button onClick={increaseFontSize}>+</button>
    </div>
);

export default FontSizeControl;