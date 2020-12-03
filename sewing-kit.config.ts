import {createWorkspace} from '@sewing-kit/config';
import {createComposedWorkspacePlugin} from '@sewing-kit/plugins';
import {jest} from '@sewing-kit/plugin-jest';
import {eslint} from '@sewing-kit/plugin-eslint';
import {workspaceTypeScript} from '@sewing-kit/plugin-typescript';

export default createWorkspace((workspace) => {
  workspace.use(botWorkspace());
});

export function botWorkspace() {
  return createComposedWorkspacePlugin('Bot.Workspace', (composer) => {
    composer.use(jest(), eslint(), workspaceTypeScript());
  });
}
