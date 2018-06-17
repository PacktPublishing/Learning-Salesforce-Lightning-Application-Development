import {OAuth, DataService} from 'forcejs';

let oauth = OAuth.createInstance();
oauth.login()
    .then(oauthResult => {
        DataService.createInstance(oauthResult);
        console.log(oauthResult);
    });
