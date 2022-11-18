import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class Notification extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Notification</Text>
      </View>
    );
  }
}

export default Notification;
