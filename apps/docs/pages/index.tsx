import type { FC } from "react";
import { fontFamily, PrimaryH1 } from "@graaphs/design-system";
import { ThemeProvider } from "styled-components";

const Page: FC = () => (
    <div className={fontFamily.className}>
      <ThemeProvider theme={{}}>
        <PrimaryH1>{header}</PrimaryH1>
      </ThemeProvider>
    </div>
  ),
  header = "Zażółć gęślą jaźń";

export default Page;
