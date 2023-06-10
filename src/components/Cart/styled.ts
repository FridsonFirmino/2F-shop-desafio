import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 3px;
    padding: 10px;
    width: 100%;
    height: 110px;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: center;
`;

export const InfoArea = styled.View`
    width: 80%;
    height: 100px;
    background-color: #F7F5F7;
    flex-direction: row;
`;

export const ImageProdArea = styled.View`
    width: 90px;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #F7F5F7;
`;

export const ImageProd = styled.Image`
    width: 90px;
    height: 100%;
`;

export const DescriptionArea = styled.View`
    padding: 5px;
    justify-content: center;
`;

export const NameProd = styled.Text`
    font-size: 17px;
    font-family: 'Roboto_500Medium';
`;

export const PriceProd = styled.Text`
    font-size: 14px;
    color: #a3a0a0;
`;

export const TotalArea = styled.View`
    width: 80px;
    height: 24%;
    border-radius: 50px;
    border: solid #a3a0a0 1px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SubArea = styled.TouchableOpacity`
    width: 20px;
    height: 100%;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    justify-content: center;
    padding-left: 7px;
    padding-right: 5px;
`;

export const Amount = styled.Text`
    padding-left: 7px;
    padding-right: 7px;
    text-align: center;
    justify-content: center;
    font-size: 12px;
`;

export const SumArea = styled.TouchableOpacity`
    width: 20px;
    height: 100%;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    padding-right: 5px;
    padding-left: 5px;
    justify-content: center;
`;

export const DeleteArea = styled.TouchableOpacity`
    flex: 1;
    height: 100px;
    background-color: #F7F5F7;
    align-items: center;
    justify-content: center;
`;



