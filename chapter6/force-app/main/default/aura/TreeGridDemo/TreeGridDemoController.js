({
    init: function (cmp) {
        var columns = [
            {
                type: 'text',
                fieldName: 'accountName',
                label: 'Account Name'
            },
            {
                type: 'number',
                fieldName: 'employees',
                label: 'Employees'
            },
            {
                type: 'phone',
                fieldName: 'phone',
                label: 'Phone Number'
            },
            {
                type: 'url',
                fieldName: 'accountOwner',
                label: 'Account Owner',
                typeAttributes: {
                    label: { fieldName: 'accountOwnerName' }
                }
            }
        ];
        cmp.set('v.gridColumns', columns);
        var nestedData = [
            {
                "name": "123555",
                "accountName": "Rewis Inc",
                "employees": 3100,
                "phone": "837-555-1212",
                "accountOwner": "http://sfdc.co/jane-doe",
                "accountOwnerName": "Jane Doe"
            },
            {
                "name": "123556",
                "accountName": "Acme Corporation",
                "employees": 10000,
                "phone": "837-555-1212",
                "accountOwner": "http://sfdc.co/john-doe",
                "accountOwnerName": "John Doe",
                "_children": [
                    {
                        "name": "123556-A",
                        "accountName": "Acme Corporation (Bay Area)",
                        "employees": 3000,
                        "phone": "837-555-1212",
                        "accountOwner": "http://sfdc.co/john-doe",
                        "accountOwnerName": "John Doe",
                        "_children": [
                            {
                                "name": "123556-A-A",
                                "accountName": "Acme Corporation (Oakland)",
                                "employees": 745,
                                "phone": "837-555-1212",
                                "accountOwner": "http://sfdc.co/john-doe",
                                "accountOwnerName": "John Doe"
                            },
                            {
                                "name": "123556-A-B",
                                "accountName": "Acme Corporation (San Francisco)",
                                "employees": 578,
                                "phone": "837-555-1212",
                                "accountOwner": "http://sfdc.co/jane-doe",
                                "accountOwnerName": "Jane Doe"
                            }
                        ]
                    }
                ]
            },
        ];
        cmp.set('v.gridData', nestedData);
        var expandedRows = ["123556"];
        cmp.set('v.gridExpandedRows', expandedRows);
    }
})