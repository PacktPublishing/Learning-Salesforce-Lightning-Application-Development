declare module "@apex/LightningLoginFormController.login" {
  export function login(param: {username: any, password: any, startUrl: any}): Promise<any>;
}
declare module "@apex/LightningLoginFormController.getIsUsernamePasswordEnabled" {
  export function getIsUsernamePasswordEnabled(): Promise<any>;
}
declare module "@apex/LightningLoginFormController.getIsSelfRegistrationEnabled" {
  export function getIsSelfRegistrationEnabled(): Promise<any>;
}
declare module "@apex/LightningLoginFormController.getSelfRegistrationUrl" {
  export function getSelfRegistrationUrl(): Promise<any>;
}
declare module "@apex/LightningLoginFormController.getForgotPasswordUrl" {
  export function getForgotPasswordUrl(): Promise<any>;
}
declare module "@apex/LightningLoginFormController.setExperienceId" {
  export function setExperienceId(param: {expId: any}): Promise<any>;
}
