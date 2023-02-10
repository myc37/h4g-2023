export type Comment = {
  author: string;
  content: string;
  createdAt: number;
};

export type CommentWithoutCreatedAt = Omit<Comment, 'createdAt'>;

export const reportTypes = ['Mobility issues', 'Visual impairment', 'Auditory issues'] as const;
export type ReportType = (typeof reportTypes)[number];

export type Report = {
  id: string;
  imgFullPaths: string[];
  details: string;
  location: google.maps.LatLngLiteral;
  locationDescription: string;
  comments: Comment[];
  likes: number;
  type: ReportType;
};

export type ReportWithoutId = Omit<Report, 'id'>;
