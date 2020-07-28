import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	RefreshControl,
	Text
} from 'react-native';
import { getTopics } from '../../services/api';
import { TopicInterface } from '../../interfaces';
import {TopicCard} from '../atoms';

export default function TopicList({distance = 100, navigation} : {distance: number, navigation: any}) {
	const [topics, setTopics] = useState<TopicInterface[]>([]);
	const [refreshing, setRefreshing] = useState<boolean>(false);

	useEffect(() => {		
		const fetchTopics = async () => {
			const data: TopicInterface[] = await getTopics();
			setTopics(data);			
		};
		fetchTopics();
	}, []);

	const renderItem = ({ item }: { item: TopicInterface }) => (
		<TopicCard topic={item} navigation={navigation} />
	);

	const onRefresh = async () => {
		setRefreshing(true);
		const data: TopicInterface[] = await getTopics();
		setTopics(data);
		setRefreshing(false);
	};

	return (
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
	);
}

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		backgroundColor: '#1a1a1a',
	},
	list: {},
});
