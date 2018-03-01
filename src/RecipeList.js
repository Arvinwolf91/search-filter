/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Cell from './Cell';
import Recipes from './Recipes.json'
import Header from './common/Header';
const KEYS_TO_FILTERS = ['category', 'recipename'];

// Make a class component
class RecipeList extends Component {

    // Note: state is available only for class components
    // Initialize state
    state = { recipes: [], searchTerm: '' };

    searchUpdated(term) {
        this.setState({ searchTerm: term })

        const filteredRecipes =  this.state.recipes.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        this.setState({ recipes: filteredRecipes });

        if (term === '') {
            this.setState({ recipes: Recipes });
        }
    }

    componentWillMount() {
       this.setState({ recipes: Recipes });
    }

    renderRecipes() {
        return this.state.recipes.map(recipe => 
        <Cell key={recipe.category} recipe={recipe} />);
    }

    render() {
        return (
        <View>
        <Header headerText='Recipes' />
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
        />
        <ScrollView>{this.renderRecipes()}</ScrollView>
        </View>
        );
    }
}

const styles = {
    searchInput:{
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1
    }
};

export default RecipeList;
