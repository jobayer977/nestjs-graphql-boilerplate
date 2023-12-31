import { BaseEntity, BaseEntitySchema } from 'src/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Provider } from 'src/enums';

@Schema()
export class User extends BaseEntity {
	@Prop({ required: true, unique: true })
	username: string;

	@Prop({ default: null })
	firstName: string;

	@Prop({ default: null })
	lastName: string;

	@Prop({ default: null })
	phone: string;

	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ default: null })
	bio: string;

	@Prop({ default: null })
	address: string;

	@Prop({ default: null })
	facebook: string;

	@Prop({ default: null })
	linkedin: string;

	@Prop({ default: null })
	twitter: string;

	@Prop({ default: null })
	picture: string;

	@Prop({ select: false, default: null })
	password: string;

	@Prop({ default: false })
	isVerified: boolean;

	@Prop({ type: [] })
	roles: string[];

	@Prop({ enum: Provider, default: Provider.LOCAL })
	provider: string;
}

export const UserSchema =
	SchemaFactory.createForClass(User).add(BaseEntitySchema);

UserSchema.pre('save', async function (next) {
	this.email = this.email.toLowerCase();
	this.username = this.username.toLowerCase();
	next();
});
