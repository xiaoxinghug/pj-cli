#!/usr/bin/env node
const { showTable } = require(`${__dirname}/../util/showTable`)
const templateList = require(`${__dirname}/../template`)

showTable(templateList)

