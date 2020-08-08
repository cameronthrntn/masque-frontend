import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableHighlight,
} from 'react-native';
import { mainColour, mainDark, mainLight } from '../../../style_variables';
import { TopicInterface } from '../../interfaces';

const TopicTile = ({ topic }: { topic: TopicInterface }) => (
	<>
		<Text style={styles.title}>{topic.title}</Text>
		<Text style={styles.content}>{topic.content}</Text>
	</>
);

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
			<TopicTile topic={topic} />
		</View>
	) : (
		<TouchableHighlight
			activeOpacity={1}
			underlayColor="#000"
			onPress={() => {
				navigation.navigate('Comments', {
					topic: topic,
					navigation: navigation,
				});
			}}
			style={styles.topicCard}
		>
			<TopicTile topic={topic} />
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	topicCard: {
		color: mainLight,
		borderBottomColor: mainColour,
		borderWidth: 0.2,
		marginTop: 2,
		padding: 15,
		paddingTop: 15,
		paddingBottom: 15,
	},
	title: {
		fontWeight: 'bold',
		color: mainLight,
		fontSize: 16,
	},
	content: {
		color: mainLight,
	},
});
