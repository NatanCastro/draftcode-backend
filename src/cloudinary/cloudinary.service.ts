import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  uploadToCloudinary = async (path: string) => {
    const result = await v2.uploader.upload(path, {
      folder: 'draft-images',
      transformation: {
        width: 320,
      },
    });
    return { url: result.url, public_id: result.public_id };
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
