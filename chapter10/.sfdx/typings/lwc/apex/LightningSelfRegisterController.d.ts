declare module "@apex/LightningSelfRegisterController.selfRegister" {
  export function selfRegister(param: {firstname: any, lastname: any, email: any, password: any, confirmPassword: any, accountId: any, regConfirmUrl: any, extraFields: any, startUrl: any, includePassword: any}): Promise<any>;
}
declare module "@apex/LightningSelfRegisterController.getExtraFields" {
  export function getExtraFields(param: {extraFieldsFieldSet: any}): Promise<any>;
}
declare module "@apex/LightningSelfRegisterController.setExperienceId" {
  export function setExperienceId(param: {expId: any}): Promise<any>;
}
