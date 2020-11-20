import React, { Component } from "react";
import mealDetailsScreenStyles from "../assets/styles/meal_details_screen_styles";
import { View, Text, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Card, Divider, Title } from "react-native-paper";
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

    // Render meal in detail
    renderMealInDetail = () => {
        let mealDetails = this.props.route.params.mealDetails;

        let isVeg = mealDetails.isVegan ? "Veg" : "Non-Veg ";
        let isLactoseFree = mealDetails.isLactoseFree ? "Lactose free" : "Containes lactose";
        let isGlutenFree = mealDetails.isGlutenFree ? "Gluten free" : "Containes gluten";
        return (
            <ScrollView style={mealDetailsScreenStyles.mealDetailScrollView}>
                <Card>
                    <Card.Cover source={{ uri: mealDetails.imageUrl }} />
                    <Title style={{ marginLeft: 10 }}>Ingredients</Title>
                    <View style={mealDetailsScreenStyles.ingredientsContainer}>
                        {mealDetails.ingredients.map((ingredient) => {
                            return (
                                <Text
                                    key={ingredient}
                                    style={mealDetailsScreenStyles.ingredient}>
                                    {ingredient}
                                </Text>
                            );
                        })}
                    </View>
                    <Divider />

                    <Title style={{ marginLeft: 10 }}>Steps to cook</Title>
                    <View style={mealDetailsScreenStyles.stepsContainer}>
                        {mealDetails.steps.map((ingredient, index) => {
                            return (
                                <Text key={ingredient} style={mealDetailsScreenStyles.step}>
                                    {index + 1}. {ingredient}
                                </Text>
                            );
                        })}
                    </View>
                    <Divider />
                </Card>
            </ScrollView>
        );
    };

    render() {
        return (
            <View style={mealDetailsScreenStyles.screen}>
                {/* <Text>{this.props.route.params.mealDetails.title}</Text> */}
                {this.renderMealInDetail()}
            </View>
        );
    }
}
