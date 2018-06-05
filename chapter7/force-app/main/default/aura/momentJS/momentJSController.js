({
    afterScriptsLoaded : function(component, event, helper) {
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // July 11th 2017, 11:23:19 am
        console.log(moment().format('dddd'));                    // Tuesday
        console.log(moment().format("MMM Do YY"));               // Jul 11th 17
        console.log(moment().format('YYYY [escaped] YYYY'));     // 2017 escaped 2017
        console.log(moment().format());                          // 2017-07-11T11:23:19-04:00
        console.log(moment("20111031", "YYYYMMDD").fromNow()); // 6 years ago
        console.log(moment("20120620", "YYYYMMDD").fromNow()); // 5 years ago
        console.log(moment().startOf('day').fromNow());        // 11 hours ago
        console.log(moment().endOf('day').fromNow());          // in 13 hours
        console.log(moment().startOf('hour').fromNow());       // 27 minutes ago
        console.log(moment().subtract(10, 'days').calendar()); // 07/01/2017
        console.log(moment().subtract(6, 'days').calendar());  // Last Wednesday at 11:28 AM
        console.log(moment().subtract(3, 'days').calendar());  // Last Saturday at 11:28 AM
        console.log(moment().subtract(1, 'days').calendar());  // Yesterday at 11:28 AM
        console.log(moment().calendar());                      // Today at 11:28 AM
        console.log(moment().add(1, 'days').calendar());       // Tomorrow at 11:28 AM
        console.log(moment().add(3, 'days').calendar());       // Friday at 11:28 AM
        console.log(moment().add(10, 'days').calendar());      // 07/21/2017
        console.log(moment.locale());         // en
        console.log(moment().format('LT'));   // 11:29 AM
        console.log(moment().format('LTS'));  // 11:29:23 AM
        console.log(moment().format('L'));    // 07/11/2017
        console.log(moment().format('l'));    // 7/11/2017
        console.log(moment().format('LL'));   // July 11, 2017
        console.log(moment().format('ll'));   // Jul 11, 2017
        console.log(moment().format('LLL'));  // July 11, 2017 11:29 AM
        console.log(moment().format('lll'));  // Jul 11, 2017 11:29 AM
        console.log(moment().format('LLLL')); // Tuesday, July 11, 2017 11:29 AM
        console.log(moment().format('llll'));
        var now = moment();
        console.log(now);
        var day = moment(1318781876406);
         console.log(day);
        }
     })