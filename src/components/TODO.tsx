import styled from "styled-components";

export function TODO({ children }: { children?: string }) {
  return <Wrapper>{children ? `TODO: ${children}` : "TODO"}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: red;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10px 0;
`;
