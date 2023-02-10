export type Comment = {
  author: string;
  content: string;
  createdAt: number;
};

export type CommentWithoutCreatedAt = Omit<Comment, 'createdAt'>;

export type Report = {
  id: string;
  imgFullPaths: string[];
  details: string;
  location: google.maps.LatLngLiteral;
  locationDescription: string;
  comments: Comment[];
  likes: number;
};

export type ReportWithoutId = Omit<Report, 'id'>;
