#!/usr/bin/env node

import commander from 'commander'
import { read, transform, write } from './lib/streams/index.js'

const program = new commander.Command()
program
  .option('-s, --shift <shiftCount>', 'a shift')
  .option('-i, --input <inputFilePath>', 'an input file')
  .option('-o, --output <outputFilePath>', 'an output file')
  .option('-a, --action <actionType>', 'an action encode/decode')

program.parse(process.argv)

const options = program.opts()

read(options.input).pipe(transform(options.shift, options.action)).pipe(write(options.output))

