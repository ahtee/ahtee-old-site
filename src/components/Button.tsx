import React from 'react';

interface ButtonProps {
  title: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps) {
  return <button onClick={props.onClickHandler}>{props.title}</button>;
}
export default Button;
