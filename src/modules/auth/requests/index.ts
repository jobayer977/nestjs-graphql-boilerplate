import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';

@InputType()
export class LoginInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;

	@Field()
	@IsString()
	@MaxLength(255)
	@MinLength(6)
	password: string;
}

@InputType()
export class RegisterInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	username: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;

	@Field()
	@IsString()
	@MaxLength(255)
	@MinLength(6)
	password: string;
}

@InputType()
export class VerifyInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;

	@Field()
	@IsString()
	@MaxLength(255)
	otp: string;
}

@InputType()
export class ResendOtpInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;
}

@InputType()
export class OAuthLoginInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;

	@Field()
	@IsString()
	@MaxLength(255)
	@MinLength(6)
	fullName: string;

	@Field()
	@IsString()
	@MaxLength(255)
	@MinLength(6)
	provider: string;

	@Field()
	@IsString()
	picture: string;
}

@InputType()
export class ForgotPasswordInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;
}

@InputType()
export class ForgotPasswordVerifyInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
	@IsEmail()
	email: string;

	@Field()
	password: string;

	@Field()
	otp: string;
}

@InputType()
export class ChangePasswordInput {
	@Field()
	email: string;

	@Field()
	oldPassword: string;

	@Field()
	newPassword: string;
}

@ObjectType()
export class TokenResponse {
	@Field()
	token: string;
}

@ObjectType()
export class OTPResponse {
	@Field(() => Int)
	otp: number;

	@Field()
	email: string;
}
