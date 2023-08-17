export interface ApiResponseInterface<T> {
  items: T[];
  totalCount: number;
  skip?: number;
  take?: number;
}
