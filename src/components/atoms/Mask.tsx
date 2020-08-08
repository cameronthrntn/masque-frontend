import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Thief, Hyottoko } from '../../Images/masks';
import { red } from '../../../style_variables';

const getMask = (mask: string) => {
	return mask === 'thief' ? (
		<Thief style={styles.maskStyle} />
	) : (
		<Hyottoko style={styles.maskStyle} />
	);
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
	const colours: ColoursInterface = { red: red, blue: '#0f0' };
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
