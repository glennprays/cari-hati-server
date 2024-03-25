import * as sharp from 'sharp';

export async function compressAndConvertToJPEG(
    inputFile: Express.Multer.File,
    maxFileSizeKB: number = 150,
): Promise<Express.Multer.File> {
    try {
        let quality = 100;
        let compressedBuffer = await sharp(inputFile.buffer)
            .jpeg({ quality: quality })
            .toBuffer();

        let fileSizeKB = compressedBuffer.length / 1024;

        while (fileSizeKB > maxFileSizeKB && quality > 10) {
            quality -= 5;

            compressedBuffer = await sharp(inputFile.buffer)
                .jpeg({ quality })
                .toBuffer();

            fileSizeKB = compressedBuffer.length / 1024;
        }

        const compressedFile: Express.Multer.File = {
            ...inputFile,
            originalname: inputFile.originalname.replace(/\.\w+$/, '.jpg'),
            buffer: compressedBuffer,
            size: compressedBuffer.length,
        };

        return compressedFile;
    } catch (error) {
        console.error('Error compressing image:', error);
        throw error;
    }
}

export async function resizeImage(
    inputFile: Express.Multer.File,
    width: number = 800,
    height: number = 800,
): Promise<Express.Multer.File> {
    try {
        const resizedBuffer = await sharp(inputFile.buffer)
            .resize(width, height)
            .toBuffer();

        const resizedFile: Express.Multer.File = {
            ...inputFile,
            buffer: resizedBuffer,
            size: resizedBuffer.length,
        };

        return resizedFile;
    } catch (error) {
        console.error('Error resizing image:', error);
        throw error;
    }
}
