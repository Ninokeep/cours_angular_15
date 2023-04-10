import { Directive, OnInit } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[trim-word]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: TrimWordDirective,
            multi: true
        }
    ]
})
export class TrimWordDirective implements Validator {

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const value = control.value;

        if (value && typeof value === 'string' && value.trim() === '') {
            return {
                'trimWhiteSpace': true
            }
        }
        return null;
    }
}
