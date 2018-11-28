import { IDevice } from '../models/Device';

export interface ICabinet{
    id: number;
    width: number;
    height: number;
    devices: IDevice[];
}
