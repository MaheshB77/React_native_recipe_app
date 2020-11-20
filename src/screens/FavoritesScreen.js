import React, { Component } from "react";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { MEALS } from "../data/dummy_data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
export default class FavoritesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favMeals: MEALS.filter(
                (meal) => meal.id === "m1" || meal.id === "m4" || meal.id === "m5"
            )
        };
    }

    componentDidMount = () => {
        // Setting left header icon to toggle the side drawer
        this.props.navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Drawer"
                            iconName="ios-menu"
                            onPress={() => {
                                this.props.navigation.toggleDrawer();
                            }}></Item>
                    </HeaderButtons>
                );
            }
        });
    };
    render() {
        return (
            // <View style={favoritesScreenStyles.screen}>
            //     <Text>The Favorites screen</Text>
            // </View>
            <MealList
                mealsToDisplay={this.state.favMeals}
                navigation={this.props.navigation}
                favCardBackgroundColor={Colors.accentColor}
            />
        );
    }
}
