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
	Broken,
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
	disabled,
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
			return <Broken style={styles.maskStyle as StyleProp<ViewStyle>} />;
	}
};

interface ColoursInterface {
	[string: string]: string;
}

export default function Mask({
	mask,
	colour,
	expired,
}: {
	mask: string;
	colour: string;
	expired: boolean;
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
	console.log(expired);

	return (
		<View
			style={[
				styles.maskWrapper,
				{ backgroundColor: expired ? disabled : colours[colour] },
			]}
		>
			{getMask(expired ? 'expired' : mask)}
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
