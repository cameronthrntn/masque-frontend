import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { ErrorIcon } from "../../Images/icons";
import { mainColour } from "../../../style_variables";

const getErrorMessage = (code: number) => {
	switch (code) {
		case 502:
			return "Could not connect to the server.";
		default:
			return "There was an unexpected error.";
	}
};

export default function ErrorComponent({ code }: { code: number }) {
	return (
		<View style={styles.errorContainer}>
			<ErrorIcon style={styles.maskStyle as StyleProp<ViewStyle>} />
			<Text style={[styles.errorMessage, { marginBottom: 25, fontWeight: 'bold' }]}>
				{getErrorMessage(code)}
			</Text>
			<Text style={styles.errorMessage}>Please try again later.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	errorContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	maskStyle: {
		height: 75,
		width: 75,
		marginBottom: 25,
		marginTop: 50,
		color: mainColour
	},
	errorMessage: {
		color: mainColour,
		maxWidth: 200,
		textAlign: "center",
		fontSize: 16
	}
});
