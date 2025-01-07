export interface IAttendance {
  studentId: string; // FK referencia a User
  laboratoryId: string;  // FK referencia a Laboratory
  type: "check-in" | "check-out";
  method: "qr" | "manual";
  status: "valid" | "invalid" | "pending";
  createdAt?: Date;
  updatedAt?: Date;
}
