import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PhotoGallery extends Document {
    @Prop({ type: String, required: true, unique: true })
    path: string;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date })
    deletedAt: Date;
}

export const PhotoGallerySchema = SchemaFactory.createForClass(PhotoGallery);
