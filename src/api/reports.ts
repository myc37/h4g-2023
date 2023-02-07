import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useFirestore } from '~/lib/firebase';
import { Report, ReportWithoutId } from '~/types/reports';

export const fetchReports = async () => {
  const db = useFirestore();

  const reportRef = collection(db, 'reports');

  const collectionSnap = await getDocs(reportRef);
  const reports: Report[] = [];
  collectionSnap.forEach((doc) => reports.push({ id: doc.id, ...doc.data() } as Report));

  return reports;
};

export const uploadReport = async (reportWithoutId: ReportWithoutId) => {
  const db = useFirestore();

  const reportRef = collection(db, 'reports');

  const newDocRef = await addDoc(reportRef, reportWithoutId);

  return { id: newDocRef.id, ...reportWithoutId } as Report;
};
