import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { mainColour, mainLight, red, mainDark } from '../../../style_variables';
import { TopicInterface } from '../../interfaces';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import Mask from './Mask';

const secondsToHms = (d: number) => {
	var h = Math.floor(d / 3600);
	var m = Math.floor((d % 3600) / 60);
	var s = Math.floor((d % 3600) % 60);

	var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
	var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
	var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
	return hDisplay + mDisplay + sDisplay;
};

export default function TopicCard({
	topic,
	navigation,
	isStatic,
}: {
	topic: TopicInterface;
	navigation: any;
	isStatic: boolean;
}) {
	const date = new Date(topic.created_at);
	const timerVal = (Date.now() - date.getTime()) / 1000;
  const [timeLeft] = useState<number>(7200 - timerVal);
  
	return isStatic ? (
		<View style={styles.topicCard}>
			<View style={styles.commentTopicWrapper}>
				<Mask mask={topic.design} colour={topic.colour} />
				<Text style={styles.title}>{topic.title}...</Text>
			</View>
			<Text style={styles.content}>{topic.content}</Text>
			<CountDown
				until={timeLeft}
				onFinish={() => alert('finished')}
				size={20}
				style={styles.countdown}
				digitStyle={styles.countdownDigits}
				digitTxtStyle={styles.mainColour}
				separatorStyle={styles.mainColour}
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
	mainColour: {
		color: mainColour,
	},
});
