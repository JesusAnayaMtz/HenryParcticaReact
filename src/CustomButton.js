import styles, { styled } from "styled-components"

export const CustomButton = styled.button`
    color: black;
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border-radius: 1rem;

    &:hover {
    color: white;
    background-color: black;
    }
`