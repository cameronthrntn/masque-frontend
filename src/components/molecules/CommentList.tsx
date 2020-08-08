import React, { useState, useEffect } from 'react';
import { View, Text, RefreshControl, FlatList, StyleSheet } from 'react-native';
import { TopicInterface, CommentInterface } from '../../interfaces';
import { TopicCard, CommentCard } from '../atoms';
import { getComments } from '../../services/api';
import { mainDark } from '../../../style_variables';

export default function CommentList({ topic_id }: { topic_id: number }) {
	const [comments, setComments] = useState<CommentInterface[]>([]);
	const [refreshing, setRefreshing] = useState<boolean>(false);

	useEffect(() => {
		const fetchComments = async () => {
			const data: CommentInterface[] = await getComments(topic_id);
			setComments(data);			
		};
		fetchComments();
	}, []);

	const renderItem = ({ item }: { item: CommentInterface }) => (
		<CommentCard comment={item} />
	);

	const onRefresh = async () => {
		setRefreshing(true);
		const data: CommentInterface[] = await getComments(topic_id);
		setComments(data);
		setRefreshing(false);
	};

	return (
		<View style={styles.listContainer}>
			<FlatList
				data={comments}
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
		backgroundColor: mainDark
	},
	list: {},
});
