import { throwError } from 'rxjs';

export function handleError(err) {
    const message = `${err.status} : ${err.body}`;
    return throwError(message);
}
