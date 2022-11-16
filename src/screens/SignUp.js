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
import Signup from '../image/signup.svg';
import Google from '../image/google.svg';

export class SignUp extends Component {
  render() {
    return (
      <View style={{flex: 12, backgroundColor: 'white'}}>
        <SafeAreaView style={styles.default}>
          <View style={{flex: 10}}>
            <Icons.ChevronLeftIcon
              size={30}
              color="#3C4048"
              onPress={() => this.props.navigation.goBack(null)}
            />

            <View style={{alignItems: 'center'}}>
              <Signup width={200} height={200} />
            </View>
            <Text style={styles.headerStyle}>Sign up</Text>

            <View style={styles.textInput}>
              <Icons.AtSymbolIcon style={{color: 'grey', marginRight: 10}} />
              <TextInput
                placeholder="Enter your gmail "
                style={styles.inputBox}
                onChangeText={text => {
                  console.warn(text);
                }}
              />
            </View>

            <View style={styles.textInput}>
              <Icons.UserCircleIcon style={{color: 'grey', marginRight: 10}} />
              <TextInput
                placeholder="Enter your Name "
                style={styles.inputBox}
                onChangeText={text => {
                  console.warn(text);
                }}
              />
            </View>

            <View style={styles.textInput}>
              <Icons.PhoneIcon style={{color: 'grey', marginRight: 10}} />
              <TextInput
                placeholder="Enter your Name "
                style={styles.inputBox}
                onChangeText={text => {
                  console.warn(text);
                }}
              />
            </View>

            <TouchableOpacity style={styles.loginScreenButton}>
              <Text style={styles.loginText}>Continue</Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center', color: COLOR.subtitle}}>
              {' '}
              OR{' '}
            </Text>

            <TouchableOpacity style={styles.loginScreenButtonWithGoogle}>
              <View style={styles.centerRowItem}>
                <Google width={40} height={40} />
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontSize: 15,
                  }}>
                  Login with Google
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={{marginTop: 20, marginBottom: 20}}>
              <Text style={{color: COLOR.subtitle}}>
                By sigining up, you're agree to our
              </Text>
              <Text style={{color: COLOR.primary, fontWeight: 'bold'}}>
                {' '}
                Term and condtions{' '}
              </Text>
              <Text style={{color: COLOR.subtitle}}>and</Text>
              <Text style={{color: COLOR.primary, fontWeight: 'bold'}}>
                {' '}
                Privacy Policy{' '}
              </Text>
            </Text>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <View style={[styles.centerRowItem]}>
              <Text> Joined us before </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{color: COLOR.primary, fontWeight: 'bold'}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  centerRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenButton: {
    marginTop: 25,
    marginBottom: 10,
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
  loginScreenButtonWithGoogle: {
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: COLOR.secondary,
    opacity: 1,
    borderRadius: 15,
  },
});

export default SignUp;
