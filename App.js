import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SecondScreen from "./src/screens/SecondScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SecondScreen: SecondScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
