# React Navigation (v5.0)

> ## Step 1 :- (Install the dependencies)

-   `@react-navigation/native` and `@react-navigation/stack` are the required dependencies.
-   If we are using `expo` then we have to install some extra dependencies using the following command.
-   `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view` (Given in the official docs)

> ## Step 2 :- (Create the stack navigator)

```javascript
// MealsNavigator.js

import React from "react";
// Using react-navigation version 5
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Importing screens
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../screens/CatagoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";
const { Navigator, Screen } = createStackNavigator();

// Create the Navigator
const MealsStack = () => (
    <Navigator>
        <Screen
            name="Catagories"
            component={CatagoriesScreen}
            options={{
                title: "Catagories",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
        <Screen
            name="CatagoryMeals"
            component={CatagoryMealsScreen}
            options={{
                title: "Catagory Meals",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
        <Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
                title: "Meal Details",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
    </Navigator>
);

const MealsNavigator = () => (
    <NavigationContainer>
        <MealsStack />
    </NavigationContainer>
);

export default MealsNavigator;
```

> ## Step 3 :- (Understanding the stack navigator)

-   Import the `import { createStackNavigator } from "@react-navigation/stack";`
-   `const { Navigator, Screen } = createStackNavigator(); `
-   Here we are pulling out the `Navigator` and `Screen` components from `createStackNavigator()`.
-   Now we can create the stack navigator which will contain different screens.
-   ```javascript
    // Simple stack navigator
    const MealsStack = () => (
        <Navigator>
            <Screen name="Catagories" component={CatagoriesScreen} />
            <Screen name="CatagoryMeals" component={CatagoryMealsScreen} />
            <Screen name="MealDetails" component={MealDetailScreen} />
        </Navigator>
    );
    ```

-   We have wrap this stack navigator inside the `<NavigationContainer> </NavigationContainer>` (Imported using `import { NavigationContainer } from "@react-navigation/native";`)
-   Wrapping the stack navigator inside `<NavigationContainer> </NavigationContainer>`

```javascript
const MealsNavigator = () => (
    <NavigationContainer>
        <MealsStack />
    </NavigationContainer>
);
```

-   We have to export this component

```javascript
export default MealsNavigator;
```

> ## Step 4 :- (Using this stack navigator in App.js)

```javascript
// App.js

import React from "react";
import MealsNavigator from "./src/navigation/MealsNavigator";

export default function App() {
    // Main App
    return <MealsNavigator />;
}
```

> ## Step 5 :- (Result)

-   We will see the `CatagoriesScreen` component as default screen in our app.

> ## Step 6 :- (Moving around the screens)

```javascript
// CatagoriesScreen.js

import React, { Component } from "react";
import { View, Text, Button} from "react-native";
export default class CatagoriesScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>This is Catagories Screen</Text>
                <Button
                    title="Go to Catagory meals screen" //Next screen
                    onPress={()=> {
                        this.props.navigation.navigate("CatagoryMeals")
                    }}
                >
            </View>
        );
    }
}

```

-   In the above`CatagoriesScreen` component we can see that we have a special prop `this.props.navigation` which is provided by the `react-navigation`.
-   Using this prop we can move around the components which we have defined in the stack navigator (Like here we are going to the `CatagoryMeals` component).
-   We can also pass the `params` from one screen to another, Like

```javascript
// CatagoriesScreen.js
            <View>
                <Text>This is Catagories Screen</Text>
                <Button
                    title="Go to Catagory meals screen" //Next screen
                    onPress={()=> {
                        this.props.navigation.navigate("CatagoryMeals",{
                            name:"Mahesh"
                        })
                    }}
                >
            </View>
```

-   Here we can see that we have passed a `param` called `name` to the `CatagoryMeals` screen.
-   We can then retrieve this `param` in the `CatagoryMeals` screen using `this.props.route.params`, Like

```javascript
// CatagoryMealsScreen.js

import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class CatagoryMealsScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Hello from {this.props.route.params.name}</Text>
            </View>
        );
    }
}
```

> ## Step 7 :- (Exploring the `options` property of Screen component)

-   While creating the stack navigator we can set other options to the Screen component using the `options` property of Screen component.
-   Before

```javascript
// Simple stack navigator
const MealsStack = () => (
    <Navigator>
        <Screen name="Catagories" component={CatagoriesScreen} />
        <Screen name="CatagoryMeals" component={CatagoryMealsScreen} />
        <Screen name="MealDetails" component={MealDetailScreen} />
    </Navigator>
);
```

-   After

```javascript
const MealsStack = () => (
    <Navigator>
        <Screen
            name="Catagories"
            component={CatagoriesScreen}
            options={{
                title: "Catagories",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
        <Screen
            name="CatagoryMeals"
            component={CatagoryMealsScreen}
            options={{
                title: "Catagory Meals",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
        <Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
                title: "Meal Details",
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                }
            }}
        />
    </Navigator>
);
```

> ## Step 8 :- (Changing the `options` of the screen inside the perticular component)

-   As we have created `options` property while creating the `Screen` we can also change these `options` in the perticular Screen component using `this.props.navigation.setOptions({})`.
-   Like,

```javascript
// CatagoriesScreen.js

import React, { Component } from "react";
import { View, Text, Button} from "react-native";
export default class CatagoriesScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMunt = () => {
        // Change the heading dynamically
        this.props.navigation.setOptions({
            title: "New Title"
        });
    }

    render() {
        return (
            <View>
                <Text>This is Catagories Screen</Text>
                <Button
                    title="Go to Catagory meals screen" //Next screen
                    onPress={()=> {
                        this.props.navigation.navigate("CatagoryMeals")
                    }}
                >
            </View>
        );
    }
}

```

> ## Step 9 :- (Create bottom tab navigation using `@react-navigation/material-bottom-tabs`)

-   For creating bottom tab navigation we are using `@react-navigation/material-bottom-tabs` provided by `react-native-paper` instead of using `@react-navigation/bottom-tabs` which is provided by `react-navigation`
-   Install the required packages using `npm i @react-navigation/material-bottom-tabs`.
-   Install `npm i react-native-paper`
-   Now ` import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";`
-   And create the bottom tab navigator using `createMaterialBottomTabNavigator`
-   Code

```javascript
import React from "react";
// Using react-navigation version 5
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Importing screens
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../screens/CatagoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";

// Stack navigator
const Stack = createStackNavigator();

// Create the Navigator
const MealsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Catagories" component={CatagoriesScreen} />
        <Stack.Screen name="CatagoryMeals" component={CatagoryMealsScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
);

// Bottom tab navigator (using material bottom navigator)
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MealsStack} /> //Our stack navigator
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    );
};

const MealsNavigator = () => (
    <NavigationContainer>
        <BottomTabNavigator /> // <MealsStack /> is replaced by <BottomTabNavigator />
    </NavigationContainer>
);

export default MealsNavigator;
```

-   #### NOTE :- We can only have one `NavigationContainer`.

> ## Step 10 :- (Add the icons to bottom tab navigation)
- Add the dependency called `react-native-vector-icons` by `npm i react-native-vector-icons`.
- Use it as given below,
```javascript
import React from "react";
// Using react-navigation version 5
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Importing screens
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../screens/CatagoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";

// Stack navigator
const Stack = createStackNavigator();

// Create the Navigator
const MealsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Catagories" component={CatagoriesScreen} />
        <Stack.Screen name="CatagoryMeals" component={CatagoryMealsScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
);

// Bottom tab navigator (using material bottom navigator)
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
        
            <Tab.Screen
                name="Home"
                component={MealsStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            /> //Stack navigator
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const MealsNavigator = () => (
    <NavigationContainer>
        <BottomTabNavigator /> // <MealsStack /> is replaced by <BottomTabNavigator />
    </NavigationContainer>
);

export default MealsNavigator;
```