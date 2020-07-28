import axios from 'axios';
import { TopicInterface } from '../interfaces'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function getTopics() {
  try {
    const { data }: { data: TopicInterface[] } = await instance.get('/topics')
    return data
  } catch (e) {
    console.log(e)
    return [{ id: 0, title: 'title not found', content: '', created_at: '', updated_at: '', user_id: 0 }];
  }
}

export async function getComments(topic_id: number) {
  return [{
    id: 1,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 2,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 3,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 4,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 5,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 6,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 7,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 8,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 9,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 10,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 11,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 12,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 13,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 14,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }, {
    id: 15,
    content: 'comment here',
    mask: 'tengu',
    colour: 'red'
  }, {
    id: 16,
    content: 'comment here',
    mask: 'opera',
    colour: 'black'
  }]
}