import styled from 'styled-components';

export const Input = styled.input`
    padding: 1em 0;
    color: white;
    background: #34495E;
    border: none;
    border-radius: .4em .4em 0 0;
    width: 80%;
    margin: 0px auto;
    text-align: center;
    font-size: 1em;
    outline: none;

    &::placeholder { 
        color: white;
        opacity: 1; 
      }
`;