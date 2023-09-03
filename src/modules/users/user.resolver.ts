import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateActiveStatusInput } from 'src/base/base.request';
import { CreateUserInput, UpdateUserInput, UserResponse } from './requests';
import {
	UserRoleAssignDTO,
	UserRoleRemoveDTO,
} from './requests/user-role-assign';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(() => [UserResponse])
	async filterUsers() {
		return this.userService.getAllUsers();
	}

	@Mutation(() => UserResponse)
	async createUser(@Args('input') input: CreateUserInput) {
		return this.userService.createUser(input);
	}

	@Mutation(() => UserResponse)
	async updateUser(
		@Args('id') id: string,
		@Args('input') input: UpdateUserInput
	) {
		return this.userService.updateUser(id, input);
	}

	@Mutation(() => UserResponse)
	async deleteUser(@Args('id') id: string) {
		return this.userService.deleteUser(id);
	}

	@Query(() => UserResponse)
	async userById(@Args('id') id: string) {
		return this.userService.getUserById(id);
	}

	@Mutation(() => UserResponse)
	async changeActiveStatus(
		@Args('id') id: string,
		@Args('input') input: UpdateActiveStatusInput
	) {
		return this.userService.changeActiveStatus(id, input);
	}

	@Mutation(() => UserResponse)
	async assignUserRole(
		@Args('id') id: string,
		@Args('input') input: UserRoleAssignDTO
	) {
		return this.userService.assignUserRole(id, input?.roles || []);
	}

	@Mutation(() => UserResponse)
	async removeUserRole(
		@Args('id') id: string,
		@Args('input') input: UserRoleRemoveDTO
	) {
		return this.userService.removeUserRole(id, input?.roles || []);
	}
}
