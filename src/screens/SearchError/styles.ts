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

export const SectionSearchError = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const ViewSearchError = styled.View`
    flex-basis: 90%;
`;

export const InputSearchError = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255, 255, 255, 0.5)"
  })`
    width: 95%;
    height: 50px;
    background: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-family: "Lexend-SemiBold";
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    font-size: 17px;
`;


export const ViewFilterSearch = styled.View`
    flex-basis: 10%;
`;

export const FilterSearch = styled.TouchableOpacity`
    
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: #585666;
    height: 50px;
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
    padding-left: 10px;
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


export const Delete = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FF2F2F;
    height: 40px;
`;


