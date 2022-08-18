const inquirer = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const actions = (project, args) => {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'famework',
        choices: ['express', 'koa', 'egg'],
        message: '请选择需要使用的框架',
      },
    ])
    .then((answers) => {
      const spinner = ora('Loading unicorns').start()
      spinner.text = chalk.red('下载中,请等待...')
      download('github:zycxwd/serveblog', project, function (err) {
        if (!err) {
          spinner.succeed('下载成功!')

          return
        }
        spinner.fail(JSON.stringify(err))
      })
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    })
}
module.exports = {
  actions,
}
