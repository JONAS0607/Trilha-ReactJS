import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 2.4rem;
    color: var(--text-title);
    margin-bottom: 3.2rem;
  }
  input {
    width: 100%;
    padding: 0 2rem;
    height: 6.4rem;
    border-radius: 0.4rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.6rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    background: var(--green);
    color: #fff;
    height: 6.4rem;
    padding: 0 2rem;
    margin-top: 2.4rem;
    border: 0;
    font-size: 1.6rem;
    font-weight: 600;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const TransactionTypeContainer = styled.div`
  display: grid;
  gap: 0.8rem;
  margin: 1.6rem 0;
  grid-template-columns: 1fr 1fr;

  button {
  }
`;
interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}
const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};
export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  border: 1px solid #d7d7d7;
  border-radius: 0.4rem;
  height: 6.4rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; */
  transition: border-color(0.2s);
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  span {
    display: inline-block;
    font-size: 1.6rem;
    color: var(--text-title);
    margin-left: 1.6rem;
  }
`;
