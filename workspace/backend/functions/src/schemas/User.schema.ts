import { Schema } from 'mongoose';
import { User, UserFlags } from '@typings/*';

export const UserSchema = new Schema<User>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: String,
  phone: {
    type: String,
    required: true,
  },
  flag: {
    type: Number,
    required: true,
    default: UserFlags.general,
  },
  registerID: String,
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  schools: Array,
});
