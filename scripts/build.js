const { exec } = require('child_process')

exec(`tsc --module umd --outDir dist`)
exec(`tsc --module commonjs --outDir lib`)
exec(`tsc --module esnext --outDir es`)
