import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import EnterOTP from '../screens/EnterOTP';
import ForgetPassword from '../screens/ForgetPassword';
import ResetPassword from '../screens/ResetPassword';
import React from 'react';
import * as Icons from 'react-native-heroicons/solid';
const Stack = createStackNavigator();
import COLOR from '../contains/pallete';

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignUp'}
        component={SignUp}
        // options={{headerShown: false}}
        options={{
          title: '',
          headerShown: false,
          headerBackTitleVisible: false,
          headerBackImage: () => <Icons.ChevronLeftIcon />,
        }}
      />
      <Stack.Screen name={'EnterOTP'} component={EnterOTP} />
      <Stack.Screen name={'ForgetPassword'} component={ForgetPassword} />
      <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
