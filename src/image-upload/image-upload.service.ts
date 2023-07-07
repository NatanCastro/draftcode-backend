import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ImageUploadService {
  constructor(private cloudinaryService: CloudinaryService) {}
  upload(file: Express.Multer.File) {
    console.log(file);
    this.cloudinaryService.uploadToCloudinary(file.path);
  }
}
