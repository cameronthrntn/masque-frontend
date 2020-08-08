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
import { Thief } from '../../Images/masks';

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
			<View style={styles.maskWrapper}>
				<Thief color='black'/>
			</View>
			<TopicTile topic={topic} />
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
	maskWrapper: {
		width: 75,
		height: 75,
		backgroundColor: 'red',
		borderRadius: 100
	}
});
