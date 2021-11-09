import styled from "styled-components";

export const Conteiner = styled.div`
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -16rem;

  div {
    background: var(--shape);
    border-radius: 0.4rem;
    padding: 2.4rem 3.2rem;
    color: var(--text-title);

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block; //como o strong se comporta como inline não permite usar margin, por este motivo mudamos para block
      margin-top: 1.6rem;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.8rem;
    }
  }
`;
