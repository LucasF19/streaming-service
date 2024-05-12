import { FormControl } from "@angular/forms";
import OnlyAlfaNumbersComma from "./only-alfa-numbers-comma";

describe('OnlyAlfaNumbersComma', () => {
  it('should remove non-alphanumeric and non-comma characters from input', () => {
    const formControl = new FormControl();
    formControl.setValue('abc123!@#,.;');
    OnlyAlfaNumbersComma.format(formControl);
    expect(formControl.value).toBe('abc123,');
  });

  it('should not modify input with only alphanumeric and comma characters', () => {
    const formControl = new FormControl();
    formControl.setValue('abc123,');
    OnlyAlfaNumbersComma.format(formControl);
    expect(formControl.value).toBe('abc123,');
  });

  it('should handle empty input', () => {
    const formControl = new FormControl();
    OnlyAlfaNumbersComma.format(formControl);
    expect(formControl.value).toBe(null);
  });

  it('should handle null input', () => {
    const formControl = new FormControl();
    formControl.setValue(null);
    OnlyAlfaNumbersComma.format(formControl);
    expect(formControl.value).toBe(null);
  });

  it('should handle undefined input', () => {
    const formControl = new FormControl();
    formControl.setValue(undefined);
    OnlyAlfaNumbersComma.format(formControl);
    expect(formControl.value).toBe(undefined);
  });
});
