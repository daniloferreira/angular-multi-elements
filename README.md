## Configuração para multiplos angular elements funcionarem sem remover o Zone.js

Instalação
```ssh
npm install -g lerna
npm install -g http-server
lerna bootstrap
````

cd packages/smart-header-component; ./custom-build.sh; cd -
cd packages/smart-footer; ./custom-build.sh; cd -

Em terminais diferentes:
```ssh
http-server --port 8080 packages/main-app
http-server --port 8081 packages/smart-header-component/preview
http-server --port 8082 packages/smart-footer/preview
```
Então acessar [http://127.0.0.1:8080](http://127.0.0.1:8080) e verificar que os angular elements foram carregados normalmente sem erro
