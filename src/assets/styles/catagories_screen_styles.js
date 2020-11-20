import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        // Shadow For IOS
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        // Shadow For Android
        elevation: 10
    },
    gridContent: {
        flex: 1,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 16
    }
});

export default styles;
