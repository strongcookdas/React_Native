import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
