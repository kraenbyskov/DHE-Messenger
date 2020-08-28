import React from "react";
import Header from "./Container/Header/Header";
import Main from "./Container/Main/Main";
import LeftSidebar from "./Container/LeftSidebar/LeftSidebar";
import RightSidebar from "./Container/RightSidebar/RightSidebar";
import Chat from "./Container/Chat/Chat";

function App() {
  return (
    <Main>
      <Header />
      <LeftSidebar />
      <Chat />
      <RightSidebar />
    </Main>
  );
}

export default App;
