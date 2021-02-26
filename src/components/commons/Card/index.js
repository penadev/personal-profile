import styled from 'styled-components';
// import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 350px;
    min-height: 300px;
    max-height: 300px;
    margin: 15px;
    background: ${({ theme }) => theme.colors.cards.bgcolor};
    color: ${({ theme }) => theme.colors.cards.color};;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16x;
    border-radius: 0px 24px;
`;

Card.Image = styled.div`
    background: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 350px;
    min-height: 220px;
    max-height: 250px;
    border-radius: 0px 24px 0px 0px;
`;

Card.Others = styled.img`
    max-height: 30px;
    max-width: 30px;
    margin-left: auto;
    padding-right: 5px;
    padding-bottom: 5px;
    cursor: pointer;
`;

Card.Skill = styled.div`
    display: flex;
    min-height: 30px;
    max-width: 80px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 5px;
    margin-top: 5px;
    background: ${({ theme }) => theme.colors.cards.secondary.bgcolor};
    color: ${({ theme }) => theme.colors.cards.secondary.color};
    border-radius: 40px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.66);
`;

export default Card;
