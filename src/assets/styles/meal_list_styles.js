import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mealPaperCard: {
        flex: 1,
        width: "100%",
        marginBottom: 20,
        backgroundColor: Colors.primaryColor
    },
    mealPaperCardFooter: {
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "magenta",
        padding: 10
    }
});

export default styles;
