import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RegisterService } from './register.service';
import {
	OTPResponse,
	RegisterInput,
	ResendOtpInput,
	TokenResponse,
	VerifyInput,
} from './requests';

@Resolver()
export class RegisterResolver {
	constructor(private registerService: RegisterService) {}

	@Mutation(() => TokenResponse)
	async adminRegister(
		@Args('input') input: RegisterInput
	): Promise<TokenResponse> {
		return this.registerService.admin(input);
	}

	@Mutation(() => TokenResponse)
	async individualRegister(
		@Args('input') input: RegisterInput
	): Promise<TokenResponse> {
		return this.registerService.individual(input);
	}

	@Mutation(() => TokenResponse)
	async individualRegisterVerify(
		@Args('input') input: VerifyInput
	): Promise<TokenResponse> {
		return this.registerService.individualVerify(input);
	}

	@Mutation(() => OTPResponse)
	async individualRegisterResendOTP(
		@Args('input') input: ResendOtpInput
	): Promise<OTPResponse> {
		return this.registerService.individualResendOTP(input);
	}
}
