import React from "react";
import styled from "styled-components/macro";
import { RESPONSIVE_BRAKE_POINTS } from "../../constants";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    padding: 32px 16px;
  }
  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.mobile}) {
    padding: 32px 8px;
  }
`;

export default App;
