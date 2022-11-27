import type { FC } from "react";
import { trainSubway, PrimaryH1, ubuntu } from "@graaphs/design-system";
import { ThemeProvider } from "styled-components";

const Page: FC = () => (
    <div className={ubuntu.className}>
      <ThemeProvider theme={{}}>
        <PrimaryH1>{header}</PrimaryH1>
        <svg
          viewBox={trainSubway.viewBox}
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={trainSubway.d} />
        </svg>
      </ThemeProvider>
    </div>
  ),
  header = "Zażółć gęślą jaźń";

export default Page;
