import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signInTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 100,
    },
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
