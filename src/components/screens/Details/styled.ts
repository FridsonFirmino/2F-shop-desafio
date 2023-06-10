import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const ItemImageArea = styled.View`
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
    background-color: #F7F5F7;
`;

export const HeaderDetails = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 8%;
    align-items: center;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    margin-left: 2%;
    align-items: center;
    border-radius: 60px;
    width: 25px;
    height: 35px;
    justify-content: center;
    
`;

export const IconButtonCart = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    margin-right: 4%;
    align-self: center;
    border-radius: 60px;
    align-items: center;
    justify-content: center;
`;

export const ItemImage = styled.Image`
    width: 100%;
    height: 80%;
`;

export const ItemInfoArea = styled.ScrollView`
    height: 100%;
    margin-top: 5%;
    margin-left: 4%;
    margin-right: 4%;
`;

export const ItemName = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_700Bold';
`;

export const ItemPrice = styled.Text`
    margin-top: 3px;
    font-size: 20px;
    font-family: 'Roboto_500Medium';
    color: #C4C4C4;
`;

export const DescriptionTitle = styled.Text`
    font-size: 18px;
    font-family: 'Roboto_700Bold';
    margin-top: 5%;
`;

export const Description = styled.Text`
    margin-top: 3%;
    font-family: 'Roboto_400Regular';
    font-size: 16px;
    color: #7A7A7A;
`;

export const ButtonAddCart = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #5700AF;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
`;

export const ButtonAddCartName = styled.Text`
    font-size: 18px;
    font-family: 'Roboto_500Medium';
    color: #FFF;
`;




