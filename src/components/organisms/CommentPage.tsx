import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
		<View style={styles.commentPage}>
			<TopicCard topic={topic} navigation={navigation} isStatic />
			<CommentList topic_id={topic.id} />
		</View>
	);
}

const styles = StyleSheet.create({
	commentPage: {
		flex: 1
	}
})