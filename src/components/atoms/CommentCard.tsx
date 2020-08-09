import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CommentInterface } from '../../interfaces';
import { mainDark, mainColour, mainLight } from '../../../style_variables';
import Mask from './Mask';

export default function CommentCard({
	comment,
}: {
	comment: CommentInterface;
}) {
	return (
		<View style={styles.commentCard}>
			<Mask mask={comment.design} colour={comment.colour} />
			<Text style={styles.content}>{comment.content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	commentCard: {
		color: mainLight,
		borderBottomColor: mainColour,
		borderWidth: 0.2,
		marginTop: 2,
		padding: 15,
		paddingTop: 15,
		paddingBottom: 15,
		flex: 1,
		flexDirection: 'row',
	},
	content: {
		color: mainLight,
		flex: 1,
		flexWrap: 'wrap',
	},
});
