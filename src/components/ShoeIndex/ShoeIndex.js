import React from "react";
import styled from "styled-components/macro";

import { RESPONSIVE_BRAKE_POINTS, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <TabletAndAbove>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </TabletAndAbove>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <LaptopAndAbove>
          <Spacer size={42} />
        </LaptopAndAbove>
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const LaptopAndAbove = styled.div`
  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    display: none;
  }
`;

const TabletAndAbove = styled.div`
  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.mobile}) {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    flex-direction: column-reverse;
    flex-basis: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
`;

export default ShoeIndex;
