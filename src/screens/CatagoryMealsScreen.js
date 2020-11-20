import React, { Component } from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy_data";
export default class CatagoryMealsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mealsToDisplay: []
        };
    }

    componentDidMount = () => {
        // Change the heading dynamically
        this.props.navigation.setOptions({
            title: this.props.route.params.catagory.title
        });

        // Find Meals By Catagory Id and store it into the state
        this.findMealByCatagoryId();
    };

    findMealByCatagoryId = () => {
        let mealsToDisplay = MEALS.filter(
            (meal) => meal.catagoryIds.indexOf(this.props.route.params.catagory.id) >= 0
        );
        this.setState({
            mealsToDisplay: mealsToDisplay
        });
    };

    render() {
        return (
            <MealList
                mealsToDisplay={this.state.mealsToDisplay}
                navigation={this.props.navigation}
            />
        );
    }
}
