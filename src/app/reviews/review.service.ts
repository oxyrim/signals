import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private reviewsUrl = '/api/reviews';
}
