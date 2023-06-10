import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const DetailsCartArea = styled.View`
    width: 100%;
    height: 190px;
    align-items: center;
    justify-content: center;
`;

export const DetailsCart = styled.View`
    width: 95%;
    height: 95%;
    margin: 10px;
`;

export const CartValues = styled.View`
    width: 100%;
    height: 30px;
    margin-bottom: 1px;
    flex-direction: row;
    align-items: center;
`

export const SubTotal = styled.Text`
    color: #a3a0a0;
    font-size: 15px;
`;

export const SubTotalValue = styled.Text`
    color: #a3a0a0;
    position: absolute;
    right: 0;
    font-size: 15px;
`;

export const Shipping = styled.Text`
    color: #a3a0a0;
    font-size: 15px;
`;

export const ShippingValue = styled.Text`
    color: #a3a0a0;
    position: absolute;
    right: 0;
    font-size: 15px;
`;

export const Total = styled.Text`
    color: #a3a0a0;
    font-size: 18px;
`;

export const TotalValue = styled.Text`
    color: #a3a0a0;
    position: absolute;
    right: 0;
    font-size: 18px;
`;