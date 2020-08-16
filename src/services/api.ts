import axios from 'axios';
import { TopicInterface, CommentInterface } from '../interfaces'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function getTopics(distance: number, latitude: number, longitude: number) {
  console.log(distance, latitude, longitude);
  try {
    const { data }: { data: TopicInterface[] } = await instance.get('/topics', { params: { distance, latitude, longitude } })
    return data
  } catch (e) {
    throw e;
  }
}

export async function getTopic(id: number) {
  try {
    const { data }: { data: TopicInterface } = await instance.get(`/topics/${id}`);
    return data
  } catch (e) {
    throw e;
  }
}

export async function getComments(topic_id: number) {
  try {
    const { data }: { data: CommentInterface[] } = await instance.get(`/topics/${topic_id}/comments`)
    return data
  } catch (e) {
    throw e;
  }
}