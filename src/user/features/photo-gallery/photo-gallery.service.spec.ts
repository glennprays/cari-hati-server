import { Test, TestingModule } from '@nestjs/testing';
import { PhotoGalleryService } from './photo-gallery.service';

describe('PhotoGalleryService', () => {
  let service: PhotoGalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoGalleryService],
    }).compile();

    service = module.get<PhotoGalleryService>(PhotoGalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
