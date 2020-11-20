import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Provider as PaperProvider } from "react-native-paper";
import MealsNavigator from "./src/navigation/MealsNavigator";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./src/assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./src/assets/fonts/OpenSans-Bold.ttf")
    });
};

export default function App() {
    // Load the fonts
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
    }

    // Main App
    return (
        <PaperProvider>
            <MealsNavigator />
        </PaperProvider>
    );
}
