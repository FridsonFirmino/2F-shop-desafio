import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFF;
`;

export const AppHeader = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 8%;
    align-items: center;
`;

export const TitleApp = styled.Text`
    font-size: 28px;
    color: #5700AF;
    font-family: 'Roboto_700Bold';
`;

export const CartButton = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    margin-right: 4%;
    align-self: center;
    border-radius: 60px;
    align-items: center;
    justify-content: center;
`;

export const ProdArea = styled.View`
    flex: 1;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #FFF;
`;

export const SearchInputArea = styled.View`
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 50px;
    margin: 20px;
    border-radius: 50px;
    background-color: #F1EBFF;
`;

export const SearchInput = styled.TextInput`
    width: 80%;
    height: 50px;
    padding: 15px;
    border-radius: 50px;
    margin: 10px;
    color: #706D6F;
    font-size: 16px;
    background-color: #F1EBFF;
    font-family: 'Roboto_400Regular';
`;

export const ProdItemArea = styled.SafeAreaView`
    flex: 1;
    width: 100%;
`;

export const HeaderItemArea = styled.View`
    flex-direction: row;
    margin: 3%;
`;

export const ItemAreaTitle = styled.View`
    flex-direction: row;
    gap: 5px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
`;

export const TotalItems = styled.Text`
    font-size: 11px;
    margin-top: 5px;
    font-family: 'Roboto_400Regular';
`;

export const FilterItems = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    align-self: center;
`;

export const ProdItemList = styled.FlatList`
    margin: 1%;
`;








