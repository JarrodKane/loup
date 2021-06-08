import React from "react";

import { Page } from "./styles";

interface Props {}

// I do want children so just decided to use a RECT.FC to get them quickly
const Layout: React.FC<Props> = ({}) => {
  return (
    <Page>
      <main>asd</main>
    </Page>
  );
};

export default Layout;
