import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface Login {
    email: string | [string, ((control: AbstractControl<any, any>) => ValidationErrors | null)[]];
    password: string | [string, ((control: AbstractControl<any, any>) => ValidationErrors | null)[]];
}