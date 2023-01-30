import { FaMedal } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdEmojiPeople } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

import Button from "../../../components/Button";

const Home = () => {
  const topTable = [
    {
      lable: "Name",
      icon: <BsFillPersonFill className="mx-1" size="1.5rem" />,
    },
    { lable: "Wins", icon: <IoMdTrophy className="mx-1" size="1.5rem" /> },
    { lable: "Second place", icon: <FaMedal className="mx-1" size="1.5rem" /> },
    { lable: "Profit", icon: <GiTakeMyMoney className="mx-1" size="1.5rem" /> },
    { lable: "Rebuy", icon: <TfiReload className="mx-1" size="1.5rem" /> },
    { lable: "Entry", icon: <MdEmojiPeople className="mx-1" size="1.5rem" /> },
  ];

  const people = [
    {
      lable: "Purda Catalina",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Rares Păscan",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Alex Todoran",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "David Petric",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Andrei Lucaciu",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Laura Rușcal",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Bogdun P",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Andrei Apostu",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
    {
      lable: "Claudiu Mois",
      wins: "3",
      secondPlace: "5",
      profit: "-200",
      rebuy: "10",
      entry: "14",
    },
  ];

  return (
    <div className="flex flex-col bg-slate-800 h-full w-full">
      <div className="flex flex-row justify-center text-white text-4xl mt-10">
        Poker nights
      </div>

      <div className="flex flex-row justify-center text-white text-2xl mt-10">
        <div className="flex">
          <IoMdTrophy className="mt-1 mx-2" size="1.5rem" />
          Last winner: David Petric
        </div>
      </div>

      <div className="flex flex-row justify-evenly text-white mt-20">
        {topTable.map((item, index) => (
          <Button key={index} iconLeft={item.icon} label={item.lable} />
        ))}
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col justify-around text-white mt-10 ">
          {people.map((item, index) => (
            <div key={index}>{item.lable}</div>
          ))}
        </div>
        <div className="flex flex-col justify-around text-white mt-10 ">
          {people.map((item, index) => (
            <div key={index}>{item.wins}</div>
          ))}
        </div>
        <div className="flex flex-col justify-around text-white mt-10 ">
          {people.map((item, index) => (
            <div key={index}>{item.secondPlace}</div>
          ))}
        </div>
        <div className="flex flex-col justify-around text-white mt-10 ">
          {people.map((item, index) => (
            <div key={index}>{item.profit}</div>
          ))}
        </div>
        <div className="flex flex-col justify-around text-white mt-10 ">
          {people.map((item, index) => (
            <div key={index}>{item.rebuy}</div>
          ))}
        </div>
        <div className="flex flex-col justify-around text-white mt-10 ">
          {people.map((item, index) => (
            <div key={index}>{item.entry}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Button
          label="Edit"
          className="flex bg-slate-600 w-1/5 h-12 justify-center rounded-full mr-1 text-white"
        />
        <Button
          label="Save"
          className="flex text-white w-1/5 justify-center rounded-full ml-1 border-2"
        />
      </div>
    </div>
  );
};

export default Home;
