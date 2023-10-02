###### ######################## ######
###### ######################## ######
######        PLAYGROUND        ######
###### ######################## ######
###### ######################## ######



###### ######################## ######
######            NX            ######
###### ######################## ######

`nx reset` // * ------------------------------------------------------------------- Clears cache and shuts down the Nx Daemon;
`nx dep-graph` // * --------------------------------------------------------------- Nx Dependency Graph;

`nx run-many --target=build --all`
`nx run-many --target=serve --all`
`nx run-many --target=serve --projects=LOGIN,GATEWAY,FIREBASE`

`nx serve DASHBOARD --devRemotes=LOGIN,TRADER,CHAT`

`nx generate @nx/angular:app FRONTEND/LOGIN --skip-tests --standalone`
`nx generate @nx/angular:service WEBSOCKET/FILES/websocket --project=FRONTEND --flat --skip-tests`
`nx generate @nx/angular:component COMPONENTS/dashboard --project=NEWS --flat --standalone --inlineTemplate --inlineStyle --skip-tests`

`nx generate @nx/angular:library UI-COMPONENTS`
`nx generate @nx/angular:directive --name=DIRECTIVES/FILES/layout-manager --project=UI-COMPONENTS --flat --standalone --skip-tests`
`nx generate @nx/angular:component --name=SHELL/shell-view --project=UI-COMPONENTS --flat --standalone --inlineTemplate --inlineStyle --skip-tests`

`nx generate @nx/nest:app FIREBASE` // * ---------------------------------------- Create a new APP;
`nx generate @nx/nest:library --name=SHARED-lib` // * --------------------------- Create a new LIBRARY;
`nx generate @nx/nest:module --name=firebase --directory=app --flat` // * ------- Create a new MODULE;

`nx generate @nx/workspace:remove --projectName=FIREBASE` // * ------------------ Remove an old PROJECT;
`nx generate @nx/workspace:move --project=DASHBOARD --destination=FRONTEND/DASHBOARD` // * - Move project to a new location;

`nx generate @angular/pwa:ng-add --project=LOGIN` // * -------------------------- Add PWA with Angular CLI;
`nx generate @angular/material:nav --name=NAVIGATION/FILES/layout-manager --project=UI-COMPONENTS --flat --standalone --inlineTemplate --inlineStyle --skip-tests`

###### ######################## ######
######       PACKAGE.JSON       ######
###### ######################## ######

FIXING `ncu --update` CONFLICTS

CLEAN NPM CACHE: `npm cache clean --force`;
    
DELETE (node_modules & package-lock.json):
    1) `rm -rf node_modules package-lock.json`;
    2) `npm install`;

###### ######################## ######
######          GITHUB          ######
###### ######################## ######

*))))) MUST RE-NEW PASSWORD; 

USERNAME: (`Michael-Lonsdale`);
GENERATE NEW TOKEN: (`ACCOUNT DROPDOWN`/`SETTINGS`/`DEVELOPER SETTINGS`/`PERSONAL ACCESS TOKENS`/`TOKENS (classic)`);

ADD REPOSITORY FILES: (`git add .`);
COMMIT FILES: (`git commit --message "<CURRENT DATE>"`);
PUSH CODE to GITHUB: (`git push --set-upstream origin main`);
