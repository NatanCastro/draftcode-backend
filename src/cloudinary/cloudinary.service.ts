import { Injectable } from '@nestjs/common';
import cloudinary from 'cloudinary';

const API_KEY = process.env.CLOUDINARY_API_KEY as string;
const API_SECRET = process.env.CLOUDINARY_API_SECRET as string;
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME as string;

@Injectable()
export class CloudinaryService {
  private cloudinaryV2: typeof cloudinary.v2;
  constructor() {
    const cloudinaryV2 = cloudinary.v2;

    cloudinaryV2.config({
      api_key: API_KEY,
      api_secret: API_SECRET,
      cloud_name: CLOUD_NAME,
    });
  }

  uploadToCloudinary = async (path: string) => {
    const result = await this.cloudinaryV2.uploader.upload(path, {
      folder: 'draft-images',
      transformation: {
        width: 320,
      },
    });
    return { url: result.url, public_id: result.public_id };
  };

  deleteFromCloudinary = async (public_id: string) => {
    await this.cloudinaryV2.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  };
}
