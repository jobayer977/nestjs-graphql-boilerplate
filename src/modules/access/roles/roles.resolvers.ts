import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import {
	RoleResponse,
	CreateRoleRequestInput,
	UpdateRoleRequestInput,
} from './requests';
import { UpdateActiveStatusInput } from 'src/base/base.request';

@Resolver()
export class RolesResolver {
	constructor(private readonly service: RolesService) {}

	@Query(() => [RoleResponse])
	async filterRoles() {
		return this.service.rolesModel.find().exec();
	}

	@Mutation(() => RoleResponse)
	async createRole(@Args('input') input: CreateRoleRequestInput) {
		return this.service.insertIntoDB(input);
	}

	@Mutation(() => RoleResponse)
	async updateRole(
		@Args('id') id: string,
		@Args('input') input: UpdateRoleRequestInput
	) {
		return this.service.updateIntoDB(id, input);
	}

	@Mutation(() => RoleResponse)
	async deleteRole(@Args('id') id: string) {
		return this.service.deleteFromDB(id);
	}

	@Query(() => RoleResponse)
	async getRole(@Args('id') id: string) {
		return this.service.findById(id);
	}

	@Mutation(() => RoleResponse)
	async changeActiveStatus(
		@Args('id') id: string,
		@Args('input') input: UpdateActiveStatusInput
	) {
		return this.service.changeActiveStatus(id, input);
	}
}
