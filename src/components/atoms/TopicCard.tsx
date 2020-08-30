import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {
	mainColour,
	mainLight,
	mainDark,
	disabled,
} from '../../../style_variables';
import { TopicInterface } from '../../interfaces';
import CountDown from 'react-native-countdown-component';
import Mask from './Mask';
import { Lock } from '../../Images/icons';
import LockPage from '../organisms/LockPage';

export default function TopicCard({
	topic,
	navigation,
	isStatic,
	expired,
	setExpired,
}: {
	topic: TopicInterface;
	navigation: any;
	isStatic: boolean;
	expired: boolean;
	setExpired: any;
}) {
	const date = new Date(topic.created_at);
	const timerVal = (Date.now() - date.getTime()) / 1000;
	const [timeLeft] = useState<number>(7200 - timerVal);

	return isStatic ? (
		<View style={styles.topicCard}>
			<View style={styles.commentTopicWrapper}>
				<Mask mask={topic.design} colour={topic.colour} expired={expired} />
				<Text style={styles.title}>{topic.title}...</Text>
			</View>
			<Text style={styles.content}>{topic.content}</Text>
			<CountDown
				until={timeLeft}
				onFinish={() => setExpired(true)}
				size={20}
				style={styles.countdown}
				digitStyle={styles.countdownDigits}
				digitTxtStyle={{ color: expired ? disabled : mainColour }}
				separatorStyle={{ color: expired ? disabled : mainColour }}
				timeToShow={['H', 'M', 'S']}
				timeLabels={{}}
				showSeparator
			/>
		</View>
	) : (
		<TouchableHighlight
			activeOpacity={1}
			underlayColor="#000"
			onPress={() => navigation.navigate('Comments', { topic_id: topic.id })}
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
	countdown: {
		marginTop: 10,
	},
	countdownDigits: {
		backgroundColor: mainDark,
		color: mainColour,
	},
});
