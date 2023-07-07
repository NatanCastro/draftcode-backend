import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  uploadToCloudinary = async (file: Express.Multer.File) => {
    return v2.uploader.upload(file.path, {
      folder: 'draft-project',
    });
  };

  deleteFromCloudinary = async (public_id: string) => {
    await v2.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  };
}
