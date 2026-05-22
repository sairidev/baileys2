"use strict"

const logo = `
 ░██████╗░█████╗░██╗██████╗░██╗██████╗░███████╗██╗░░░██╗
 ██╔════╝██╔══██╗██║██╔══██╗██║██╔══██╗██╔════╝██║░░░██║
 ╚█████╗░███████║██║██████╔╝██║██║░░██║█████╗░░╚██╗░██╔╝
 ░╚═══██╗██╔══██║██║██╔══██╗██║██║░░██║██╔══╝░░░╚████╔╝░
 ██████╔╝██║░░██║██║██║░░██║██║██████╔╝███████╗░░╚██╔╝░░
 ╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝╚═════╝░╚══════╝░░░╚═╝░░░
`
const line = "━".repeat(52)
try {
    const chalk = require("chalk")
    const colors = [chalk.bold.red, chalk.bold.yellow, chalk.bold.green, chalk.bold.cyan, chalk.bold.blue, chalk.bold.magenta]
    let i = 0
    const coloredLogo = logo.split("").map(ch => (ch !== " " && ch !== "\n" && ch !== "\r") ? colors[i++ % colors.length](ch) : ch).join("")
    console.log(coloredLogo)
    console.log(chalk.bold.cyan(line))
    console.log(chalk.bold.green("  WA          : ") + chalk.bold.white("6287745498338"))
    console.log(chalk.bold.yellow("  Buy Panel   : ") + chalk.bold.white("sairibot.my.id/panel"))
    console.log(chalk.bold.cyan("  Web         : ") + chalk.bold.white("sairibot.my.id"))
    console.log(chalk.bold.cyan(line))
    console.log()
} catch {
    console.log(logo)
    console.log(line)
    console.log("  WA          : 6287745498338")
    console.log("  Buy Panel   : sairibot.my.id/panel")
    console.log("  Web         : sairibot.my.id")
    console.log(line + "\n")
}

const __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k

    let desc = Object.getOwnPropertyDescriptor(m, k)

    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
          enumerable: true, 
          get: function() { 
              return m[k] 
          }
       }
    }

    Object.defineProperty(o, k2, desc) 

    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
    }
))

const __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) {
            __createBinding(exports, m, p)
       }
   }
}

Object.defineProperty(exports, "__esModule", { 
    value: true 
})

exports.proto = 
exports.makeWASocket = null

const { proto } = require("../WAProto")

Object.defineProperty(exports, "proto", {
    enumerable: true, 
    get: function () { 
        return proto
    } 
})

const { default: socket } = require("./Socket")

exports.makeWASocket = socket

__exportStar(require("../WAProto"), exports)
__exportStar(require("./Utils"), exports)
__exportStar(require("./Types"), exports)
__exportStar(require("./Store"), exports)
__exportStar(require("./Defaults"), exports)
__exportStar(require("./WABinary"), exports)
__exportStar(require("./WAM"), exports)
__exportStar(require("./WAUSync"), exports) 

exports.default = socket
