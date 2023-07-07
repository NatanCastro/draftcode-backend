import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ImageUploadService {
  constructor(private cloudinaryService: CloudinaryService) {}
  async upload(file: Express.Multer.File) {
    console.log(file);
    const savedFile = this.cloudinaryService.uploadToCloudinary(file);
    return savedFile.then(({ url, public_id }) => ({ url, public_id }));
  }
}
