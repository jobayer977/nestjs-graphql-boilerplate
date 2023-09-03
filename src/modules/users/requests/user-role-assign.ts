import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleAssignDTO {
	@Field(() => [String])
	roles: string[];
}

@InputType()
export class UserRoleRemoveDTO {
	@Field(() => [String])
	roles: string[];
}
