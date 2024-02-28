import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Passion extends Document {
    @Prop({ type: String, required: true, unique: true })
    name: string;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const PassionSchema = SchemaFactory.createForClass(Passion);
