import { User, UserSchema } from './user.schema';

import { AccessModule } from '../access/access.module';
import { HelpersModule } from '../helpers';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

/*
https://docs.nestjs.com/modules
*/

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		HelpersModule,
		AccessModule,
	],
	controllers: [],
	providers: [UserService, UserResolver],
	exports: [UserService],
})
export class UserModule {}
