describe("YoutubeSearchAppTest", function(){ 

   var responseObject ;

   afterEach(function () {
        $T.clearRenderedTestComponents();
    });

   beforeEach(function (){
        responseObject = {
          "kind": "youtube#searchListResponse",
          "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/VbQ29IchbNsh3k2vNgn3ieYZsOc\"",
          "nextPageToken": "CAUQAA",
          "regionCode": "US",
          "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 5
          },
          "items": [
            {
              "kind": "youtube#searchResult",
              "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/cx96QgLLWZH_JxHSfGIB_8-HdN0\"",
              "id": {
                "kind": "youtube#video",
                "videoId": "aJOTlE1K90k"
              },
              "snippet": {
                "publishedAt": "2018-05-31T04:00:00.000Z",
                "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
                "title": "Maroon 5 - Girls Like You ft. Cardi B",
                "description": "\"Girls Like You” is out now. http://smarturl.it/GLY For more, visit: https://www.facebook.com/maroon5 https://twitter.com/maroon5 ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Maroon5VEVO",
                "liveBroadcastContent": "none"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/mevu8nf9YdRmvQ_TJ4cUYmmsxxQ\"",
              "id": {
                "kind": "youtube#video",
                "videoId": "f0bbDFRYD_A"
              },
              "snippet": {
                "publishedAt": "2018-03-02T05:05:46.000Z",
                "channelId": "UCM9r1xn6s30OnlJWb-jc3Sw",
                "title": "XXXTENTACION - changes",
                "description": "enjoy. ? HERE: https://xxxtentacion.lnk.to/NEWALBUM.",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/f0bbDFRYD_A/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/f0bbDFRYD_A/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/f0bbDFRYD_A/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "xxxtentacion",
                "liveBroadcastContent": "none"
              }
            }
            ]
          }
   });

    describe("A suite that tests youtube search component functionality", function() {
        describe('c:youtubesearch', function () {
            it('verify component rendering for search test', function (done) {
                $T.createComponent('c:youtubesearch', {searchTerm :"searchString"}, true)
                    .then(function(component) {
                        expect(component.find("searchTermRendered").getElement().innerHTML).toBe(' You searched for searchString');
                        done();
                    }).catch(function (e) {
                        done.fail(e);
                    });
            });
            //Tests for the server Response
            it('verify that server methods were called', function (done) {
                $T.createComponent('c:youtubesearch', {searchTerm :"searchString"}, true)
                    .then(function(component) {
                        var mockResponse = { 
                            getState: function () { 
                                return "SUCCESS";
                            }, 
                            getReturnValue: function () { 
                                return JSON.stringify(responseObject); 
                            } 
                        };
                        spyOn($A, "enqueueAction").and.callFake(function (action) {
                            var cb = action.getCallback("SUCCESS");
                            cb.fn.apply(cb.s, [mockResponse]);
                        });
                        component.search();
                        expect(component.get("v.data").items.length).toBe(2);
                        done();
                    }).catch(function (e) {
                        done.fail(e);
                    });
            });
        });
    });
    
});