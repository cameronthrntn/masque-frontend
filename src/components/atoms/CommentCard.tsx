import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CommentInterface } from '../../interfaces';

export default function CommentCard({ comment }: { comment: CommentInterface }) {
	return (
		<View style={styles.commentCard}>
			<Text style={styles.content}>{comment.content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	commentCard: {
		color: 'white',
		borderBottomColor: '#d1c62e',
		borderWidth: 0.2,
    marginTop: 2,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16
  },
  content: {
    color: "white"
  }
});
