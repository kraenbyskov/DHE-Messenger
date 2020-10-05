import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header   header header"
    "LeftSidebar   Chat RightSidebar";

  grid-template-rows: var(--Header-Height) var(--Main-Content-Height);
  grid-template-columns: var(--LeftSidebar-Width) var(--Chat-Width) var(
      --RightSidebar-Width
    );
`;

const Content = ({ children }) => {
  return (
    <Container>
      {React.Children.map(children, (child) => {
        return child.props
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                key: child.props.name,
              },
            })
          : child;
      })}
    </Container>
  );
};

export default Content;
