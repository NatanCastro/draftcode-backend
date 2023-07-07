import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  uploadToCloudinary = async (file: Express.Multer.File) => {
    return v2.uploader.upload(file.path, {
      folder: 'draft-project',
      transformation: { quality: 'good' },
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
