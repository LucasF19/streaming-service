import { FormControl } from "@angular/forms";

export default class OnlyAlfaNumbersComma {
  static readonly format = (form: FormControl) => {
    const regex = /^[a-zA-Z0-9,]*$/;
    const value: string = form.value;
    if (value && !regex.test(value)) {
      form.setValue(value.replace(/[^a-zA-Z0-9,]/g, ''));
    }
    return null;
  }
}