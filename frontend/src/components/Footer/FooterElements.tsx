import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 3rem;
  }
`;
