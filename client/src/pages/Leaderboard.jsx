import React from 'react';
import axios from 'axios';
import { getLeaderBoard } from '../utils/APIRoutes';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Leaderboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    async function getLeaders() {
      try {
        const leaders = await axios.get(getLeaderBoard);
        const leadersArray = [];
        for (let index = 0; index < 5; index++)
          leadersArray.push({id: index + 1, name: leaders.data.leaders[index].name, points: leaders.data.leaders[index].sum});
        setUsers(leadersArray);
      } catch (error) {
        console.log(error);
        navigate('/home');
      }
    }
    getLeaders();
  }, [])


  return (
    <div className="flex justify-center items-center align-center min-h-screen text-dark">
      <div className="bg-wh w-[70%] rounded-lg p-10 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out opacity-100">
        <h1 className="text-2xl font-bold mb-5">Leaderboard</h1>
        <table className="table-auto w-full border border-mint">
          <thead>
            <tr className="bg-mint">
              <th className="border border-mint p-2">Rank</th>
              <th className="border border-mint p-2">Name</th>
              <th className="border border-mint p-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border border-mint transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-dark hover:text-mint">
                <td className="border border-mint p-2 text-center">{index + 1}</td>
                <td className="border border-mint p-2 text-center">{user.name}</td>
                <td className="border border-mint p-2 text-center">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
