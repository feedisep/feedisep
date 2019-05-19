export interface Ticket {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createDate: string;
  editorId: number;
  updateDate: string;
  priority: number;
  state: string;
  upvote: number;
//  for Research purposes
  serial: string;
}
