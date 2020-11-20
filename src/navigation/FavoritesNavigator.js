import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
const Stack = createStackNavigator();

const FavoritesNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title: "Favorites!",
                    headerStyle: {
                        backgroundColor: Colors.accentColor
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
};

export default FavoritesNavigator;
