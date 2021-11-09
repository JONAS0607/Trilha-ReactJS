import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;

  margin: auto;
  padding: 3.2rem 1.6rem 19.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border: 1px solid #fff; */

  button {
    font-size: 1.6rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 3.2rem;
    border-radius: 0.4rem;
    height: 4.8rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    } 
  }
`;
