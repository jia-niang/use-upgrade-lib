const { execSync } = require('child_process')

execSync(`tsc --module umd --outDir dist`)
execSync(`tsc --module commonjs --outDir lib`)
execSync(`tsc --module esnext --outDir es`)
