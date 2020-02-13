import { createStackNavigator } from '@react-navigation/stack';

// Import Components and Screens

import AddressForm from '../screens/AddressForm';
import RepsScreen from '../screens/RepsScreen';

const FindRepsNavigator = createStackNavigator({
    AddressForm: AddressForm,
    RepsScreen: RepsScreen
});

export default createAppContainer(FindRepsNavigator);