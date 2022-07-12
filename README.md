## Installation

```
npm install  powerfe-cli -g
```

## Usage

Open your terminal and type `powerfe -h` , you'll see the help infomation below:

```
Usage: powerfe <command>

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  list           List the templateList
  init           init a project
```

## powerfe list

This command will shows you the templates list.

```
$ powerfe list
┌──────┬──────────────────────────────────────────────────┐
│ name │ url                                              │
├──────┼──────────────────────────────────────────────────┤
│  pc  │ https://github.com/Michael-lzg/vue-cli4-vant.git │
└──────┴──────────────────────────────────────────────────┘
```

## powerfe init 

You can init a templates use this command

```
powerfe init pc <project name>
```