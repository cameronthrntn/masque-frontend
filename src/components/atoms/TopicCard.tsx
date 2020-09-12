import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import {
	mainColour,
	mainLight,
	mainDark,
	disabled
} from "../../../style_variables";
import { TopicInterface } from "../../interfaces";
import CountDown from "react-native-countdown-component";
import Mask from "./Mask";
import { LockPage } from "../organisms";

export default function TopicCard({
	topic,
	navigation,
	isStatic,
	expired = false,
	setExpired = () => {}
}: {
	topic: TopicInterface;
	navigation: any;
	isStatic: boolean;
	expired?: boolean;
	setExpired?: any;
}) {
	const date = new Date(topic.created_at);
	const timerVal = (Date.now() - date.getTime()) / 1000;
	const [timeLeft] = useState<number>(7200 - timerVal);
	const [isExpired, setIsExpired] = useState<boolean>(expired);

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
				style={commentCountdown.countdown}
				digitStyle={commentCountdown.countdownDigits}
				digitTxtStyle={{ color: expired ? disabled : mainColour }}
				separatorStyle={{ color: expired ? disabled : mainColour }}
				timeToShow={["H", "M", "S"]}
				timeLabels={{}}
				showSeparator
			/>
		</View>
	) : (
		<TouchableHighlight
			activeOpacity={1}
			underlayColor="#000"
			onPress={() => navigation.navigate("Comments", { topic_id: topic.id })}
			style={styles.topicCard}
			disabled={isExpired}
		>
			<>
				<Text style={styles.title}>{topic.title}</Text>
				<CountDown
					until={timeLeft}
					onFinish={() => {
						setExpired(true);
						setIsExpired(true);
					}}
					size={13}
					style={staticCountdown.countdown}
					digitStyle={staticCountdown.countdownDigits}
					digitTxtStyle={{ color: isExpired ? disabled : mainColour }}
					separatorStyle={{ color: isExpired ? disabled : mainColour }}
					timeToShow={["H", "M", "S"]}
					timeLabels={{}}
					showSeparator
				/>
				<Text style={styles.content}>{topic.content}</Text>
				<Text style={styles.commentCount}>
					{Math.round(Math.random() * 10)} comments
				</Text>
				{isExpired && <LockPage />}
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
		paddingBottom: 0,
		paddingRight: 0
	},
	commentTopicWrapper: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 15
	},
	title: {
		fontWeight: "bold",
		color: mainLight,
		fontSize: 16,
		marginRight: 15,
		flex: 1,
		flexWrap: "wrap"
	},
	commentCount: {
		color: mainColour,
		textAlign: "right",
		alignSelf: "flex-end",
		margin: 10
	},
	content: {
		color: mainLight,
		marginRight: 15
	}
});

const commentCountdown = StyleSheet.create({
	countdown: {
		marginTop: 10
	},
	countdownDigits: {
		backgroundColor: "rgba(0,0,0,0)",
		color: mainColour
	}
});

const staticCountdown = StyleSheet.create({
	countdownDigits: {
		backgroundColor: "rgba(0,0,0,0)",
		color: mainColour
	},
	countdown: {
		width: 110
	}
});
