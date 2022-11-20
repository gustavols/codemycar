import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Welcome: undefined,
    Login: undefined
    Main: undefined
    SearchError: undefined
    Register: undefined
    Home: undefined
    Perfil: undefined
    CreateError: undefined
    EditError: undefined
}

export type BottomTabParamList = {
    Home: undefined;
    CreateError: undefined;
    Perfil: undefined;
  };
 
export type propsStack = NativeStackNavigationProp<propsNavigationStack>