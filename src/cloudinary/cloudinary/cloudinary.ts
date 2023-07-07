import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

@Injectable()
export class Cloudinary {
  private provide = 'CLOUDINARY';
  useFactory() {
    return v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }
}