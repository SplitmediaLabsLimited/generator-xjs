/**
 * Hi! Thanks for using XSplit JS Framework :)
 *
 * XSplit JS Framework exposes useful methods to work with XSplit without 
 * fiddling too much with the raw core methods exposed to JavaScript, which 
 * makes developing plugins for XSplit a lot easier.
 *
 * To get started, you just have to import the modules of our library
 *
 * import { ready, Scene, Item } from 'xjs-framework';
 *
 * You can read more about it at our documentation:
 * http://xjsframework.github.io/quickstart.html
 * http://xjsframework.github.io/tutorials.html
 * http://xjsframework.github.io/api.html
 */

import { ready, SourceConfigWindow } from 'xjs-framework';

// Include our stylus file
require('../stylus/config.styl');

ready().then(() => {
  const configWindow = SourceConfigWindow.getInstance();

  configWindow.useTabbedWindow({
    customTabs: ['Custom'],
    tabOrder: ['Custom', 'Color', 'Layout', 'Transition']
  });
});