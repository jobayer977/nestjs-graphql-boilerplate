/*
https://docs.nestjs.com/modules
*/

import { RoleSchema, Roles } from './roles/roles.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesResolver } from './roles/roles.resolvers';
import { RolesService } from './roles/roles.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Roles.name,
				schema: RoleSchema,
			},
		]),
	],
	providers: [RolesService, RolesResolver],
	exports: [RolesService],
})
export class AccessModule {}
