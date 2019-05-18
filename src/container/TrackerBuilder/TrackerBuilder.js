import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import AddMeal from "../../components/AddMeal/AddMeal";
import MealsList from "../../components/MealsList/MealsList";

import { Container } from "react-bootstrap";

import * as actionTypes from "../../store/actions";

class TrackerBuilder extends Component {
    state = {};
    render() {
        return (
            <Fragment>
                <Container>
                    <AddMeal clicked={this.props.addMeal} />
                    <hr />
                    <MealsList meals={this.props.meals} />
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addMeal: () =>
            dispatch({
                type: actionTypes.ADD_MEAL,
                payload: {
                    newMeal: {
                        id: 3,
                        title: "pizza",
                        calories: 200
                    }
                }
            })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackerBuilder);