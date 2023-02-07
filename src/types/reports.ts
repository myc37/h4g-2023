export type Comment = {
  author: string;
  content: string;
  createdAt: string;
};

export type Report = {
  imgFullPaths: string[];
  details: string;
  isLocationLatLng: boolean;
  location: string;
  locationDescription: string;
  comments: Comment[];
};
