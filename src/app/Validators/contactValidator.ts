import { FormGroup, ValidationErrors } from '@angular/forms';

export function getFormValidationErrors(form: FormGroup|any) {

  const result:any = [];
  Object.keys(form.controls).forEach(key => {

    const controlErrors: ValidationErrors|any = form.get(key).errors;
    if (controlErrors && key=='contact') {
      Object.keys(controlErrors).forEach(keyError => {
        result.push({
          'control': key,
          'error': keyError,
        });
      });
    }
  });

  return result;
}