import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BaseFilterRequestInput {
	@Field({ nullable: true })
	searchTerm?: string;

	@Field({ nullable: true, defaultValue: 1 })
	page?: number;

	@Field({ nullable: true, defaultValue: 10 })
	take?: number;

	@Field({ nullable: true })
	active?: boolean;

	@Field(() => [String], { nullable: true })
	relations?: string[];
}

@InputType()
export class UpdateActiveStatusInput {
	@Field()
	active: boolean;
}
