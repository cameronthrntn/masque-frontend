import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Thief, Hyottoko, Calacas, Hannya } from '../../Images/masks';
import {
	red,
	navy,
	cyan,
	purple,
	pink,
	orange,
	yellow,
	green,
} from '../../../style_variables';

const getMask = (mask: string) => {
	switch (mask) {
		case 'thief':
			return <Thief style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'hyottoko':
			return <Hyottoko style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'hannya':
			return <Hannya style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'calacas':
			return <Calacas style={styles.maskStyle as StyleProp<ViewStyle>} />;
		default:
			return <></>;
	}
};

interface ColoursInterface {
	[string: string]: string;
}

export default function Mask({
	mask,
	colour,
}: {
	mask: string;
	colour: string;
}) {
	const colours: ColoursInterface = {
		red,
		navy,
		cyan,
		purple,
		pink,
		orange,
		yellow,
		green,
	};
	return (
		<View style={[styles.maskWrapper, { backgroundColor: colours[colour] }]}>
			{getMask(mask)}
		</View>
	);
}

const styles = StyleSheet.create({
	maskWrapper: {
		width: 50,
		height: 50,
		borderRadius: 100,
		marginRight: 15,
	},
	maskStyle: { color: '#000' },
});
