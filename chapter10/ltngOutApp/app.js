import {OAuth, DataService} from 'forcejs';

let oauth = OAuth.createInstance();
oauth.login()
    .then(oauthResult => {
        DataService.createInstance(oauthResult);
        console.log(oauthResult);
        renderLightningOutComponent(oauthResult);
    });

let renderLightningOutComponent = (oauthResult) => {
    const token = "Bearer "+ oauthResult.accessToken;
    const lightningEndPointURI = "https://ability-page-3410-dev-ed..lightning.force.com";
    $Lightning.use("c:youtubesearchOutApp", function() {
        $Lightning.createComponent("c:youtubesearch", {},
           "youtubeApp",
            function(cmp) {
               // do some stuff
            });
  },lightningEndPointURI,token );

}
