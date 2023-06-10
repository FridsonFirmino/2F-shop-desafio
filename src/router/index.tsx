import { NavigationContainer } from '@react-navigation/native';
import { StackRouter } from './stackRoutes';

export function Routes(){
    return(
        <NavigationContainer>
            <StackRouter/>
        </NavigationContainer>
    )
}