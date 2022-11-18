import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  // TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {Component, useState} from 'react';
import * as Icons from 'react-native-heroicons/solid';
import COLOR from '../contains/pallete';
import Logo from '../image/login_logo.svg';
import Google from '../image/google.svg';
import {TextInput} from 'react-native-paper';
export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      show: false,
      text: '',
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 12}}>
        <SafeAreaView style={styles.default}>
          <View style={{flex: 10}}>
            <View style={styles.container}>
              <Logo width={250} height={250} style={{marginBottom: 50}} />
            </View>
            <Text style={styles.headerStyle}>Login</Text>

            <View style={styles.textInput}>
              <TextInput
                underlineColor="grey"
                activeUnderlineColor={COLOR.primary}
                selectionColor={COLOR.primary}
                activeOutlineColor={COLOR.primary}
                placeholder="username"
                onChangeText={text => this.setState({userName: text})}
                style={{flex: 1, backgroundColor: 'white'}}
              />
            </View>

            <View style={styles.textInput}>
              <TextInput
                underlineColor="grey"
                activeUnderlineColor={COLOR.primary}
                selectionColor={COLOR.primary}
                activeOutlineColor={COLOR.primary}
                placeholder="password"
                onChangeText={text => this.setState({password: text})}
                secureTextEntry={this.state.show ? false : true}
                style={{flex: 1, backgroundColor: 'white'}}
                right={
                  this.state.show == false ? (
                    <TextInput.Icon
                      icon={Icons.EyeSlashIcon}
                      onPress={() => this.setState({show: !this.state.show})}
                    />
                  ) : (
                    <TextInput.Icon
                      icon={Icons.EyeIcon}
                      onPress={() => this.setState({show: !this.state.show})}
                    />
                  )
                }
              />
            </View>

            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'flex-end'}}
              onPress={() => this.props.navigation.navigate('ForgetPassword')}>
              <Text style={{color: COLOR.primary, fontWeight: 'bold'}}>
                Forget Password
              </Text>
            </TouchableOpacity>
            {/* </TextInput> */}

            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() =>
                this.props.navigation.replace('Welcome', {
                  userName: this.state.userName,
                  password: this.state.password,
                })
              }>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center', color: COLOR.subtitle}}>
              {''}
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
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <View style={[styles.centerRowItem]}>
              <Text> New to dogbook? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={{color: COLOR.primary, fontWeight: 'bold'}}>
                  Register
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
  container: {
    alignItems: 'center',
  },
  textInput: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  loginScreenButton: {
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: COLOR.primary,
    borderRadius: 15,
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
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  centerRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 7,
  },
});

export default LogIn;
