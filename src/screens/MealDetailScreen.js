import React, { Component } from "react";
import mealDetailsScreenStyles from "../assets/styles/meal_details_screen_styles";
import { View, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
export default class MealDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        /**
         * Set the title to mealDetails title and headerRight button
         * For headerRight button we have to install package called
         * "react-navigation-header-buttons"
         */
        this.props.navigation.setOptions({
            title: this.props.route.params.mealDetails.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => console.log("Marked as fev")}></Item>
                </HeaderButtons>
            )
        });
    };

    render() {
        return (
            <View style={mealDetailsScreenStyles.screen}>
                <Text>{this.props.route.params.mealDetails.title}</Text>
            </View>
        );
    }
}
