# vdf2json
Converts [vdf](https://developer.valvesoftware.com/wiki/KeyValues) to [json](https://www.json.org)

[![CI](https://github.com/D10221/vdf2json/actions/workflows/build.yml/badge.svg)](https://github.com/D10221/vdf2json/actions/workflows/build.yml)

## install
```bash
npm i vdf2json -g # TODO: not on npm yet
# in the meantime
git clone https://github.com/D10221/vdf2json.git
cd vdf2json
npm install
npm link
```
## Usage, example, motivation
- Query a vdf file with jq
```bash
cat a.vdf | vdf2json | jq '.path.to.prop'
```
- Dispay a binary vdf file as json
```bash
vdfbin2json ~/.local/share/Steam/userdata/1229273647/config/shortcuts.vdf
```

## Credits

- [vdf-parser](https://github.com/p0358/vdf-parser)
- [steam-binary-vdf-ts](https://github.com/Corecii/steam-binary-vdf-ts)