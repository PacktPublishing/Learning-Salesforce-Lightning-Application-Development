public  class MockHttpResponseGenerator implements HttpCalloutMock {

    public static  String json ='{'+
		'	"kind": "youtube#searchListResponse",'+
		'	"etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/VbQ29IchbNsh3k2vNgn3ieYZsOc\"",'+
		'	"nextPageToken": "CAUQAA",'+
		'	"regionCode": "US",'+
		'	"pageInfo": {'+
		'		"totalResults": 1000000,'+
		'		"resultsPerPage": 5'+
		'	},'+
		'	"items": [{'+
		'			"kind": "youtube#searchResult",'+
		'			"etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/cx96QgLLWZH_JxHSfGIB_8-HdN0\"",'+
		'			"id": {'+
		'				"kind": "youtube#video",'+
		'				"videoId": "aJOTlE1K90k"'+
		'			},'+
		'			"snippet": {'+
		'				"publishedAt": "2018-05-31T04:00:00.000Z",'+
		'				"channelId": "UCN1hnUccO4FD5WfM7ithXaw",'+
		'				"title": "Maroon 5 - Girls Like You ft. Cardi B",'+
		'				"description": "\"Girls Like You” is out now. http://smarturl.it/GLY For more, visit: https://www.facebook.com/maroon5 https://twitter.com/maroon5 ...",'+
		'				"thumbnails": {'+
		'					"default": {'+
		'						"url": "https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg",'+
		'						"width": 120,'+
		'						"height": 90'+
		'					},'+
		'					"medium": {'+
		'						"url": "https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg",'+
		'						"width": 320,'+
		'						"height": 180'+
		'					},'+
		'					"high": {'+
		'						"url": "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",'+
		'						"width": 480,'+
		'						"height": 360'+
		'					}'+
		'				},'+
		'				"channelTitle": "Maroon5VEVO",'+
		'				"liveBroadcastContent": "none"'+
		'			}'+
		'		},'+
		'		{'+
		'			"kind": "youtube#searchResult",'+
		'			"etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/mevu8nf9YdRmvQ_TJ4cUYmmsxxQ\"",'+
		'			"id": {'+
		'				"kind": "youtube#video",'+
		'				"videoId": "f0bbDFRYD_A"'+
		'			},'+
		'			"snippet": {'+
		'				"publishedAt": "2018-03-02T05:05:46.000Z",'+
		'				"channelId": "UCM9r1xn6s30OnlJWb-jc3Sw",'+
		'				"title": "XXXTENTACION - changes",'+
		'				"description": "enjoy. ? HERE: https://xxxtentacion.lnk.to/NEWALBUM.",'+
		'				"thumbnails": {'+
		'					"default": {'+
		'						"url": "https://i.ytimg.com/vi/f0bbDFRYD_A/default.jpg",'+
		'						"width": 120,'+
		'						"height": 90'+
		'					},'+
		'					"medium": {'+
		'						"url": "https://i.ytimg.com/vi/f0bbDFRYD_A/mqdefault.jpg",'+
		'						"width": 320,'+
		'						"height": 180'+
		'					},'+
		'					"high": {'+
		'						"url": "https://i.ytimg.com/vi/f0bbDFRYD_A/hqdefault.jpg",'+
		'						"width": 480,'+
		'						"height": 360'+
		'					}'+
		'				},'+
		'				"channelTitle": "xxxtentacion",'+
		'				"liveBroadcastContent": "none"'+
		'			}'+
		'		}'+
		'	]'+
		'}';
    
    // Implement this interface method
    public HTTPResponse respond(HTTPRequest req) {
        // Optionally, only send a mock response for a specific endpoint
        // and method.
        System.assertEquals('https://www.googleapis.com/youtube/v3/search?key='+Youtubesearch.key+'&part=snippet'+'&q=Test', req.getEndpoint());
        System.assertEquals('GET', req.getMethod());
        
        // Create a fake response
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody(json);
        res.setStatusCode(200);
        return res;
    }
}
