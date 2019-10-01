import { ISocketConfig } from '../model/socket.interface';
import { coerceBooleanProperty } from 'src/app/shared/coercion/coerce-boolean-property';

export function doesConfigContainUrlAndPort(config: ISocketConfig): boolean {
    return coerceBooleanProperty(config && config.url && config.port);
}