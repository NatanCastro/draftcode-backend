import { Controller } from '@nestjs/common';
import { ImageUploadService } from './image-upload.service';

@Controller()
export class ImageUploadController {
  constructor(private readonly imageUploadService: ImageUploadService) {}
}
