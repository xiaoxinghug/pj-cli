#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs')
const templateList = require(`${__dirname}/../template`)
const { showTable } = require(`${__dirname}/../util/showTable`)
const symbols = require('log-symbols')
const chalk = require('chalk')
chalk.level = 1

let question = [
  {
    name: "name",
    message: "请输入要删除的模板名称",
    validate (val) {
      if (!val) {
        return 'Name is required!'
      } else if (!templateList[val]) {
        return 'Template does not exist!'
      } else {
        return true
      }
    }
  }
]

inquirer
  .prompt(question).then(answers => {
    let { name } = answers;
    delete templateList[name]
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateList), 'utf-8', err => {
      if (err) console.log(chalk.red(symbols.error), chalk.red(err))
      console.log('\n')
      console.log(chalk.green(symbols.success), chalk.green('Deleted successfully!\n'))
      console.log(chalk.green('The latest templateList is: \n'))
      showTable(templateList)
    })
  })
