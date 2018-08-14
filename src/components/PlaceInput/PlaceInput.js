import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';


class PlaceInput extends Component { 

    state= {
        placeName: '',
    };
    
    // Methods
    placeNameChangedHandler = val => { 
    this.setState({
        placeName: val
    });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") { 
          return;
        }
        this.props.onPlaceAdded(this.state.placeName); 
    
    }
    //   End Methods

    render() {
        return (
            
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An Awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Button 
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>

        );    
    }
}

const styles = StyleSheet.create({
  inputContainer : {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: { 
    width: "30%",
  },
})

export default PlaceInput;