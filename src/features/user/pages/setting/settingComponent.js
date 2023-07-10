import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 13vh;
  min-height: 95vh;
  margin: 1rem 0 0rem 25rem;
  @media only screen and (max-width: 768px) {
    margin: 0.4rem;
    width: 100vw;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export const Label = styled.label`
  margin-top: ${(props) => props.name && "1rem"};
  font-size: 1.2rem;
  margin-left: -12rem;
`;

export const InputField = styled.input`
  padding: 0.5rem 1rem;
  width: 46%;
  border-radius: 2px;
  margin: 0.2rem 0 1rem 0;
`;

export const BioInput = styled.textarea`
  margin: 0.2rem 0 1rem 0;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const EditBtn = styled.label`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
  background-color: var(--color-light);
  border: none;
  border-radius: 50%;
  padding: 0.3rem;
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
