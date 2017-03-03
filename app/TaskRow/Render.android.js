import React from 'react';

import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default function render(styles) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
      >and: {this.props.todo.task}</Text>

      <TouchableHighlight
        style={styles.doneButton}
        onPress={this.onDonePressed}
      >
        <Text>Done</Text>
      </TouchableHighlight>
    </View>
  );
}
