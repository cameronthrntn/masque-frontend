import React from 'react';
import { View, Text } from 'react-native';
import { TopicCard } from '../atoms';
import CommentList from '../molecules/CommentList';
import { TopicInterface } from '../../interfaces';

export default function CommentPage({
	route,
	navigation,
}: {
	route: any;
	navigation: any;
}) {
	const { topic } = route.params;
	return (
		<View>
			<TopicCard topic={topic} navigation={navigation} isStatic />
			<CommentList topic_id={topic.id} />
		</View>
	);
}
