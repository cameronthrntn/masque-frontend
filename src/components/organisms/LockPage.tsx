import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Lock } from "../../Images/icons";
import { mainLight } from "../../../style_variables";

export default function LockPage({ internal = false }: { internal?: boolean }) {
	return (
		<View
			style={[
				styles.wrapper,
				internal
					? {
							width: Dimensions.get("window").width,
							height: Dimensions.get("window").height,
							flexDirection: "column"
					  }
						: {
							width: Dimensions.get("window").width,
							flexDirection: "row",
							opacity: 0.4,
							bottom: 0,
							left: 0,
							top: 0,
							right: 0
					  }
			]}
		>
			<Lock style={styles.lockIcon} />
			{internal && (
				<Text style={styles.lockText}>
					This thread no longer exists. It can not be interacted with.
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		backgroundColor: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		opacity: 0.6
	},
	lockIcon: {
		height: 100,
		width: 100
	},
	lockText: {
		color: mainLight,
		width: 200,
		textAlign: "center",
		fontSize: 20
	}
});
