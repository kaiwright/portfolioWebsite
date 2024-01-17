import React from "react";


function Container(props) {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    ...props.style
  };

  return <div className="container-fluid" style={containerStyle}>{props.children}</div>;
}

export default Container;
