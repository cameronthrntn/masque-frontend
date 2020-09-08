import React, { useRef, useEffect } from "react";
import Logo from "../../Images/masque_logo.svg";
import { mainColour } from "../../../style_variables";
import { StyleSheet, Animated } from "react-native";

export default function Loading({
	height,
	width
}: {
	height: number;
	width: number;
}) {
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
		<Animated.View
			style={[{ width, height, transform: [{ scaleX: spinFlip }] }]}
		>
			<Logo color={mainColour} preserveAspectRatio="none" />
		</Animated.View>
	);
}
