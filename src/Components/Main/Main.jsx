import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: auto;
`;

const Main = ({ children, signOut, user, signInWithGoogle }) => {
  return (
    <MainContainer>
      {React.Children.map(children, (child) => {
        return child.props
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                key: child.props.name,
                signOut: signOut,
                user: user,
                signInWithGoogle: signInWithGoogle,
              },
            })
          : child;
      })}
    </MainContainer>
  );
};

export default Main;
