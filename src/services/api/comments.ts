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