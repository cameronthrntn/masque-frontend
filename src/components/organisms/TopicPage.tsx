import React from 'react';
import { TopicList } from '../molecules';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Closest from '../../Images/closest.svg';
import MiddleDistance from '../../Images/middle_distance.svg';
import Global from '../../Images/global.svg';
import { StyleSheet } from 'react-native';
import { mainColour, disabled } from '../../../style_variables';

const Tab = createBottomTabNavigator();

export default function TopicPage({ navigation }: { navigation: any }) {
	return (
		<Tab.Navigator
			tabBarOptions={{
				tabStyle: styles.tab,
				showLabel: false,
				activeTintColor: mainColour,
				inactiveTintColor: disabled
			}}
		>
			<Tab.Screen
				name="closest"
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => <Closest style={styles.icon} color={color} />,
				}}
			>
				{() => <TopicList distance={100} navigation={navigation} />}
			</Tab.Screen>
			<Tab.Screen
				name="middle"
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => {
						return <MiddleDistance style={styles.icon} color={color} />;
					},
				}}
			>
				{() => <TopicList distance={200} navigation={navigation} />}
			</Tab.Screen>
			<Tab.Screen
				name="global"
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => <Global style={styles.icon} color={color} />,
				}}
			>
				{() => <TopicList distance={Infinity} navigation={navigation} />}
			</Tab.Screen>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	tab: {
		padding: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: '100%',
		width: '100%',
	},
});
