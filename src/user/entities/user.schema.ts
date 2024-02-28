import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { Passion } from './passion.schema';
import { UserGallery } from '../features/photo-gallery/entities/gallery.schema';

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}


@Schema()
export class UserPhotoProfile extends Document {
    @Prop({ type: String, unique: true })
    path: string;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

@Schema()
export class UserPassion extends Document {

    @Prop({ type: sc.ObjectId, ref: Passion})
    passion: Passion;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date })
    deletedAt: Date;
}


@Schema()
export class UserAccount extends Document {
    @Prop({ type: String, required: true, unique: true })
    personId: string;

    @Prop({ type: String, required: true, unique: true })
    name: string;

    @Prop({ type: UserPhotoProfile, required: true, unique: true})
    photoProfile: UserPhotoProfile;

    @Prop({ type: String, required: true, unique: true })
    gender: Gender;

    @Prop({ type: Date, required: true, unique: true })
    birth: Date;

    @Prop({ type: String, required: true })
    description: string;

    @Prop({type: BigInt, required: true})
    coinAmount: BigInt;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop([{ type: UserPassion, default: []}])
    passions: UserPassion[];

    @Prop({ type: sc.ObjectId, ref: UserGallery, default: null})
    gallery: UserGallery;
}

export const UserAccountSchema = SchemaFactory.createForClass(UserAccount);