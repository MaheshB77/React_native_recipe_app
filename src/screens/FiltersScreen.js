import React, { Component } from "react";
import filtersScreenStyles from "../assets/styles/filters_screen_styles";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
export default class FiltersScreen extends Component {
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
            <View style={filtersScreenStyles.screen}>
                <Text>The Filters screen</Text>
            </View>
        );
    }
}
