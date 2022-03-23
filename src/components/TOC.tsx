import { Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom";
import styled from "styled-components";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{
        textDecoration: match ? "underline" : "none",
        backgroundColor: match ? "#e7f2ff" : "transparent",
        color: match ? "#0063dc" : "rgb(77, 77, 77)",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export const TOCTitle = styled(CustomLink)`
  margin-top: 0.7rem;
  margin-bottom: 0.3rem;
  font-family: "Founders Grotesk", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.125;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  padding: 0.25rem;
  border-radius: 4px;
}
`;

export const TOCLink = styled(CustomLink)`
  font-size: 14px;
  padding: 0.25rem;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  transform: translateX(-0.25rem);
  border-radius: 4px;
`;

export const LateralMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
`;
