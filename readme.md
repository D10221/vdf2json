# vdf2json
Converts [vdf](https://developer.valvesoftware.com/wiki/KeyValues) to [json](https://www.json.org)

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
