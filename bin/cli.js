#! /usr/bin/env node
const { program } = require('commander')

// --help 功能模块
const { helps } = require('../lib/core/help.js')
helps(program)

//commands自定义指令模块
const { commands } = require('../lib/core/commands.js')

commands(program)

program.parse(process.argv)
