import { Feedback } from '../../domain/model/feedback';
import { FeedbackRepository } from '../../domain/port/FeedbackRepository';

export class MongoFeedbackRepository implements FeedbackRepository {
  constructor() {}

  createFeedback(feedback: Feedback): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
