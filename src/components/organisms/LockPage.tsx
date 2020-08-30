import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Lock } from '../../Images/icons';
import { mainLight } from '../../../style_variables';

export default function LockPage() {
	return (
		<View style={styles.wrapper}>
			<Lock style={styles.lockIcon} />
			<Text style={styles.lockText}>
				This thread no longer exists. It can not be interacted with.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		backgroundColor: 'black',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.6,
	},
	lockIcon: {
		height: 200,
		width: 200,
	},
	lockText: {
		color: mainLight,
		width: 200,
		textAlign: 'center',
		fontSize: 20,
	},
});
