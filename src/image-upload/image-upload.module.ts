import { Module } from '@nestjs/common';
import { ImageUploadService } from './image-upload.service';
import { ImageUploadController } from './image-upload.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [ImageUploadController],
  providers: [ImageUploadService],
  imports: [CloudinaryModule],
})
export class ImageUploadModule {}
