import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopicCard } from '../atoms';
import CommentList from '../molecules/CommentList';
import { TopicInterface } from '../../interfaces';
import { getTopic } from '../../services/api';

export default function CommentPage({
	route,
	navigation,
}: {
	route: any;
	navigation: any;
}) {
	const [topic, setTopic] = useState<TopicInterface>();

	useEffect(() => {
		const fetchTopic = async (id: number) => {
			const data: TopicInterface = await getTopic(id);
			setTopic(data);
		};
		fetchTopic(route.params.topic_id);
	}, []);

	return (
		<View style={styles.commentPage}>
			{topic ? (
				<>
					<TopicCard topic={topic} navigation={navigation} isStatic />
					<CommentList topic_id={topic.id} />
				</>
			) : (
				<Text>Loading topic</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	commentPage: {
		flex: 1,
	},
});
