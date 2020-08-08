import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { mainColour, mainColourLight } from '../../../style_variables';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NewTopic } from '../../Images/icons';

export default function NewThread({ navigation }: { navigation: any }) {
	const [highlighted, toggleHighlighted] = useState<boolean>(false);
	return (
		<View style={styles.button}>
			<TouchableHighlight
				activeOpacity={1}
				underlayColor="#FFF"
				onShowUnderlay={() => {
					toggleHighlighted(true);
				}}
				onHideUnderlay={() => {
					toggleHighlighted(false);
				}}
				onPress={() => {
					navigation.navigate('TopicPost', {
						navigation: navigation,
					});
				}}
				style={{ borderRadius: 100 }}
			>
				<NewTopic
					style={styles.buttonIcon}
					color={highlighted ? mainColourLight : mainColour}
				/>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 60,
		height: 60,
		position: 'absolute',
		right: 10,
		bottom: 15,
	},
	buttonIcon: {
		elevation: 2,
		borderRadius: 100,
	},
});
