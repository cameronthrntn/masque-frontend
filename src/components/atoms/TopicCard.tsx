import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableHighlight,
} from 'react-native';
import {
	mainColour,
	mainDark,
	mainLight,
	red,
	disabled,
} from '../../../style_variables';
import { TopicInterface } from '../../interfaces';
import { Thief } from '../../Images/masks';

// const TopicTile = ({ topic }: { topic: TopicInterface }) => <></>;

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
				<View style={styles.maskWrapper}>
					<Thief color="black" />
				</View>
				<Text style={styles.title}>{topic.title}...</Text>
			</View>
			<Text style={styles.content}>{topic.content}</Text>
			<Text style={styles.timer}>Time left: 15m 43s</Text>
			{/* <TopicTile topic={topic} /> */}
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

			{/* <TopicTile topic={topic} /> */}
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
	maskWrapper: {
		width: 50,
		height: 50,
		backgroundColor: red,
		borderRadius: 100,
		marginRight: 15,
	},
	commentTopicWrapper: {
		flex: 1,
		// borderColor: 'red',
		// borderWidth: 1,
		flexDirection: 'row',
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	timer: {
		borderColor: mainLight,
		borderTopWidth: 0.2,
		borderBottomWidth: 0.2,
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: 15,
		color: mainColour
	},
});
