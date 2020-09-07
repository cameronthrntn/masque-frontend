import axios from "axios";
import { TopicInterface, CommentInterface } from "../interfaces";

const instance = axios.create({
	baseURL: "http://localhost:3000"
});

export async function getTopics(
	distance: string,
	latitude: number,
	longitude: number,
	page: number
) {
	const amount = 10;
	try {
		const { data }: { data: TopicInterface[] } = await instance.get("/topics", {
			params: { distance, latitude, longitude, amount, page }
		});
		return data;
	} catch (e) {
		throw e;
	}
}

export async function getTopic(id: number) {
	try {
		const { data }: { data: TopicInterface } = await instance.get(
			`/topics/${id}`
		);
		return data;
	} catch (e) {
		throw e;
	}
}

export async function getComments(topic_id: number) {
	try {
		const { data }: { data: CommentInterface[] } = await instance.get(
			`/topics/${topic_id}/comments`
		);
		return data;
	} catch (e) {
		throw e;
	}
}

export async function postTopic(
	title: string,
	content: string,
	user_id: number,
	longitude: number,
	latitude: number
) {
	try {
		const { data }: { data: TopicInterface } = await instance.post("/topics", {
			title,
			content,
			user_id,
			longitude,
			latitude
		});
		return data;
	} catch (e) {
		throw e;
	}
}
