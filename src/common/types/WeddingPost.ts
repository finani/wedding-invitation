import { DocumentData } from 'firebase/firestore';

export class WeddingPost {
  constructor(id: string, data: DocumentData) {
    this.id = id;
    this.name = data.name;
    this.message = data.message;
    this.date = new Date(data.timestamp);
  }
  id: string;
  name: string;
  message: string;
  date: Date;
}
