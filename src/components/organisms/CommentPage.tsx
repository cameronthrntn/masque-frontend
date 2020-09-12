import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	RefreshControl,
	FlatList,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import { TopicCard, CommentCard } from '../atoms';
import { TopicInterface, CommentInterface } from '../../interfaces';
import { getTopic } from '../../services/api';
import { getComments } from '../../services/api';
import { mainColour, red } from '../../../style_variables';
import LockPage from './LockPage';

export default function CommentPage({
	route,
	navigation,
}: {
	route: any;
	navigation: any;
}) {
	const [topic, setTopic] = useState<TopicInterface>();
	const [comments, setComments] = useState<CommentInterface[]>([]);
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [expired, setExpired] = useState<boolean>(false);

	const onRefresh = async () => {
		setRefreshing(true);
		if (topic) {
			const data: CommentInterface[] = await getComments(topic.id);
			setComments(data);
		}
		setRefreshing(false);
	};

	useEffect(() => {
		const fetchTopic = async (id: number) => {
			const topic: TopicInterface = await getTopic(id);
			const comments: CommentInterface[] = await getComments(topic.id);
			setTopic(topic);
			setComments(comments);
		};
		fetchTopic(route.params.topic_id);
	}, []);

	const getList = () => {
		if (topic) {
			return comments.length ? (
				<FlatList
					data={comments}
					renderItem={({ item, index, separators }) => {
						return index === 0 ? (
							<>
								<TopicCard
									topic={topic}
									navigation={navigation}
									isStatic
									expired={expired}
									setExpired={setExpired}
								/>
								<CommentCard comment={item} expired={expired} />
							</>
						) : (
							<CommentCard comment={item} expired={expired} />
						);
					}}
					keyExtractor={(item) => item.id.toString()}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				/>
			) : (
				<>
					<TopicCard
						topic={topic}
						navigation={navigation}
						isStatic
						expired={expired}
						setExpired={setExpired}
					/>
					<Text
						style={{ alignSelf: 'center', marginTop: 20, color: mainColour }}
					>
						No Comments loaded
					</Text>
				</>
			);
		}
	};

	return (
		<View style={styles.commentPage}>
			{topic ? (
				<>
					{getList()}
					<View style={styles.commentInputSection}></View>
				</>
			) : (
				<ActivityIndicator size="large" color={mainColour} />
			)}
			{/* <LockPage /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	commentPage: {
		flex: 1,
	},
	commentInputSection: {
    height: 50,
    width: Dimensions.get("screen").width,
		borderColor: red,
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
	},
});
