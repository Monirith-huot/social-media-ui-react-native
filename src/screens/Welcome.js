import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import WelcomeImage from '../image/welcome.svg';
import React, {Component} from 'react';
import COLOR from '../contains/pallete';
export class Welcome extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLOR.primary}}>
        <SafeAreaView style={styles.default}>
          <View>
            <View style={{marginBottom: 50}}>
              <WelcomeImage width={250} height={250}></WelcomeImage>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.set}></TouchableOpacity>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
            WELCOME TO DOGFACE
          </Text>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => this.props.navigation.replace('HomepageTab', {})}>
            <Text style={styles.loginText}>Continue</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

// <Text>Welcome {this.props.route.params.userName}</Text>;
const styles = StyleSheet.create({
  default: {
    marginRight: 20,
    marginLeft: 20,
    flex: 1,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1,
  },
  loginScreenButton: {
    flexDirection: 'row',

    width: '100%',
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: COLOR.primary,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Welcome;
