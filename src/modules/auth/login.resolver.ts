import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginService } from './login.service';
import { LoginInput, TokenResponse } from './requests';

@Resolver()
export class LoginResolver {
	constructor(private readonly loginService: LoginService) {}

	@Mutation(() => TokenResponse)
	async adminLogin(
		@Args('input') loginInput: LoginInput
	): Promise<TokenResponse> {
		return this.loginService.admin(loginInput);
	}

	@Mutation(() => TokenResponse)
	async individualLogin(
		@Args('input') loginInput: LoginInput
	): Promise<TokenResponse> {
		return this.loginService.individual(loginInput);
	}
}
