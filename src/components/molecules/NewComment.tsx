import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	TextInput,
	StyleProp,
	ViewStyle,
} from "react-native";
import {
	disabled,
	mainColour,
	mainDark,
	mainLight,
} from "../../../style_variables";
import { SubmitIcon } from "../../Images/icons";

export default function NewComment() {
	const [comment, setComment] = useState<string>("");
	const [canSubmit, setCanSubmit] = useState<boolean>(false);

	useEffect(() => {
		comment.length ? setCanSubmit(true) : setCanSubmit(false);
	}, [comment]);

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
			/>
		</View>
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
