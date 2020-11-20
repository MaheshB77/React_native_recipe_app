import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mealDetailScrollView: {
        flex: 1,
        width: "90%",
        marginTop: 20
    },
    ingredientsContainer: {
        marginLeft: 20,
        width: "70%",
        paddingBottom: 10
    },
    ingredient: {
        textAlign: "center",
        backgroundColor: Colors.primaryColor,
        borderRadius: 5,
        margin: 3,
        fontFamily: "open-sans",
        elevation: 2
    },
    stepsContainer: {
        marginLeft: 20,
        marginRight: 5,
        paddingBottom: 10
    },
    step: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 5,
        margin: 3,
        paddingLeft: 5,
        elevation: 2,
        fontFamily: "open-sans"
    }
});

export default styles;
