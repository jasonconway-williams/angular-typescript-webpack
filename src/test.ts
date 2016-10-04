// this file is only being used by karma
require('phantomjs-polyfill')

requireAll((<any>require).context("./", true, /spec.ts$/));
requireAll((<any>require).context("./", true, /spec.js$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}