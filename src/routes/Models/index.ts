import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Login: undefined
    Main: undefined
    SearchError: undefined
}

export type BottomTabParamList = {
    Home: undefined;
    Perfil: undefined;
  };
 
export type propsStack = NativeStackNavigationProp<propsNavigationStack>