import { useState } from "react";

type Person = {
  name: string;
  age: number;
};


export default function PersonCard () {
  const [person, setPerson] = useState<Person>({name: "", age: 0});
const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
setPerson((prev) => ({ ...prev, name: e.target.value }));
};

  return (
    <>
    <h2>card</h2>
    <ul>
      <li>Name: {person.name}</li>
      <li>age: {person.age}</li>
    </ul>
    <label htmlFor="personName">Name</label>
    <input type="text" id="personname" placeholder="write your name." value={person.name}
    onChange={handleNameChange} />
    </>
  )
}