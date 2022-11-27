import styled from "styled-components";
import localFont from "@next/font/local";
import { primary } from "./color";

export const PrimaryH1 = styled.h1`
  color: ${primary};
`;

// eslint-disable-next-line one-var
export const ubuntu = localFont({
  src: [
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-B.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-BI.ttf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-L.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-LI.ttf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-M.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-MI.ttf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-R.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-RI.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-Th.ttf",
      style: "normal",
      weight: "100",
    },
  ],
});
// eslint-disable-next-line one-var
export const ubuntuCondensed = localFont({
  src: [
    {
      path: "./ubuntu-font-family-0.83/Ubuntu-C.ttf",
      style: "normal",
      weight: "400",
    },
  ],
});
// eslint-disable-next-line one-var
export const ubuntuMonospace = localFont({
  src: [
    {
      path: "./ubuntu-font-family-0.83/UbuntuMono-B.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./ubuntu-font-family-0.83/UbuntuMono-BI.ttf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./ubuntu-font-family-0.83/UbuntuMono-R.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./ubuntu-font-family-0.83/UbuntuMono-RI.ttf",
      style: "italic",
      weight: "400",
    },
  ],
});
