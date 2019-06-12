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
  campus: string;
//  for Research purposes
  serial: string;
  // to make the distinction between ticket full and ticket form
  displayTicket: boolean;
}
