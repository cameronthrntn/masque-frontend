export interface TopicInterface {
  id: number;
  title: string;
  content: string;
  created_at: string;
  design: string;
  colour: string;
  user_id: number;
}

export interface CommentInterface {
  id: number;
  content: string;
  design: string;
  colour: string;
  created_at: string;
  updated_at: string;
  mask_id: number;
  reply_id: number;
}

export interface CoordinatesInterface {
  latitude: number;
  longitude: number
}

export interface MaskInterface {
  design: string;
  colour: string;
  user_id: number;
  topic_id: number;
}