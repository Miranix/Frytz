#! /usr/bin/env node

const { name, version } = require('../src/utils/constants');
const { Command } = require('commander');
const { mapActions } = require('./utils/common');
const path = require('path')
const program = new Command();
const figlet=require('figlet');
const chalk = require('chalk');

Reflect.ownKeys(mapActions).forEach((action) => {
    program.command(action) 
        .alias(mapActions[action].alias) 
        .description(mapActions[action].description) 
        .action(() => { 
            if (action === '*' || action === 'c' || action === 'create' || action === 'v' || action === 'V') {
                console.log('\r\n' + chalk.green(figlet.textSync(name, {
                    font: 'Ghost',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                })));
            }


            if (action === '*') {  
                console.log(mapActions[action].description);
            } else {
                console.log(action);
                require(path.join(__dirname, "commands", action))(...process.argv.slice(3));
            }
        })
});

program.on('--help', () => {
    console.log('\nExamples:');
    Reflect.ownKeys(mapActions).forEach((action) => {
        mapActions[action].examples.forEach((example) => {
            console.log(` ${example}`);
        })
    })
})

program
    .name(name)
    .description('CLI for building common software FrontEnd')
    .version(version).parse(process.argv)

