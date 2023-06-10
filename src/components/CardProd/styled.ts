import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
    width: 46%;
    height: 240px;
    border-radius: 10px;
    background-color: #FFF;
    margin: 8px;
`;
export const ImageProd = styled.Image`
    width: 170px;
    height: 170px;
    align-self: center;
`;
export const ImageProdArea = styled.View`
    width: 100%;
    height: 170px;
    background-color: #F7F5F7;
`;
export const NameProd = styled.Text`
    font-size: 20px;
    font-family: 'Roboto_500Medium';
    margin: 4px;
`;

export const DescriptionProdArea = styled.View`
    align-items: center;
`;

export const Price = styled.Text`
    font-family: 'Roboto_500Medium';
    color: #a3a0a0;
`;
   