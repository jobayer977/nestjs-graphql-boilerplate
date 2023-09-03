import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';
import { Provider } from 'src/enums';

@InputType()
export class CreateUserInput {
	@Field({ description: 'User Full Name' })
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	username: string;

	@Field()
	@IsNotEmpty()
	firstName: string;

	@Field()
	@IsNotEmpty()
	lastName: string;

	@Field()
	@IsNotEmpty()
	phone: string;

	@Field({ description: 'User Email' })
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;

	@Field({ nullable: true })
	address?: string;

	@Field({ nullable: true })
	facebook?: string;

	@Field({ nullable: true })
	linkedin?: string;

	@Field({ nullable: true })
	twitter?: string;

	@Field({ nullable: true })
	picture?: string;

	@Field({ nullable: true })
	password?: string;

	@Field({ nullable: true })
	bio?: string;
}
@InputType()
export class UpdateUserInput {
	@Field()
	@IsNotEmpty()
	firstName: string;

	@Field()
	@IsNotEmpty()
	lastName: string;

	@Field()
	@IsNotEmpty()
	phone: string;

	@Field({ nullable: true })
	address?: string;

	@Field({ nullable: true })
	facebook?: string;

	@Field({ nullable: true })
	linkedin?: string;

	@Field({ nullable: true })
	twitter?: string;

	@Field({ nullable: true })
	picture?: string;

	@Field({ nullable: true })
	bio?: string;
}

@ObjectType()
export class UserResponse {
	@Field(() => ID)
	_id: string;

	@Field()
	username: string;

	@Field({ nullable: true })
	firstName: string;

	@Field({ nullable: true })
	lastName: string;

	@Field({ nullable: true })
	phone: string;

	@Field({ nullable: true })
	email: string;

	@Field({ nullable: true })
	bio: string;

	@Field({ nullable: true })
	address: string;

	@Field({ nullable: true })
	facebook: string;

	@Field({ nullable: true })
	linkedin: string;

	@Field({ nullable: true })
	twitter: string;

	@Field({ nullable: true })
	picture: string;

	password: string;

	@Field()
	isVerified: boolean;

	@Field(() => [String])
	roles: string[];

	@Field()
	provider: string;

	@Field({ nullable: true })
	priority?: number;

	@Field({ nullable: true })
	active?: boolean;

	@Field({ nullable: true })
	createdBy?: string;

	@Field({ nullable: true })
	updatedBy?: string;

	@Field({ nullable: true })
	deletedBy?: string;

	@Field({ nullable: true })
	createdAt?: Date;

	@Field({ nullable: true })
	updatedAt?: Date;

	@Field({ nullable: true })
	deletedAt?: Date;
}
