export const colors = {
  backgroundDark: "hsl(0, 0%, 26%)",
  backgroundLight: "hsl(0, 0%, 86%)",
  backgroundFocus: "hsl(0, 0%, 90%)",
  textLight: "hsl(0, 0%, 100%)",
  textLightShade: "hsl(0, 0%, 90%)",
  textDark: "hsl(0, 0%, 20%)",
  textDarkShade: "hsl(0, 0%, 25%)",
  primary: "hsl(214, 94%, 63%)",
};

export const spacingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem",
};

export const fractions = {
  "1/5": "1fr 5fr",
  "1/1": "1fr 1fr",
  "1/4": "1fr 4fr",
  "4/2": "4fr 2fr",
  "1/3": "1fr 3fr",
  "1/2": "1fr 2fr",
  "2/3": "2fr 3fr",
  "3/4": "3fr 4fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const stretchMap = {
  all: `> * { flex: 1}`,
  start: `> :first-child { flex: 1}`,
  end: `> :last-child { flex: 1}`,
};
