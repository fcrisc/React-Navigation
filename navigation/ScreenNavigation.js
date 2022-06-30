import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import ClassComponent from '../screens/ClassScreen';
import FunctionalComponent from '../screens/FunctionalScreen';

const ScreenNavigation = createStackNavigator({

    FunctionalScreen: FunctionalComponent,
    ClassScreen: ClassComponent
    

});

export default createAppContainer(ScreenNavigation);