import React, { Component } from "react";
import catagoriesScreenStyles from "../assets/styles/catagories_screen_styles";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { CATEGORIES } from "../data/dummy_data";
export default class CatagoriesScreen extends Component {
    constructor(props) {
        super(props);
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

    // Render catagories grids
    renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={{
                    ...catagoriesScreenStyles.gridItem,
                    backgroundColor: itemData.item.color
                }}
                //Navigate to CatagoryMealsScreen with param called "catagory"
                onPress={() => {
                    this.props.navigation.navigate("CatagoryMeals", {
                        catagory: itemData.item
                    });
                }}>
                <View style={catagoriesScreenStyles.gridContent}>
                    <Text style={catagoriesScreenStyles.title}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <FlatList
                data={CATEGORIES}
                renderItem={this.renderGridItem}
                keyExtractor={(item, index) => item.id} //Unique key
                numColumns={2} //Number of grids
            ></FlatList>
        );
    }
}
