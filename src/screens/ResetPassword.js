import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import * as Icons from 'react-native-heroicons/solid';
import COLOR from '../contains/pallete';
import ResetPasswordLogo from '../image/resetPassword.svg';

export class ResetPassword extends Component {
  render() {
    return (
      <View style={{flex: 12, backgroundColor: 'white'}}>
        <SafeAreaView style={styles.default}>
          <View>
            <Icons.ChevronLeftIcon
              size={30}
              color="#3C4048"
              onPress={() => this.props.navigation.goBack(null)}
            />
            <View style={{alignItems: 'center'}}>
              <ResetPasswordLogo width={250} height={250} />
            </View>
          </View>
          <Text style={styles.headerStyle}>Reset</Text>
          <Text style={styles.headerStyle}>Password</Text>

          <View style={styles.textInput}>
            <Icons.LockClosedIcon style={{color: 'grey', marginRight: 10}} />
            <TextInput
              placeholder="New password"
              style={styles.inputBox}
              onChangeText={text => {
                console.warn(text);
              }}
            />
          </View>

          <View style={styles.textInput}>
            <Icons.LockClosedIcon style={{color: 'grey', marginRight: 10}} />
            <TextInput
              placeholder="Confirm new password"
              style={styles.inputBox}
              onChangeText={text => {
                console.warn(text);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    marginRight: 20,
    marginLeft: 20,
    flex: 12,
  },
  headerStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: COLOR.heading,
  },
  textInput: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 7,
  },
  loginScreenButton: {
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: COLOR.primary,
    borderRadius: 15,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ResetPassword;
