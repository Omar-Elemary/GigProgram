import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

export const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [mobile, setMobile] = useState('');
    const handleSignIn = () => {
        if (!email || !password) return;
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert('Sign in successful!');
        }, 1500);
    };

    return (
        <View>
            <Text style={styles.signInTitle}>SignInScreen</Text>
            <TextInput
                style={styles.input}
                placeholder='Mobile'
                placeholderTextColor={'black'}
                onChangeText={(mobile) => {
                    setMobile(mobile);
                }}
                value={mobile}
                maxLength={12}
                keyboardType='number-pad'
            />

            <TextInput
                style={styles.input}
                placeholder='password'
                placeholderTextColor={'black'}
                onChangeText={(password) => {
                    setPassword(password);
                }}
                value={password}
                secureTextEntry={true}
            />

        </View>
    );
};