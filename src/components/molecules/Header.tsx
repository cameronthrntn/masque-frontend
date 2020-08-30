import React, { useState } from 'react';
import {
	mainColour,
	mainDark,
	mainColourLight,
	mainLight,
} from '../../../style_variables';
import Logo from '../../Images/masque_logo.svg';
import { Settings } from '../../Images/icons';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
	const [highlighted, toggleHighlighted] = useState<boolean>(false);
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={{ width: 30 }} />
				<Logo style={styles.headerIcon} color={mainColour} />
				<TouchableHighlight
					activeOpacity={1}
					underlayColor={mainDark}
					onShowUnderlay={() => {
						toggleHighlighted(true);
					}}
					onHideUnderlay={() => {
						toggleHighlighted(false);
					}}
					onPress={() => {}}
				>
					{highlighted ? (
						<Settings style={styles.tilted} />
					) : (
						<Settings style={styles.headerIcon} />
					)}
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: mainDark,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: Dimensions.get('window').width,
		height: 40,
		borderBottomColor: mainColour,
		borderBottomWidth: 0.2,
		padding: 10,
	},
	headerIcon: {
		height: 30,
		width: 30,
		color: mainColour,
	},
	tilted: {
		color: mainColour,
		height: 30,
		width: 30,
		transform: [{ rotate: '25deg' }],
	},
});
