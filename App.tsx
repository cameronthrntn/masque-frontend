import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { mainDark, mainColour } from './style_variables'
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/molecules';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CommentPage, TopicPage, TopicPost } from './src/components/organisms';

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
						primary: mainColour,
						background: mainDark,
						card: mainDark,
						text: mainColour,
						border: mainColour,
						notification: mainColour,
					},
				}}
			>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Topics" component={TopicPage} />
					<Stack.Screen name="Comments" component={CommentPage} />
					<Stack.Screen name="TopicPost" component={TopicPost} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: mainDark,
		flex: 1,
	},
	mainText: {
		color: mainColour,
	},
});
