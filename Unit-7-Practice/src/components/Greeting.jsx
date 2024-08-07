import React from "react";

const Greeting = ({ greeting, fontSize }) =>
    <h1 style={{ fontSize: `${fontSize}px` }}>{greeting}</h1>;

export default Greeting;