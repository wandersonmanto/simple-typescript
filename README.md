Os arquivos Typescript tem extenção .ts
Ex: index.ts

### Comandos
npx tsc index.ts
ou
tsc index.ts
##### Cria um arquivo equivalente em javascript alterando a sua extenção para .js

npx tsc --init
##### Cria o arquivo de configuração tsconfig.json
logo após a criação do arquivo executar
npx tsc ou tsc para assumir a configuração conforme o arquivo(em caso de alterações no arquivo executar comandos novamente)

###### Obs. Arquivos importantes dentro de tsconfig.json
- "target": "es2016"
Altera a versao do ecma script utilizado pelo typescript (Uma alteração perceptivel é atilização do let ao invés do var)
- "module": "commonjs"
Define os tipos de import sendo require para o padrão("module": "commonjs") ou import para("module": "ESNext")
- // "outDir": "./",
Define o diretório onde o arquivo similar será criado(vem comentada por padrão)
- // "rootDir": "./",
Define o diretório onde o vs code irá buscar os arquivos .ts(vem comentada por padrão)