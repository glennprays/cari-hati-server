import * as crypto from 'crypto';

export function generateHash(): string {
    const data = crypto.randomBytes(16);
    const hash = crypto
        .createHash('sha256')
        .update(data)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    return hash;
}
