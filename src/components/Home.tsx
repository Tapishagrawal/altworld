import SingleUser from "./SingleUser";
import data from "../data/userData.json";
import { useEffect, useState } from "react";
import UserList from "./UserList";

export interface UserDataType {
  id: number,
  name: string,
  email: string,
  score: number,
  behavioural: number,
  communication: number,
  situation_handling: number,
  about: string,
  experience: string,
  hobbies: string,
  introduction: string,
  image: string
}
export default function Home() {
  const [userData] = useState<UserDataType[]>(data.data);
  const [singleUser, setSingleUser] = useState<UserDataType | null>(null);
  const [isuserSelected, setIsUserSelected] = useState<number | null>(null);

  const handleSetSingleUser = (userId: number) => {
    const user = userData.find(user => user.id === userId);
    if (user) {
      setSingleUser(user)
      setIsUserSelected(user.id)
    }
  }
  useEffect(() => {
    const user = userData.find(user => user.id === 1);
    if (user) {
      setSingleUser(user)
      setIsUserSelected(user.id)
    }
  }, [])
  return (
    <div className="w-full sm:w-80%">
      <nav className="text-[#a5b6c8] font-medium ml-4 sm:ml-0">Pages <span className="text-[#4c5565]">/ Assigenment</span></nav>
      <h5 className="my-2 font-bold text-[#2d384a] text-[1rem] ml-4 sm:ml-0">Sales BDE</h5>

      <div className="flex mt-7 gap-4 flex-col md:flex-row">
        <UserList userData={userData} handleSetSingleUser={handleSetSingleUser} isuserSelected={isuserSelected}/>
        {
          singleUser &&
          <SingleUser {...singleUser} />
        }
      </div>
    </div>
  )
}
