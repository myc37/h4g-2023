export type MarkerMetadata = {
  id: string;
  location: google.maps.LatLngLiteral;
  title?: string;
};

export type MarkerMetadataWithoutId = Omit<MarkerMetadata, 'id'>;
