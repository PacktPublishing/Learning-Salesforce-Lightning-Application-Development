import {OAuth} from 'forcejs';


let oauth = OAuth.createInstance("3MVG9JamK_x9K2XI99fdzq3yLlbGhfhg6FEM_8bszwi4XeG1ktlVrQf1B9tZr8cuTLBgAkl2lk.psKz7JZw0Q"
                                ,"https://test.salesforce.com",
                                "https://infinite-brushlands-64356.herokuapp.com/oauthcallback.html"
                                );
oauth.login()
    .then(oauthResult => {
        //console.log(oauthResult);
        renderLightningOutComponent(oauthResult);
    });

let renderLightningOutComponent = (oauthResult) => {
    const token = oauthResult.accessToken;
    const lightningEndPointURI = "https://ability-page-3410-dev-ed.lightning.force.com";
    $Lightning.use("c:youtubesearchOutApp", () => {
        $Lightning.createComponent("c:youtubesearch", {},
           "youtubeApp",
            (cmp) => {
               //Component COde
            });
  },lightningEndPointURI,token );

}
