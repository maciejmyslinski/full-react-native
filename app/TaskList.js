import React from 'react';

import {
  View,
  ListView,
  TouchableHighlight,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';

import TaskRow from './TaskRow/TaskRow';

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderColor: '#05a5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  switch: {},
  toggleText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 3,
  },
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };

    this.renderRow = todo =>
      <TaskRow
        onDone={this.props.onDone}
        todo={todo}
      />;
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this
      .state
      .dataSource
      .cloneWithRows(nextProps.todos);

    this.setState({ dataSource });
  }

  render() {
    return (
      <View>
        <View
          style={styles.toggleRow}
        >
          <Switch
            onValueChange={this.props.onToggle}
            style={styles.switch}
            value={this.props.filter !== 'pending'}
          />
          <Text
            style={styles.toggleText}
          >
            Showing {this.props.todos.length} {this.props.filter} todos(s)
          </Text>
        </View>

        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onAddStarted}
        >
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskList.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  filter: React.PropTypes.string.isRequired,
  onDone: React.PropTypes.func.isRequired,
  todos: React.PropTypes
    .arrayOf(React.PropTypes.object).isRequired,
  onAddStarted: React.PropTypes.func.isRequired,
};

export default TaskList;
