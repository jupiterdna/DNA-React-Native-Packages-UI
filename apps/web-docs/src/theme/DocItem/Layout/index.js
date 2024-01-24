import React, { createContext, useContext } from "react";
import Layout from "@theme-original/DocItem/Layout";
import styled from "styled-components";
import { context } from "../../../context";

const LayoutWrapper = (props) => {
  const cont = useContext(context);

  return (
    <StyledDiv
      data-open ={cont?.state?.open}
    >
      <Layout {...props} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
    .col.col--3{
      --ifm-col-width: ${p => !p['data-open']  ? 'calc(3 / 12 * 100%)' : '60%'};
    }
`;

export default LayoutWrapper;
