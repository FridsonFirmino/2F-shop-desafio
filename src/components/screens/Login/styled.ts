import styled from 'styled-components/native';


export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFEFF;
`;

export const InputArea = styled.View`
    width: 80%;
    justify-content: center;
    align-items: center;
    background-color: #FFFEFF;
`;

export const LoginTitle = styled.Text`
    font-size: 30px;
    color: #5700AF;
    margin-top: 20px;
    font-family: 'Roboto_500Medium';
`;

export const LoginDescription = styled.Text`
    font-size: 14px;
    margin-bottom: 40px;
    color: #CAC8D6;
    font-family: 'Roboto_400Regular';
`;

export const InputEmail = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #F1EBFF;
    border-radius: 5px;
    color: #706D6F;
    font-size: 16px;
    font-family: 'Roboto_400Regular';

`;

export const InputPassword = styled.TextInput`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    padding: 10px;
    background-color: #F1EBFF;
    border-radius: 5px;
    color: #706D6F;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
`; 

export const DontAccountArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px;
    gap: 2px;
`;

export const InfoRegister = styled.Text`
    color: #706D6F;
`;

export const RegisterArea = styled.TouchableOpacity`
    background-color: '#FFF';
    align-items: center;
`;


export const Register = styled.Text`
    color: #2C04BF;
`;
