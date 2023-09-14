import { IImage } from '../interfaces/image';

export const toMatrix = (arr: IImage[], width: number): IImage[][] => 
arr.reduce((rows: any, key: IImage, index: number) => (index % width === 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);
  