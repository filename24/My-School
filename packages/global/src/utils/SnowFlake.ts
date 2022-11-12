import { Snowflake } from '@sapphire/snowflake';

const epoch = new Date(1204560000);
export const snowflake = new Snowflake(epoch);
