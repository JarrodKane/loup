import React from "react";

import { PageTemplate } from "./styles";

interface Props {}

// I do want children so just decided to use a RECT.FC to get them quickly
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <PageTemplate>
      <div>{children}</div>
    </PageTemplate>
  );
};

export default Layout;
