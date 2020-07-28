export interface TopicInterface {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export interface CommentInterface {
  id: number;
  content: string;
  mask: string;
  colour: string;
}