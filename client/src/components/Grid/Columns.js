import React from "react";

export const Columns = props => (
  <div className={`columns banner ${props.style} ${props.unique}`}>{props.children}</div>
);
