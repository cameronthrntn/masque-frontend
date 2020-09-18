import instance from './instance'
import { CommentInterface } from "../../interfaces";

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

export async function postComment(comment: string, user_id: number, topic_id: number, reply_id: number) {
  try {
    const { data }: { data: CommentInterface } = await instance.post(
      `/topics/${topic_id}/comments`, { comment, user_id, topic_id, reply_id }
    );
    return data;
  } catch (e) {
    throw e;
  }
}