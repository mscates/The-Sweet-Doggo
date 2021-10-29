import styled, { css } from "styled-components/macro";
import { spacingMap, fractions, justifyAlignMap, stretchMap } from "./constants";
import dog from "../images/dogs-2.jpg";

export const Hidden = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const PageWrapper = styled.div`
  background-color: hsl(0, 0%, 86%);
  height: 100vh;
  display: grid;
  padding: 0 20px;
`;

export const AuthWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

export const landingStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${dog})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const LandingSplit = styled.div`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : "none")};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Stack = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
`;

export const Split = styled.div`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : "none")};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};
`;

export const Columns = styled.div`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${({ gutter }) => spacingMap[gutter] ?? spacingMap.lg};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

export const Column = styled.div`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ gutter }) => spacingMap[gutter] ?? spacingMap.lg};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${({ minItemWidth }) => minItemWidth ?? "320px"}, 100%), 1fr)
  );
`;

export const InLineCluster = styled.div`
  --gutter: ${({ gutter }) => spacingMap[gutter] ?? spacingMap.lg};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);
  justify-content: ${({ justify }) =>
    justifyAlignMap[justify] ?? justifyAlignMap.start};
  align-items: ${({ align }) =>
    justifyAlignMap[align] ?? justifyAlignMap.start};
`;

export const InLine = styled(InLineCluster)`
  flex-wrap: nowrap;
  ${({ stretch }) => {
    if (typeof stretch === "number")
      return `> :nth-child(${stretch + 1}) { flex: 1}`;

    return stretchMap[stretch] ?? "";
  }}
  ${({ switchAt }) => switchAt && responsive};
`;

const responsive = css`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

export const PadBox = styled.div`
  padding: ${({ padding }) => {
    return []
      .concat(padding)
      .map((padKey) => spacingMap[padKey])
      .join(" ");
  }};
`;

export const StyledPadBox = styled(PadBox).attrs(() => ({
  as: "section",
  padding: "lg",
}))`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Center = styled.div`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;

  max-inline-size: ${({ maxWidth }) => maxWidth};
  ${({ centerText }) => centerText && "text-align: center;"}
  ${({ centerChildren }) =>
    centerChildren &&
    `
display: flex;
flex-direction: column;
align-items: center;
`}
`;

export const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: ["none", "sm"],
  maxWidth: "85rem",
}))`
  font-family: sans-serif;
`;

export const Frame = styled.div`
  position: relative;

  --n: ${({ ratio }) => (ratio ? ratio[0] : 1)};
  --d: ${({ ratio }) => (ratio ? ratio[1] : 1)};

  ${({ ratio }) =>
    ratio &&
    `
aspect-ratio: var(--n) / var(--d);
@supports not (aspect-ratio: 1/1) {
  padding-bottom: calc(var(--d) / var(--n) * 100%);
}
`}

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const Cover = styled.div.attrs(({ children, top, bottom }) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})`
  display: grid;
  gap: ${({ gutter }) => gutter ?? spacingMap.lg};
  min-block-size: ${({ minHeight }) => minHeight ?? "100vh"};

  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;

export const FormStyle = styled.form`
display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
`