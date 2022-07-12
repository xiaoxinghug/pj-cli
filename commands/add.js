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
    type: 'input',
    message: "请输入模板名称",
    validate (val) {
      if (!val) {
        return 'Name is required!'
      } else if (templateList[val]) {
        return 'Template has already existed!'
      } else {
        return true
      }
    }
  },
  {
    name: "url",
    type: 'input',
    message: "请输入模板地址",
    validate (val) {
      if (val === '') return 'The url is required!'
      return true
    }
  }
]

inquirer
  .prompt(question).then(answers => {
    let { name, url } = answers;
    templateList[name] = url.replace(/[\u0000-\u0019]/g, '') // 过滤 unicode 字符
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateList), 'utf-8', err => {
      if (err) console.log(chalk.red(symbols.error), chalk.red(err))
      console.log('\n')
      console.log(chalk.green(symbols.success), chalk.green('Add a template successfully!\n'))
      console.log(chalk.green('The latest templateList is: \n'))
      showTable(templateList)
    })
  })
