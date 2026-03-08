import React, { useState } from 'react';
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

export const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = () => {
        if (!fullName || !email || !mobile || !password) return;
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert('Account created successfully!');
        }, 1500);
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
                                    placeholder="+1 234 567 8900"
                                    placeholderTextColor="#999"
                                    keyboardType="phone-pad"
                                    maxLength={15}
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

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFECE3',
    },
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 24,
        justifyContent: 'center',
    },
    headerContainer: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        lineHeight: 24,
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.05,
        shadowRadius: 24,
        elevation: 5,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 8,
    },
    input: {
        height: 52,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        color: '#333333',
        borderWidth: 1,
        borderColor: '#E9ECEF',
    },
    signUpButton: {
        marginTop: 12,
        marginBottom: 10,
        borderRadius: 16,
        overflow: 'hidden',
    },
    gradientButton: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
    },
    footerText: {
        fontSize: 14,
        color: '#666666',
    },
    signInText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF4B3A',
    },
});
