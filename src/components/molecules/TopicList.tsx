import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	RefreshControl,
	Alert,
} from 'react-native';
import { mainDark, mainColour, red } from '../../../style_variables';
import { getTopics } from '../../services/api';
import { TopicInterface } from '../../interfaces';
import { TopicCard } from '../atoms';
import NewThread from '../atoms/NewThread';

export default function TopicList({
	distance = 'furthest',
	navigation,
}: {
	distance: string;
	navigation: any;
}) {
	const [topics, setTopics] = useState<TopicInterface[]>([]);
	const [refreshing, setRefreshing] = useState<boolean>(false);

	useEffect(() => {
		const fetchTopics = async () => {
			navigator.geolocation.getCurrentPosition(
				async ({ coords: { latitude, longitude } }) => {
					const data: TopicInterface[] = await getTopics(
						distance,
						-106.018,
						34.542
					);
					setTopics(data);
				},
				(error) => Alert.alert(error.message),
				{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
			);
		};
		fetchTopics();
	}, []);

	const renderItem = ({ item }: { item: TopicInterface }) => (
		<TopicCard topic={item} navigation={navigation} isStatic={false} />
	);

	const onRefresh = async () => {
		setRefreshing(true);
		navigator.geolocation.getCurrentPosition(
			async ({ coords: { latitude, longitude } }) => {
				const data: TopicInterface[] = await getTopics(
					distance,
					-106.018,
					34.542
				);
				setTopics(data);
			},
			(error) => Alert.alert(error.message),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
		);
		setRefreshing(false);
	};

	return (
		<>
			<View style={styles.listContainer}>
				<FlatList
					data={topics}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
					style={styles.list}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				/>
			</View>
			<NewThread navigation={navigation} />
		</>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		backgroundColor: mainDark,
	},
	list: {},
});
