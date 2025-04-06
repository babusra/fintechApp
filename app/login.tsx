import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

enum LoginType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState('+49');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  const onLogin = async (type: LoginType) => {
    if (type === LoginType.Phone) {
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code there
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Country code'
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onChangeText={setCountryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder='Mobile number'
            placeholderTextColor={Colors.gray}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onLogin(LoginType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => onLogin(LoginType.Email)}
        >
          <Ionicons name='mail' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => onLogin(LoginType.Google)}
        >
          <Ionicons name='logo-google' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => onLogin(LoginType.Apple)}
        >
          <Ionicons name='logo-apple' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
