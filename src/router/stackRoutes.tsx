import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../components/screens/Login'
import { Home } from '../components/screens/Home'
import { Create_Account } from '../components/screens/Create_Account'
import { Details } from '../components/screens/Details'
import { CartShop } from '../components/screens/CartShop'

const { Screen, Navigator} = createNativeStackNavigator();

export function StackRouter(){
    return(
        <Navigator> 
            <Screen
                name = "login"
                component={Login}
                options={{headerShown:false}}
            />

            <Screen
                name = "home"
                component={Home}
                options={{headerShown:false}}
            />
            <Screen
                name = "create_account"
                component={Create_Account}
                options={{headerShown:false}}
            />
            <Screen
                name = "details"
                component={Details}
                options={{headerShown:false}}
            />
            <Screen
                name = "cartShop"
                component={CartShop}
                options={{
                    title: 'Shopping Cart',
                    headerStyle: { 
                        backgroundColor: '#5700AF',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontFamily: 'Roboto_500Medium',
                        fontSize: 24,
                      },
                }}
            />
        </Navigator>
    )
}