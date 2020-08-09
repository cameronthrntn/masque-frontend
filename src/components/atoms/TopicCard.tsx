import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { mainColour, mainLight } from '../../../style_variables';
import { TopicInterface } from '../../interfaces';
import Mask from './Mask';

export default function TopicCard({
	topic,
	navigation,
	isStatic,
}: {
	topic: TopicInterface;
	navigation: any;
	isStatic: boolean;
}) {
	return isStatic ? (
		<View style={styles.topicCard}>
			<View style={styles.commentTopicWrapper}>
				<Mask mask={topic.design} colour={topic.colour} />
				<Text style={styles.title}>{topic.title}...</Text>
			</View>
			<Text style={styles.content}>{topic.content}</Text>
			<Text style={styles.timer}>Time left: 15m 43s</Text>
		</View>
	) : (
		<TouchableHighlight
			activeOpacity={1}
			underlayColor="#000"
			onPress={() => {
				navigation.navigate('Comments', {
					topic_id: topic.id,
					navigation: navigation,
				});
			}}
			style={styles.topicCard}
		>
			<>
				<Text style={styles.title}>{topic.title}</Text>
				<Text style={styles.content}>{topic.content}</Text>
			</>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	topicCard: {
		color: mainLight,
		borderBottomColor: mainColour,
		borderBottomWidth: 0.2,
		padding: 15,
		paddingBottom: 15,
	},
	commentTopicWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},
	title: {
		fontWeight: 'bold',
		color: mainLight,
		fontSize: 16,
		flex: 1,
		flexWrap: 'wrap',
	},
	content: {
		color: mainLight,
	},
	timer: {
		borderColor: mainLight,
		borderTopWidth: 0.2,
		borderBottomWidth: 0.2,
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: 15,
		color: mainColour,
	},
});
