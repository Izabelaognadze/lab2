import { useState } from "react";
import { Header } from "./header";
import { Status, type Student } from "../person";

export const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      firstName: "giorgi",
      lastName: "beridze",
      id: "1",
      status: Status.active,
    },
    {
      firstName: "nino",
      lastName: "kapanadze",
      id: "2",
      status: Status.terminated,
    },
    {
      firstName: "mari",
      lastName: "gelashvili",
      id: "3",
      status: Status.suspended,
    },
    {
      firstName: "luka",
      lastName: "maisuradze",
      id: "4",
      status: Status.active,
    },
  ]);

  const sortById = () => {
    const sort = [...students].sort((a, b) => {
      return a.id.localeCompare(b.id);
    });
    setStudents(sort);
  };

  const onClickRandom = () => {
    const sort = [...students].sort(() => {
      return Math.random() - 0.5;
    });
    setStudents(sort);
  };

  return (
    <>
      <Header />
      <h1>student list</h1>
      <table>
        <thead>
          <th onClick={() => sortById()}>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Status</th>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onClickRandom()}>randomly shuffling</button>
    </>
  );
};
