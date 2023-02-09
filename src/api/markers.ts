import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useFirestore } from '~/lib/firebase';
import type { MarkerMetadata, MarkerMetadataWithoutId } from '~/types/markers';

export const fetchMarkers = async () => {
  const db = useFirestore();

  const markersRef = collection(db, 'markers');
  const collectionSnap = await getDocs(markersRef);

  const markers: MarkerMetadata[] = [];
  collectionSnap.forEach((doc) => markers.push({ id: doc.id, ...doc.data() } as MarkerMetadata));

  return markers;
};

export const uploadMarker = async (markerWithoutId: MarkerMetadataWithoutId) => {
  const db = useFirestore();

  const markersRef = collection(db, 'markers');
  const newDocRef = await addDoc(markersRef, markerWithoutId);

  return { id: newDocRef.id, ...markerWithoutId } as MarkerMetadata;
};
