import { useState } from "react";
import {
  type DocumentData,
  doc,
  getDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

export const useDoc = () => {
  const [value, setValue] = useState<DocumentData>();
  const [loading, setLoading] = useState(false);

  const getDocument = async (document: string) => {
    setLoading(true);
    const docRef = doc(db, "config", document);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      setValue(snap.data());
      setLoading(false);
    } else {
      console.log("no doc");
      setLoading(false);
    }
  };

  return { getDocument, loading, value };
};

export const useDocs = () => {
  const [values, setValues] = useState<DocumentData[]>();
  const [loading, setLoading] = useState(false);

  const getDocuments = async (collect: string) => {
    setLoading(true);

    const qref = query(collection(db, collect));
    const snapshot = await getDocs(qref);
    const docs: DocumentData[] = [];
    const documents = snapshot.docs.map((doc) => {
      return doc.data();
    });
    console.log(documents);
    snapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() };

      docs.push(data);
      setValues(docs);
      setLoading(false);
    });
  };

  return {
    getDocuments,
    values,
    loading,
  };
};
