import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import SwipeoutButton from 'react-native-swipeout';

const localStyle = StyleSheet.create({
  row: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  container: {
    marginBottom: 20,
  },
});

export default function render(baseStyle) {
  const button = [
    {
      text: 'Done',
      onPress: this.onDonePressed.bind(this),
    },
  ];

  return (
    <View style={localStyle.container}>
      <SwipeoutButton
        right={button}
      >
        <View style={[baseStyle.container, localStyle.row]}>
          <Text
            style={baseStyle.label}
          >
            ios: {this.props.todo.task}
          </Text>
        </View>
      </SwipeoutButton>
    </View>
  );
}
