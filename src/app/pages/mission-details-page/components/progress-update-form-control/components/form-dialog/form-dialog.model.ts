import { FormControlOptions, ValidatorFn } from '@angular/forms';
import { BaseDialogVM } from '@components/base-dialog/base-dialog.model';
import { isObject } from '@jsverse/transloco';
import { DialogReasonBase } from '@services/dialog/dialog.service';

type FormControlFieldType =
    | 'text'
    | 'number'
    | 'dropdown'
    | 'textarea'
    | 'checkbox'
    | 'file';

type FormGroupFieldType = 'checklist' | 'filegroup';
type FieldType = FormControlFieldType | FormGroupFieldType;

interface Field<T = FieldType> {
    fieldType: T;
}

type WithFormControlFieldType<T = FormControlFieldType> = Field<T>;
type WithFormGroupFieldType<T = FormGroupFieldType> = Field<T>;

type InitialValueType = string | number | boolean | null;

interface WithInitialValue<I = InitialValueType> {
    initialValue: I;
}

interface AbstractControlBaseConfig {
    controlName: string;
    controlLabelKey: string;
}

interface WithValidators {
    validators?: ValidatorFn | ValidatorFn[] | FormControlOptions;
}

type AbstractControlType = 'control' | 'group';
interface AbstractControl<T = AbstractControlType>
    extends AbstractControlBaseConfig {
    abstractControlType: T;
}

interface FormControl<I = InitialValueType, F = FormControlFieldType>
    extends AbstractControl<'control'>,
        WithFormControlFieldType<F>,
        WithInitialValue<I>,
        WithValidators {}

interface FormGroup<T = FormGroupFieldType>
    extends AbstractControl<'group'>,
        WithFormGroupFieldType<T> {}

type InputControl<
    IV = InitialValueType,
    T = FormControlFieldType,
> = FormControl<IV, T>;

type TextAreaControl = FormControl<string, 'textarea'>;

interface FileControl extends InputControl<string, 'file'> {
    accept: '.json';
}
interface FileControlGroup extends FormGroup<'filegroup'> {
    item: FileControl;
}

interface CheckListGroup extends FormGroup<'checklistgroup'> {
    items: InputControl<boolean, 'checkbox'>[];
}

interface DropdownControl<T> extends FormControl<null, 'dropdown'> {
    items: T[];
}

type ConfigType =
    | InputControl<string, 'text'>
    | InputControl<null, 'number'>
    | TextAreaControl
    | DropdownControl<MockInterface>
    | FileControlGroup
    | CheckListGroup;

export type FormGroupConfig = ConfigType[];

export interface FormDialogVM extends BaseDialogVM {
    type: 'formDialogVM';
    confirmTextKey?: string;
    formGroupConfig: FormGroupConfig;
    cancelButtonTextKey: string;
    submitButtonTextKey: string;
}

export interface FormDialogResultWithoutData extends DialogReasonBase {
    reasonType: 'cancel';
}
export interface FormDialogResultWithData extends DialogReasonBase {
    reasonType: 'submit';
    reason: string;
}

export const isFormDialogVM = (vm: unknown): vm is FormDialogVM =>
    isObject(vm) && 'type' in vm && vm['type'] === 'formDialogVM';

export const isFormDialogResultWithData = (
    vm: unknown
): vm is FormDialogResultWithData =>
    isObject(vm) && 'reasonType' in vm && vm['reasonType'] === 'submit';

interface MockInterface {
    value: string;
    label: string;
}
