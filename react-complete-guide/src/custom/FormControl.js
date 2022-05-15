import styled from "styled-components";

const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    width: 20rem;
    max-width: 100%;
    background-color: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
  }
`;

export default FormControl;
