import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import {
	Thief,
	Hyottoko,
	Calacas,
	Hannya,
	Kitsune,
	Opera,
	Festima,
	Carnivale,
	Huichol,
	Tragedy,
	Comedy,
} from '../../Images/masks';
import {
	red,
	navy,
	cyan,
	purple,
	pink,
	orange,
	yellow,
	green,
	mainColour,
	mainLight,
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
		case 'kitsune':
			return <Kitsune style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'opera':
			return <Opera style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'festima':
			return <Festima style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'carnivale':
			return <Carnivale style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'huichol':
			return <Huichol style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'tragedy':
			return <Tragedy style={styles.maskStyle as StyleProp<ViewStyle>} />;
		case 'comedy':
			return <Comedy style={styles.maskStyle as StyleProp<ViewStyle>} />;
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
		borderColor: mainLight,
		borderWidth: 2,
		marginRight: 15,
	},
	maskStyle: { color: '#000' },
});
