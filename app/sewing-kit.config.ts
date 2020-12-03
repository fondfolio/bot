import {createWebApp} from '@sewing-kit/config';
import {WebApp, createComposedProjectPlugin} from '@sewing-kit/plugins';
import {javascript} from '@sewing-kit/plugin-javascript';
import {typescript} from '@sewing-kit/plugin-typescript';

export default createWebApp((app) => {
  app.entry('./index');
  app.use(dialogWebApp());
});

export function dialogWebApp() {
  return createComposedProjectPlugin<WebApp>(
    'Dialog.WebApp',
    async (composer) => {
      composer.use(javascript(), typescript());
    },
  );
}
