import { Schema, Document, model, SchemaTypes } from "mongoose";

export interface ContactType extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  _user: SchemaTypes.ObjectId
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String },
  _user: { required: true, type: SchemaTypes.ObjectId },
});

export const Contact = model<ContactType>("contact", ContactSchema);
