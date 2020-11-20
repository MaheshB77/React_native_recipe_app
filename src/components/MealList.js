import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import mealListStyles from "../assets/styles/meal_list_styles";
import { Card } from "react-native-paper";

export default class MealList extends Component {
    constructor(props) {
        super(props);
    }
    // Render individual meal
    renderMealItem = (itemData) => {
        // Different card color for favorite meal
        let mealPaperCard = { ...mealListStyles.mealPaperCard };
        let mealPaperCardFooter = { ...mealListStyles.mealPaperCardFooter };
        if (this.props.favCardBackgroundColor) {
            mealPaperCard = {
                ...mealPaperCard,
                backgroundColor: this.props.favCardBackgroundColor
            };
            mealPaperCardFooter = {
                ...mealPaperCardFooter,
                backgroundColor: this.props.favCardBackgroundColor
            };
        }

        return (
            // React-native-paper-card
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                    this.props.navigation.navigate("MealDetails", {
                        mealDetails: itemData.item
                    });
                }}>
                <Card style={mealPaperCard}>
                    <Card.Title titleNumberOfLines={2} title={itemData.item.title} />
                    <Card.Cover source={{ uri: itemData.item.imageUrl }} />
                    <View style={mealPaperCardFooter}>
                        <Text>{itemData.item.duration}m</Text>
                        <Text>{itemData.item.complexity}</Text>
                        <Text>{itemData.item.affordability}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <View style={mealListStyles.screen}>
                {/* List of meals */}
                <FlatList
                    style={{ width: "85%", padding: 10 }}
                    data={this.props.mealsToDisplay}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderMealItem}></FlatList>
            </View>
        );
    }
}
