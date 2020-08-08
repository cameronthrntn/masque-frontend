import axios from 'axios';
import { TopicInterface, CommentInterface } from '../interfaces'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function getTopics() {
  console.log('fetching topics');
  try {
    const { data }: { data: TopicInterface[] } = await instance.get('/topics')
    return data
  } catch (e) {
    console.log(e)
    return [{ id: 0, title: 'title not found', content: '', created_at: '', updated_at: '', user_id: 0 }];
  }
}

export async function getComments(topic_id: number) {
  console.log('fetching comments');
  try {
    const { data }: { data: CommentInterface[] } = await instance.get(`/topics/${topic_id}/comments`)
    return data
  } catch (e) {
    console.log(e)
    return [
      { 
        id: 0, 
        content: 'comment not found',
        created_at: '',
        updated_at: '',
        mask_id: 0,
        reply_id: 0,
        topic_id: 0,
        design: 'blank',colour: 'blank' }];
  }
}