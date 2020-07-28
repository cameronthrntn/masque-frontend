import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/molecules';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CommentPage, TopicPage } from './src/components/organisms';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" style="light" />
			<Header />
			<NavigationContainer
				theme={{
					dark: true,
					colors: {
						primary: '#d1c62e',
						background: '#1a1a1a',
						card: '#1a1a1a',
						text: '#d1c62e',
						border: '#d1c62e',
						notification: '#d1c62e',
					},
				}}
			>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Topics" component={TopicPage} />
					<Stack.Screen name="Comments" component={CommentPage} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1a1a1a',
		flex: 1,
	},
	mainText: {
		color: '#e0cc1b',
	},
});
