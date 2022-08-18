const { actions } = require('./actions')

const commands = (program) => {
  program
    .command('creat <project> [arrs...]')
    .alias('crt')
    .description('创建')
    .action(actions)
}
module.exports = {
  commands,
}
