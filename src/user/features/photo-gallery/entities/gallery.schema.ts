import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { PhotoGallery } from './photoGallery.schema';

@Schema()
export class UserGallery extends Document {
    @Prop([{ type: sc.ObjectId, ref: PhotoGallery }])
    photos: PhotoGallery[];

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;
}

export const UserGallerySchema = SchemaFactory.createForClass(UserGallery);
