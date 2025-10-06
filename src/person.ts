export enum Status {
  active = "active",
  suspended = "suspended",
  terminated = "terminated",
}

export enum Position {
  professor = "professor",
  associateProfessor = "associate professor",
  invitedLecturer = "invited lecturer",
}

interface Person {
  firstName: string;
  lastName: string;
  id: string;
}

export interface Student extends Person {
  GPA?: number;
  status: Status;
}

export interface Lecturer extends Person {
  position: Position;
}
