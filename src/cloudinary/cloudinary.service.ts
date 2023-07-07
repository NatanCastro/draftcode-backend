import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { CloudinaryResponse } from './types/cloudinary-reponse';
import streamifier from 'streamifier';
@Injectable()
export class CloudinaryService {
  uploadToCloudinary = async (file: Express.Multer.File) => {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const upStream = v2.uploader.upload_stream(
        {
          folder: 'draft-project',
          transformation: { quality: 'good' },
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      const stream = streamifier.createReadStream(file.buffer).pipe(upStream);
      console.log(stream);
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
