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
import OTPImage from '../image/otp.svg';

export class EnterOTP extends Component {
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
              <OTPImage width={300} height={300} />
            </View>
            <Text style={styles.headerStyle}>Enter OTP</Text>
            <Text>An 4 Digit code has been sent to</Text>
            <Text style={{fontWeight: 'bold'}}>+855 15 947 160</Text>
          </View>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => this.props.navigation.navigate('ResetPassword')}>
            <Text style={styles.loginText}>Verify</Text>
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

export default EnterOTP;
