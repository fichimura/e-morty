declare const window: any;

export const environment = {
  production: window.__env.production,
  firebase: window.__env.firebase
};
