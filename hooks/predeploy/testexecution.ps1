#!/usr/bin/env pwsh

npm run test; if ($LASTEXITCODE -ne 0) { throw 'Failed running tests' }