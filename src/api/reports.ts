import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '~/lib/firebase';
import { Report } from '~/types/reports';

export const fetchReports = () => {};

export const uploadReport = async (report: Report) => {
  const db = useFirestore();

  const reportRef = collection(db, 'reports');

  const newDocRef = await addDoc(reportRef, report);

  return newDocRef.id;
};
