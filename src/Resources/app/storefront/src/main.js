// This file is the entry point for compiling your additional Javascript Plugins

import ExamplePlugin from './plugin/rhweb-example-plugin';

const PluginManager = window.PluginManager;
PluginManager.register('ExamplePlugin', ExamplePlugin);

if (module.hot) {
    module.hot.accept();
}
