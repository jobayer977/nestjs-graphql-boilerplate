import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateRoleRequestInput {
	@IsNotEmpty()
	@MaxLength(60)
	@Field()
	name: string;

	@Field()
	description: string;
}
@InputType()
export class UpdateRoleRequestInput {
	@IsNotEmpty()
	@MaxLength(60)
	@Field()
	name: string;

	@Field()
	description: string;
}

@ObjectType()
export class RoleResponse {
	@IsNotEmpty()
	@MaxLength(60)
	@Field()
	name: string;

	@Field()
	description: string;
}
