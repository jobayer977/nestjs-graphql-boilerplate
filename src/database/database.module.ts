/*
https://docs.nestjs.com/modules
*/

import { ENV } from 'src/ENV';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forRoot(ENV.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}),
	],
})
export class DatabaseModule {}
