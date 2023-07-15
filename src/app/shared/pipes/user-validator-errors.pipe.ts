import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userValidatorErrors'
})
export class UserValidatorErrorsPipe implements PipeTransform {
  transform(error: { key: string, value: any }, ...args: unknown[]): unknown {
    const errorMessages: Record<string, string> = {
      required: 'Falta esta información',
      email: 'El email no es válido',
      minlength: 'Prueba algo más largo',
    }
    return errorMessages[error.key] || 'Campo invalido';
  }
}
