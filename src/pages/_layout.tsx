import React, { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import { getClient } from "../queryClient";
import styled from "styled-components";
import Gnb from "../components/gnb";

const Wrapper = styled.div`
  list-style: none;
  margin: 0;
`
const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'loading...'}>
        <Wrapper>
          <Gnb />
          <Outlet />
        </Wrapper>
      </Suspense>
    </QueryClientProvider>
  )
}
export default Layout;
