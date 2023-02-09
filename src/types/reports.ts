export type Comment = {
  author: string;
  content: string;
  createdAt: string;
};

export type LatLng = {
  lat: number;
  lng: number;
};

export type Report = {
  id: string;
  imgFullPaths: string[];
  details: string;
  location: LatLng;
  locationDescription: string;
  comments: Comment[];
};

export type ReportWithoutId = Omit<Report, 'id'>;
