# vdf2json
Converts [vdf](https://developer.valvesoftware.com/wiki/KeyValues) to [json](https://www.json.org)

[![CI](https://github.com/D10221/vdf2json/actions/workflows/build.yml/badge.svg)](https://github.com/D10221/vdf2json/actions/workflows/build.yml)

## install
```bash
npm i vdf2json -g
```
## Usage, example, motivation
- Query a vdf file with jq
```
cat a.vdf | vdf2json | jq '.path.to.prop'
```
## Credits

- [vdf-parser](https://github.com/p0358/vdf-parser)
