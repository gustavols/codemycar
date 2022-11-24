import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Main = styled.View`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionErrorFound = styled.View`
    width: 100%;
`;

// CARD STYLES

export const CardList = styled.ScrollView`
    margin-bottom: 150px;
`;

export const Card = styled.View`
    width: 99%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 21px;
    border-radius: 15px;
`;

export const HeaderCard = styled.View`
    background: #FFAC4A;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Code = styled.View`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
`;

export const TitleCode = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-SemiBold";
    color: white;
    padding-left: 24px; 
`;

export const DataCode = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-Light";
    color: white; 
    padding-left: 10px; 
`;

export const Brand = styled.View`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ContentCard = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Model = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #585666;
    height: 100px;
    padding-right: 10px;
`;

export const TitleModel = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-SemiBold";
    color: white; 
    padding-left: 24px; 
`;

export const DataModel = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-Light";
    color: white; 
    padding-left: 24px;
`;
    
export const Found = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #585666;
    height: 100px;

`;

export const TitleFound = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-SemiBold";
    color: white;
    padding-left: 24px; 
`;

export const DataFound = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-Light";
    color: white; 
    padding-left: 24px;
    padding-right: 15px;
`;

export const Solution = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #585666;
    height: 100px;
`;


export const TitleSolution = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-SemiBold";
    color: white; 
    padding-left: 24px;
`;

export const DataSolution = styled.Text`
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    font-family: "Lexend-Light";
    color: white; 
    padding-left: 24px;
    padding-right: 15px;
`;

export const Hr = styled.View`
    width: 100%;
    background: rgba(88,86,102, 0.7);
    height: 1.5px;
`;


export const Delete = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 45px;
`;

export const DeleteArea = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #FF2F2F;
`;

export const EditArea = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #3BCE63;
`;

export const TitleText = styled.Text`
    font-family: 'Lexend-Bold';
    font-style: normal;
    font-size: 22px;
    line-height: 16px;
    color: rgba(88,86,102, 0.7);
    z-index: 1;
`;

// HEADER STYLES
export const HeaderSection = styled.View`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
`;

export const LogoutHeader = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
`;

export const LogoutBackground = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68%;
    height: 62%;
    background: #FFAC4A;
    border-radius: 5px;
`;



export const ContentHeader = styled.View`
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-basis: 80%;
`;

export const TitleHeader = styled.Text`
    font-family: 'Lexend-Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 25px;
    color: #FFAC4A;
`;

export const SubtitleHeader = styled.Text`
    font-family: 'Lexend-Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #FFAC4A;
`;


