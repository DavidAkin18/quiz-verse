import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(collection(db, "leaderboard"), orderBy("score", "desc"), limit(10));
      const snapshot = await getDocs(q);
      setLeaders(snapshot.docs.map((doc) => doc.data()));
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7]">
        🏆 Leaderboard
      </h2>
      <ul className="space-y-2">
        {leaders.map((user, i) => (
          <li key={i} className="flex justify-between text-gray-700 font-medium">
            <span>
              {i + 1}. {user.username}
            </span>
            <span>{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
