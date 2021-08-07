
/**
 * If this is being run from the compiles js files,
 * register module-alias
 */
// @ts-ignore
if (!process[Symbol.for('ts-node.register.instance')]) {
  require('module-alias/register');
}