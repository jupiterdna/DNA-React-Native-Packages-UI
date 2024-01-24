import React, { useContext, useState } from "react";
import Layout from "@theme-original/DocRoot/Layout";
import LayoutContainer from "@site/src/components/LayoutContainer";
import styled from "styled-components";
import LayoutInner from "@site/src/components/LayoutInner";


const LayoutWrapper = (props) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <LayoutContainer>
        <StyledContainer data-open={open}>
          <LayoutInner onRender={(evt) => {
            setOpen(evt)
          }}>
             <Layout {...props} />
          </LayoutInner>
        </StyledContainer>
      </LayoutContainer>
    </>
  );
};

const StyledContainer = styled.div`
  @media (min-width: 1440px) {
    .container {
        max-width: ${p => p['data-open'] ? '100%' : 'var(--ifm-container-width-xl)'};
    }
  }
 
 
`;

export default LayoutWrapper;
