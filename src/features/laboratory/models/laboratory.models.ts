import { Schema, model } from "mongoose";
import { ILaboratory } from "./laboratory.interfaces";

const LaboratorySchema = new Schema<ILaboratory>({
  laboratoryId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  capacity: { type: Number, required: false },
});

export default model<ILaboratory>("Laboratory", LaboratorySchema);
