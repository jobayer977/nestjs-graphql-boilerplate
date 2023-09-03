import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PasswordService } from './password.service';
import {
	ChangePasswordInput,
	ForgotPasswordInput,
	ForgotPasswordVerifyInput,
	OTPResponse,
	TokenResponse,
} from './requests';

@Resolver()
export class PasswordResolver {
	constructor(private readonly passwordService: PasswordService) {}

	@Mutation(() => OTPResponse)
	async individualForgotPasswordRequest(
		@Args('input') input: ForgotPasswordInput
	) {
		return this.passwordService.individualForgotPasswordRequest(input);
	}

	@Mutation(() => TokenResponse)
	async individualForgotPasswordVerify(
		@Args('input') input: ForgotPasswordVerifyInput
	) {
		return this.passwordService.individualForgotPasswordVerify(input);
	}

	@Mutation(() => TokenResponse)
	async individualChangePassword(@Args('input') input: ChangePasswordInput) {
		return this.passwordService.individualChangePassword(input);
	}
}
