import { OneComment } from "../types/OneComment";

export const averageRating = (comments: OneComment[]) => {
  const hasRating = comments.filter(comment => comment.rating);

  const rate: number = hasRating
    .map(comment => comment.rating)
    .reduce((prev, next) => prev + next, 0) / hasRating.length;

  return Math.round(rate * 10) / 10;
}