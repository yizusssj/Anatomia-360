import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export async function saveQuizAttempt({
  uid,
  systemId,
  questionCount,
  score,
  percent,
}) {
  if (!uid) throw new Error("No hay uid para guardar el intento.");

  await addDoc(collection(db, "quizAttempts"), {
    uid,
    systemId,
    questionCount,
    score,
    percent,
    createdAt: serverTimestamp(),
  });

  const progressRef = doc(db, "progress", `${uid}_${systemId}`);
  const progressSnap = await getDoc(progressRef);

  let attempts = 1;
  let totalScore = percent;
  let average = percent;

  if (progressSnap.exists()) {
    const data = progressSnap.data();
    attempts = (data.attempts || 0) + 1;
    totalScore = (data.totalScore || 0) + percent;
    average = Math.round(totalScore / attempts);
  }

  await setDoc(progressRef, {
    uid,
    systemId,
    attempts,
    totalScore,
    average,
    updatedAt: serverTimestamp(),
  });
}

export async function getUserProgress(uid) {
  if (!uid) return {};

  const q = query(collection(db, "progress"), where("uid", "==", uid));
  const snap = await getDocs(q);

  const result = {};

  snap.forEach((docItem) => {
    const data = docItem.data();

    result[data.systemId] = {
      attempts: data.attempts || 0,
      totalScore: data.totalScore || 0,
      average: data.average || 0,
    };
  });

  return result;
}

export async function getLastQuizAttempt(uid) {
  if (!uid) return null;

  const q = query(
    collection(db, "quizAttempts"),
    where("uid", "==", uid)
  );

  const snap = await getDocs(q);

  if (snap.empty) return null;

  let latest = null;

  snap.forEach((docItem) => {
    const data = docItem.data();

    if (!latest) {
      latest = data;
      return;
    }

    const currentDate =
      data.createdAt?.seconds ? data.createdAt.seconds : 0;
    const latestDate =
      latest.createdAt?.seconds ? latest.createdAt.seconds : 0;

    if (currentDate > latestDate) {
      latest = data;
    }
  });

  return latest;
}

export async function getUsedQuestionIds(uid, systemId) {
  if (!uid || !systemId) return [];

  const usedRef = doc(db, "usedQuestions", `${uid}_${systemId}`);
  const usedSnap = await getDoc(usedRef);

  if (!usedSnap.exists()) return [];

  const data = usedSnap.data();
  return data.usedQuestionIds || [];
}

export async function saveUsedQuestionIds(uid, systemId, questionIds) {
  if (!uid || !systemId) return;

  const usedRef = doc(db, "usedQuestions", `${uid}_${systemId}`);
  const usedSnap = await getDoc(usedRef);

  let usedQuestionIds = [...questionIds];

  if (usedSnap.exists()) {
    const data = usedSnap.data();
    usedQuestionIds = [...new Set([...(data.usedQuestionIds || []), ...questionIds])];
  }

  await setDoc(usedRef, {
    uid,
    systemId,
    usedQuestionIds,
    updatedAt: serverTimestamp(),
  });
}