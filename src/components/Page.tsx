import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <PageStructure>
      <div>{children}</div>
      <div>
        <Outlet />
      </div>
    </PageStructure>
  );
}

const PageStructure = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
`;
