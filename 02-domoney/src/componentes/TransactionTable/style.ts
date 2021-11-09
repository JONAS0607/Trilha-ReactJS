import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  margin-top: 6.4rem;
  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
      line-height: 2.4rem;
    }

    td {
      padding: 1.6rem 3.2rem;
      background: var(--shape);
      border: 0;
      color: var(--text-body);
      border-radius: 0.4rem;
      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
