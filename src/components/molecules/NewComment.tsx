import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	TextInput,
	StyleProp,
	ViewStyle,
	Alert,
} from "react-native";
import {
	disabled,
	mainColour,
	mainDark,
	mainLight,
} from "../../../style_variables";
import { SubmitIcon } from "../../Images/icons";
import { CommentInterface } from "../../interfaces";
import { postComment } from "../../services/api/comments";

export default function NewComment({ topic_id }: { topic_id: number }) {
	const [comment, setComment] = useState<string>("");
	const [canSubmit, setCanSubmit] = useState<boolean>(false);
	const [error, setError] = useState<number>(0);

	useEffect(() => {
		comment.length ? setCanSubmit(true) : setCanSubmit(false);
	}, [comment]);

	const submitComment = async () => {
		try {
			const posted: CommentInterface = await postComment(
				comment,
				4,
				topic_id,
				0
      );
      //TODO: post comment and show at top of list for optimistic loading
		} catch (e) {
			setError(e.response.status);
		}
	};

	return (
		<View style={styles.commentInputSection}>
			<TextInput
				onChangeText={setComment}
				value={comment}
				style={styles.input}
				multiline
				numberOfLines={2}
				autoCapitalize="sentences"
				maxLength={125}
				placeholder="Compose a response"
				placeholderTextColor={disabled}
			/>
			<SubmitIcon
				disabled={!canSubmit}
				style={[
					styles.submit,
					{ color: canSubmit ? mainColour : disabled } as StyleProp<ViewStyle>,
				]}
				onPress={submitComment}
			/>
		</View>
    //TODO: if error show a toast of submission failure
	);
}

const styles = StyleSheet.create({
	commentInputSection: {
		width: Dimensions.get("screen").width,
		borderTopColor: mainColour,
		borderTopWidth: 0.5,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		backgroundColor: mainDark,
	},
	input: {
		borderBottomColor: disabled,
		borderBottomWidth: 0.5,
		width: 300,
		color: mainLight,
	},
	submit: {
		width: 25,
		height: 25,
		marginLeft: 15,
	},
});
