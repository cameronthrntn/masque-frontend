import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.topText}>MASQUE</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1a1a1a',
		alignItems: 'flex-start',
		justifyContent: 'center',
		borderColor: 'blue',
		width: Dimensions.get('window').width,
		height: 40,
		borderBottomColor: '#d1c62e',
		borderBottomWidth: 0.2,
		overflow: 'hidden',
	},
	topText: {
		color: '#d1c62e',
		fontFamily: 'sans-serif-thin',
		paddingLeft: 20,
		fontSize: 40,
	},
});
