import React from "react";
// Using react-navigation version 5
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesNavigator from "./FavoritesNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../screens/CatagoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
// Stack navigator
const Stack = createStackNavigator();

// Create the Meals Navigator
const MealsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Catagories"
            component={CatagoriesScreen}
            options={{
                title: "Catagories",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
        <Stack.Screen
            name="CatagoryMeals"
            component={CatagoryMealsScreen}
            options={{
                title: "Catagory Meals",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
        <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
                title: "Meal Details",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
    </Stack.Navigator>
);

// Bottom tab navigator (using material bottom navigator)
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            activeColor="white"
            inactiveColor="black"
            shifting={true}
            barStyle={{
                backgroundColor: Colors.primaryColor
            }}>
            <Tab.Screen
                name="Home"
                component={MealsStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                    tabBarColor: Colors.primaryColor
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star" color={color} size={26} />
                    ),
                    tabBarColor: Colors.accentColor
                }}
            />
        </Tab.Navigator>
    );
};

// Create stack navigator for filters (Just to see the header)
const FiltersNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Filters"
                component={FiltersScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor
                    }
                }}
            />
        </Stack.Navigator>
    );
};

// Main drawer navigator
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor: Colors.primaryColor,
                activeTintColor: "white"
            }}
            drawerStyle={{
                width: 250
            }}>
            <Drawer.Screen name="Meals" component={BottomTabNavigator} />
            <Drawer.Screen name="Filters" component={FiltersNavigator} />
        </Drawer.Navigator>
    );
};

const MealsNavigator = () => (
    <NavigationContainer>
        <MainDrawerNavigator />
    </NavigationContainer>
);

export default MealsNavigator;
