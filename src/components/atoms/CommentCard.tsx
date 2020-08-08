import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CommentInterface } from '../../interfaces';
import {mainDark, mainColour, mainLight} from '../../../style_variables'

export default function CommentCard({ comment }: { comment: CommentInterface }) {
	return (
		<View style={styles.commentCard}>
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
    paddingBottom: 15
  },
  title: {
    fontWeight: "bold",
    color: mainLight,
    fontSize: 16
  },
  content: {
    color: mainLight
  }
});
