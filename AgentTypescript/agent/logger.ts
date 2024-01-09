import { CustomNativeFunction } from './nativefunctions.js';

export function log(message: string): void {
    console.log(message);
}

export function cclog(message: string): void {
    CustomNativeFunction.cclog(Memory.allocUtf8String(message));
}
