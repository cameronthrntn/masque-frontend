import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { mainColour } from '../../../style_variables';
import { render } from 'react-dom';

export default function TopicPost({ navigation }: { navigation: any }) {
	const [topicTitle, setTopicTitle] = useState('');
	const [topicText, setTopicText] = useState('');
	return (
		<View style={styles.inputContainer}>
			<TextInput
				onChangeText={setTopicTitle}
				value={topicTitle}
				style={[styles.input, styles.titleInput]}
				multiline
				numberOfLines={2}
				autoCapitalize='words'
				maxLength={125}
			/>
			<TextInput
				onChangeText={setTopicText}
				value={topicText}
				style={[styles.input, styles.textInput]}
				multiline
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: { padding: 15 },
	input: {
		borderBottomColor: mainColour,
		borderBottomWidth: 1,
		color: mainColour,

	},
	titleInput: {
		fontWeight: 'bold',
		marginBottom: 15
	},
	textInput: {}
});
