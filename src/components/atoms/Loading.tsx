import React, { useRef, useEffect } from "react";
import Logo from "../../Images/masque_logo.svg";
import { mainColour, mainDark } from "../../../style_variables";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function Loading({ items }: { items: string }) {
	const spinFlip = useRef(new Animated.Value(1)).current;

	const duration = 200;

	const spin = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(spinFlip, {
					toValue: -1,
					duration: duration,
					useNativeDriver: false
				}),
				Animated.timing(spinFlip, {
					toValue: 1,
					duration: duration,
					useNativeDriver: false
				})
			])
		).start();
	};

	useEffect(() => {
		spin();
	}, []);

	return (
		<View style={styles.loadingContainer}>
			<Animated.View
				style={[
					styles.logoContainer,
					{ width: 75, transform: [{ scaleX: spinFlip }] }
				]}
			>
				<Logo
					style={styles.logo}
					color={mainColour}
					preserveAspectRatio="none"
				/>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	logoContainer: {
		height: 75,
		marginBottom: 25,
		marginTop: 50
	},
	logo: { width: "80%", height: 75 }
});
