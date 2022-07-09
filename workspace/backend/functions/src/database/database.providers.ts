import { InjectToken } from '@typings/*';
import Provider from '@utils/Provider.utils';
import mongoose from 'mongoose';

export const databaseProviders = new Provider({
  provide: InjectToken.DatabaseConnection,
  useFactory: async () => {
    return await mongoose.connect('mongodb://localhost/mySchool')
  },
}).provider