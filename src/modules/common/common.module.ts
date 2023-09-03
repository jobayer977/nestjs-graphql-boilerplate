/*
https://docs.nestjs.com/modules
*/

import { Otp, OtpSchema } from './otp/otp.schema';

import { HelpersModule } from '../helpers';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OtpService } from './otp/otp.service';

const SERVICES = [OtpService];
@Module({
	imports: [
		MongooseModule.forFeature([{ name: Otp.name, schema: OtpSchema }]),
		HelpersModule,
	],
	controllers: [],
	providers: [...SERVICES],
	exports: [...SERVICES],
})
export class CommonModule {}
