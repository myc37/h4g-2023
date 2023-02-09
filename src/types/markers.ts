export type MarkerMetadata = {
  id: string;
  position: google.maps.LatLngLiteral;
  title?: string;
};

export type MarkerMetadataWithoutId = Omit<MarkerMetadata, 'id'>;
