import { UserSchema } from "@schemas/User.schema";
import { InjectToken } from "@typings/*";
import Provider from "@utils/Provider.utils";
import { Mongoose } from "mongoose";

export const usersProviders = new Provider({
  provide: InjectToken.UserModel,
  useFactory: (mongoose: Mongoose) => mongoose.model('users', UserSchema, 'users'),
  inject: [InjectToken.DatabaseConnection],
}).provider