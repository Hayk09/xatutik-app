import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const typography = {
  letterSpacings: {
    xs: "-0.05em",
    sm: "-0.025em",
    md: 0,
    lg: "0.025em",
    xl: "0.05em",
    "2xl": "0.1em",
  },
  lineHeights: {
    "2xs": "1em",
    xs: "1.125em",
    sm: "1.25em",
    md: "1.375em",
    lg: "1.5em",
    xl: "1.75em",
    "2xl": "2em",
    "3xl": "2.5em",
    "4xl": "3em",
    "5xl": "4em",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extrablack: 950,
  },
  fonts: {
    heading: undefined,
    body: undefined,
    mono: undefined,
  },
  fontSizes: {
    "2xs": 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  },
};

const opacity = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1,
};

export const COLORS = {
  // base colors
  primary: "#38B8E0",
  secondary: "#F1FAFD",

  // colors
  black: "#1E1F20",
  black2: "#1C1C1E",
  white: "#FFFFFF",

  gray: "#787880",
  red: "#D64641",
  redError: "##FF000099",
  green: "#55B468",
  blue: "#007AFF",
  placeholder: "#ACACB7",

  ligthRed: "#FBEDEC",
  lightRed2: "#FAE9E8",
  lightGray: "#EAECEE",
  lightGray2: "#F0F2F4",
  lightGray3: "#F8F8F8",
  lightGray4: "#F5F7F8",
  lightGray5: "#77767E",
  lightGray6: "#EBEDEF",
  lightGray7: "#A4A9AE",
  ligthGreen: "#EAFAEE",
  ligthBlue: "#E6F6FB",
  transparent: "transparent",
  darkgray: "#898C95",
  darkGray2: "#435155",
  brown: "#301F05",
};

export const SIZES = {
  // global sizes
  radius: 8,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 25,
  h2: 20,
  h3: 17,
  h4: 15,
  h5: 11,
  body1: 15,
  body2: 14,
  body3: 12,
  body4: 11,
  body5: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: {
    fontFamily: "SFProDisplay-Black",
    fontSize: SIZES.h1,
    lineHeight: 29.83,
  },
  h2: { fontFamily: "SFProDisplay-Black", fontSize: SIZES.h2, lineHeight: 22 },
  h3: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: SIZES.h3,
    lineHeight: 20.29,
  },
  h4: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: SIZES.h4,
    lineHeight: 17.9,
  },

  body1: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body1,
    lineHeight: 17.9,
  },
  body2: { fontSize: SIZES.body2, lineHeight: 30 },
  body3: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body3,
    lineHeight: 16,
  },
  body4: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body4,
    lineHeight: 13,
  },
  body5: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body5,
    lineHeight: 16,
  },
  body6: {
    fontFamily: "SFProDisplay-Medium",
    fontSize: SIZES.body4,
    lineHeight: 14,
  },
  body7: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h5,
    lineHeight: 16,
  },
  body8: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body2 - 1,
    lineHeight: 18,
  },
  body9: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  body10: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: SIZES.h4,
    lineHeight: 17.9,
  },
  body11: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body3,
    lineHeight: 14,
  },
  body12: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h2 + 3,
    lineHeight: 27,
  },
  body13: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h2 - 2,
    lineHeight: 22.67,
  },
  body14: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h2,
    lineHeight: 18.84,
  },
  body15: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h3,
    lineHeight: 21.41,
  },
  body16: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: SIZES.h2,
    lineHeight: 25,
  },
  body17: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h2,
    lineHeight: 25,
  },
  body18: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: SIZES.h2,
    lineHeight: 25,
  },
  body19: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: SIZES.body3,
    lineHeight: 14,
  },
};

// const appTheme = { COLORS, SIZES, FONTS };

// export default appTheme;
