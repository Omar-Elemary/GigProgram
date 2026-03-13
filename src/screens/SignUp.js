import React, { useState } from 'react';
import axios from 'axios';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

export const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (!fullName || !email || !mobile || !password) return;
        setLoading(true);

        try {
            const response = await axios.get('https://api.github.com/users/1');
            console.log('GitHub API Data:', response.data);
            alert(`Account created successfully! Fetched user: ${response.data.login}`);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error creating account or fetching data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#FFECE3', '#FFFFFF']}
                style={styles.container}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.title}>Create Account</Text>
                            <Text style={styles.subtitle}>Start your culinary journey today!</Text>
                        </View>

                        <View style={styles.formContainer}>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Full Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="John Doe"
                                    placeholderTextColor="#999"
                                    value={fullName}
                                    onChangeText={setFullName}
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="john@example.com"
                                    placeholderTextColor="#999"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Mobile Number</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="01128319999"
                                    placeholderTextColor="#999"
                                    keyboardType="phone-pad"
                                    maxLength={13}
                                    value={mobile}
                                    onChangeText={setMobile}
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="••••••••"
                                    placeholderTextColor="#999"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.signUpButton}
                                onPress={handleSignUp}
                                activeOpacity={0.8}
                                disabled={loading}
                            >
                                <LinearGradient
                                    colors={['#FF7A00', '#FF4B3A']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.gradientButton}
                                >
                                    {loading ? (
                                        <ActivityIndicator color="white" />
                                    ) : (
                                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                                    )}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>Already have an account? </Text>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Text style={styles.signInText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>
    );
};
