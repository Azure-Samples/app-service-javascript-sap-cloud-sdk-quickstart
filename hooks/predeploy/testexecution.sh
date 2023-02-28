#!/bin/bash

npm run test; test $? -eq 0 || { printf '%s\n' "Failed running tests" >&2; exit 1; }