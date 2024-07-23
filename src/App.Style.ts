import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
    max-width:500px;
    min-width:300px;
    margin: 0 auto;
    user-select: none;

    @media screen and (max-width: 450px) {
        min-width: 340px;
    }

`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`    

export const Header = styled(Flex)`

    justify-content: space-between;
    color: var(--white-text);
    font-size: 1.2rem;

`

export const WrapperSwitch = styled(Flex)`

    width:115px;
    font-size: 0.85rem;
    align-items: flex-end;
    justify-content: space-between;
`

export const Switch = styled.div`
    font-size: 0.9rem;
    flex: 0.75;
    justify-content: center;
    align-items: center;

    div:first-of-type{
        width: 100%;
    }

`    