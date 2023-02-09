export type Comment = {
  author: string;
  content: string;
  createdAt: string;
};

export type Report = {
  id: string;
  imgFullPaths: string[];
  details: string;
  location: google.maps.LatLngLiteral;
  locationDescription: string;
  comments: Comment[];
};

export type ReportWithoutId = Omit<Report, 'id'>;
