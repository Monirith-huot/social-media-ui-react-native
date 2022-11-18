import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import HomepageTab from './HomepageNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomepageTab" component={HomepageTab} />
      <Drawer.Screen name="Article" component={Setting} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
