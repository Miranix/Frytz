# Frytz CLI

Frytz is a lightweight yet powerful CLI tool designed to quickly scaffold common front-end applications, simplifying multi-platform development by unifying file structure and code for Desktop, Web, App, and Mini-Program projects with customizable tech stacks.

## Features

- Multi-Platform Template Generation
- Customizable Tech Stack

## Supported Stacks

| Platform | Platform Framework | JS Framework | UI Framework                                                            |
| -------- | ------------------ | ------------ | ----------------------------------------------------------------------- |
| Web      | None               | React，Vue   | React：Antd  ShadcnUI MaterialUI<br />Vue：ElementPlus<br />Tailwind |
| App      | React Native       | React        | React：Antd  ShadcnUI MaterialUI<br />Vue：ElementPlus<br />Tailwind |
| Desktop  | Electron           | React，Vue   | React：Antd  ShadcnUI MaterialUI<br />Vue：ElementPlus<br />Tailwind |
| Mini App | Uniapp/Taro        | React，Vue   | React：Antd  ShadcnUI MaterialUI<br />Vue：ElementPlus<br />Tailwind |

## Install

You can install Frytz globally using npm:

```bash
npm install -g frytz
```

## Usage

Once installed, you can use the `frytz` command in your terminal.

### Create a New Project

To create a new front-end project, run:

```bash
frytz create <project-name>
```

This will generate a basic project structure tailored to your needs.

### View Help

To see the list of available commands and their descriptions, use the following command:

```bash
frytz help
```

This will display all available commands and their usage instructions.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
