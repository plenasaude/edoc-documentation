import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <PageStructure>
      <Scrollable>{children}</Scrollable>
      <Scrollable>
        <Outlet />
      </Scrollable>
    </PageStructure>
  );
}

const PageStructure = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  height: 100%;
`;

const Scrollable = styled.div`
  height: 100%;
  overflow-x: auto;
`;
