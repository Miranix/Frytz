const inquirer = require('inquirer');
const program = require('commander');
const chalk = require('chalk');
const fse = require('fs-extra');
var downloadGit = require('download-git-repo');
const util = require('util');
downloadGit = util.promisify(downloadGit);
const path = require('path');
const ora = require('ora');
const handlebars = require('handlebars')
const fs = require("fs");
const { log } = require('console');


module.exports = async (projectName) => {
    if (!projectName) {
        program.help();
        return;
    }

    const promptList = [{
        type: 'input',
        name: 'author',
        message: 'Enter your username：',
    }, {
        type: 'input',
        name: 'email',
        message: 'Enter your email：',
    }, {
        type: 'list',
        message: 'Choose development platform',
        name: 'devPlatForm',
        choices: [
            "Web",
            "Desktop",
            // "App",
            // "Mini App",
            // "Browser Extension"
        ]
    }, {
        type: 'list',
        message: 'Choose platform technology',
        name: 'platformTech',
        choices: [
            "Electron"
        ],
        when: (answers) => answers.devPlatForm === 'Desktop'
    }, {
        type: 'list',
        message: 'Choose JS framework',
        name: 'jsFramework',
        choices: [
            "Vue",
            "React"
        ],
        when: (answers) => {
            return answers.devPlatForm === 'Web' || answers.platformTech === 'Electron'
        }
    }, {
        type: 'list',
        message: 'Choose platform technology',
        name: 'UIFramework-1',
        choices: [
            "ElementPlus",
        ],
        when: (answers) => answers.jsFramework === 'Vue'
    }, {
        type: 'list',
        message: 'Choose platform technology',
        name: 'UIFramework-2',
        choices: [
            "Ant Design",
            "ShadcnUI(base on Tailwind)",
        ],
        when: (answers) => answers.jsFramework === 'React'
    }
    ];


    const answers = await inquirer.prompt(promptList);
    if (answers?.['devPlatForm'] === 'Desktop' && answers?.['platformTech'] === 'Electron' && answers?.['jsFramework'] === 'React' && answers?.['UIFramework-2'] === 'Ant Design') {
        const spinner = ora('waiting download project...');
        spinner.start();
        await downloadGit('direct:https://github.com/Miranix/Electron-React-Antd.git#main', path.resolve(process.cwd(), projectName), { clone: true },
            (err) => {
                if (err) {
                    console.log(`Download Failed！${err}`);
                    spinner.stop()
                } else {
                    // Populate Template Data
                    let populateData = {
                        name: projectName,
                        author: answers.email ? answers.author :'author',
                        email: answers.email ? answers.email :'email'
                    }
                    
                    const packagePath = path.resolve(process.cwd(), projectName,'package.json');
                    const mainPackagePath = path.resolve(process.cwd(), projectName, 'electron-main','package.json')
                    const rendererPackagePath =path.resolve(process.cwd(), projectName, 'electron-renderer','package.json')
                    const packageContent = fs.readFileSync(packagePath, "utf8");
                    const mainPackageContent = fs.readFileSync(mainPackagePath, "utf8");
                    const rendererPackageContent = fs.readFileSync(rendererPackagePath, "utf8");
                    const packageResult = handlebars.compile(packageContent)(populateData);
                    const mainPackageResult = handlebars.compile(mainPackageContent)(populateData);
                    const rendererPackageResult = handlebars.compile(rendererPackageContent)(populateData);
                    fs.writeFileSync(packagePath, packageResult)
                    fs.writeFileSync(mainPackagePath, mainPackageResult)
                    fs.writeFileSync(rendererPackagePath, rendererPackageResult)
                    spinner.succeed();

                }
            })
    }else if(answers?.['devPlatForm'] === 'Desktop' && answers?.['platformTech'] === 'Electron' && answers?.['jsFramework'] === 'React' && answers?.['UIFramework-2'] === 'ShadcnUI(base on Tailwind)'){
        const spinner = ora('waiting download project...');
        spinner.start();
        await downloadGit('direct:https://github.com/Miranix/Electron-React-Shadcn.git#main', path.resolve(process.cwd(), projectName), { clone: true },
            (err) => {
                if (err) {
                    console.log(`Download Failed！${err}`);
                    spinner.stop()
                } else {
                    // Populate Template Data
                    let populateData = {
                        name: projectName,
                        author: answers.email ? answers.author :'author',
                        email: answers.email ? answers.email :'email'
                    }
                    
                    const packagePath = path.resolve(process.cwd(), projectName,'package.json');
                    const mainPackagePath = path.resolve(process.cwd(), projectName, 'electron-main','package.json')
                    const rendererPackagePath =path.resolve(process.cwd(), projectName, 'electron-renderer','package.json')
                    const packageContent = fs.readFileSync(packagePath, "utf8");
                    const mainPackageContent = fs.readFileSync(mainPackagePath, "utf8");
                    const rendererPackageContent = fs.readFileSync(rendererPackagePath, "utf8");
                    const packageResult = handlebars.compile(packageContent)(populateData);
                    const mainPackageResult = handlebars.compile(mainPackageContent)(populateData);
                    const rendererPackageResult = handlebars.compile(rendererPackageContent)(populateData);
                    fs.writeFileSync(packagePath, packageResult)
                    fs.writeFileSync(mainPackagePath, mainPackageResult)
                    fs.writeFileSync(rendererPackagePath, rendererPackageResult)
                    spinner.succeed();

                }
            })
    }else if(answers?.['devPlatForm'] === 'Desktop' && answers?.['platformTech'] === 'Electron' && answers?.['jsFramework'] === 'Vue' && answers?.['UIFramework-1'] === 'ElementPlus'){
        const spinner = ora('waiting download project...');
        spinner.start();
        await downloadGit('direct:https://github.com/Miranix/Electron-Vue-ElementPlus.git#main', path.resolve(process.cwd(), projectName), { clone: true },
            (err) => {
                if (err) {
                    console.log(`Download Failed！${err}`);
                    spinner.stop()
                } else {
                    // Populate Template Data
                    let populateData = {
                        name: projectName,
                        author: answers.email ? answers.author :'author',
                        email: answers.email ? answers.email :'email'
                    }
                    
                    const packagePath = path.resolve(process.cwd(), projectName,'package.json');
                    const mainPackagePath = path.resolve(process.cwd(), projectName, 'electron-main','package.json')
                    const rendererPackagePath =path.resolve(process.cwd(), projectName, 'electron-renderer','package.json')
                    const packageContent = fs.readFileSync(packagePath, "utf8");
                    const mainPackageContent = fs.readFileSync(mainPackagePath, "utf8");
                    const rendererPackageContent = fs.readFileSync(rendererPackagePath, "utf8");
                    const packageResult = handlebars.compile(packageContent)(populateData);
                    const mainPackageResult = handlebars.compile(mainPackageContent)(populateData);
                    const rendererPackageResult = handlebars.compile(rendererPackageContent)(populateData);
                    fs.writeFileSync(packagePath, packageResult)
                    fs.writeFileSync(mainPackagePath, mainPackageResult)
                    fs.writeFileSync(rendererPackagePath, rendererPackageResult)
                    spinner.succeed();

                }
            })
    }else if(answers?.['devPlatForm'] === 'Web'  && answers?.['jsFramework'] === 'Vue' && answers?.['UIFramework-1'] === 'ElementPlus'){
        const spinner = ora('waiting download project...');
        spinner.start();
        await downloadGit('direct:https://github.com/Miranix/Web-Vue-ElementPlus.git#main', path.resolve(process.cwd(), projectName), { clone: true },
            (err) => {
                if (err) {
                    console.log(`Download Failed！${err}`);
                    spinner.stop()
                } else {
                    // Populate Template Data
                    let populateData = {
                        name: projectName,
                        author: answers.email ? answers.author :'author',
                        email: answers.email ? answers.email :'email'
                    }
                    
                    const packagePath = path.resolve(process.cwd(), projectName,'package.json');
                    const rendererPackagePath =path.resolve(process.cwd(), projectName, 'web-renderer','package.json')
                    const packageContent = fs.readFileSync(packagePath, "utf8");
                    const rendererPackageContent = fs.readFileSync(rendererPackagePath, "utf8");
                    const packageResult = handlebars.compile(packageContent)(populateData);
                    const rendererPackageResult = handlebars.compile(rendererPackageContent)(populateData);
                    fs.writeFileSync(packagePath, packageResult)
                    fs.writeFileSync(rendererPackagePath, rendererPackageResult)
                    spinner.succeed();
                }
            })
    }else if(answers?.['devPlatForm'] === 'Web'  && answers?.['jsFramework'] === 'React' && answers?.['UIFramework-2'] === 'Ant Design'){
        const spinner = ora('waiting download project...');
        spinner.start();
        await downloadGit('direct:https://github.com/Miranix/Web-React-Antd.git#main', path.resolve(process.cwd(), projectName), { clone: true },
            (err) => {
                if (err) {
                    console.log(`Download Failed！${err}`);
                    spinner.stop()
                } else {
                    // Populate Template Data
                    let populateData = {
                        name: projectName,
                        author: answers.email ? answers.author :'author',
                        email: answers.email ? answers.email :'email'
                    }
                    
                    const packagePath = path.resolve(process.cwd(), projectName,'package.json');
                    const rendererPackagePath =path.resolve(process.cwd(), projectName, 'web-renderer','package.json')
                    const packageContent = fs.readFileSync(packagePath, "utf8");
                    const rendererPackageContent = fs.readFileSync(rendererPackagePath, "utf8");
                    const packageResult = handlebars.compile(packageContent)(populateData);
                    const rendererPackageResult = handlebars.compile(rendererPackageContent)(populateData);
                    fs.writeFileSync(packagePath, packageResult)
                    fs.writeFileSync(rendererPackagePath, rendererPackageResult)
                    spinner.succeed();
                }
            })
    }
}