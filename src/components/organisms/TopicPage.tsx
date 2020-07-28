import React from 'react';
import { TopicList } from '../molecules';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TopicPage({ navigation }: { navigation: any }) {
	return (
		<Tab.Navigator>
			<Tab.Screen name="ONE">
				{() => <TopicList distance={100} navigation={navigation} />}
			</Tab.Screen>
			<Tab.Screen name="TWO">
				{() => <TopicList distance={200} navigation={navigation} />}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
