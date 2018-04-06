import React from "react";

export const Columns = props => (
  <div className={`columns ${props.style} ${props.unique}`}>{props.children}</div>
);
