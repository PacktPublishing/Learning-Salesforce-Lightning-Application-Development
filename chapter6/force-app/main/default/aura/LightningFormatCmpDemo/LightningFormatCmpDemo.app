<aura:application extends="force:slds">
   
   <aura:attribute name="street" type="string"/>
   <aura:attribute name="city" type="string"/>
   <aura:attribute name="country" type="string"/>
   <aura:attribute name="province" type="string"/>
   <aura:attribute name="postalCode" type="string"/>

    <aura:attribute name="provinceOptions" type="List" default="[
        {'label': 'California', 'value': 'CA'},
        {'label': 'Texas', 'value': 'TX'},
        {'label': 'Washington', 'value': 'WA'},
        {'label': 'Tennesse', 'value': 'TN'},
    ]"/>
    <aura:attribute name="countryOptions" type="List" default="[
        {'label': 'United States', 'value': 'US'},
        {'label': 'Japan', 'value': 'JP'},
        {'label': 'China', 'value': 'CN'},
        {'label': 'India', 'value': 'IN'},
    ]"/>

    <aura:attribute name="salutationOptions" type="List" default="[
        {'label': 'None', 'value': 'None'},
        {'label': 'Mr.', 'value': 'Mr.'},
        {'label': 'Ms.', 'value': 'Ms.'},
        {'label': 'Mrs.', 'value': 'Mrs.'},
        {'label': 'Dr.', 'value': 'Dr.'},
        {'label': 'Prof.', 'value': 'Prof.'}
    ]"/>

    <aura:attribute name="fields" type="List" default="['firstName', 'lastName']"/>

    <aura:attribute name="firstName" type="string"/>
    <aura:attribute name="middleName" type="string"/>
    <aura:attribute name="lastName" type="string"/>
    <aura:attribute name="informalName" type="string"/>
    <aura:attribute name="suffix" type="string"/>
    <aura:attribute name="salutation" type="string"/>

    <lightning:layout verticalAlign="start" multipleRows="true">
        <lightning:layoutItem flexibility="auto" padding="around-small" size="12">
                <lightning:inputAddress
                    aura:id="myaddress"
                    addressLabel="Address"
                    streetLabel="Street"
                    cityLabel="City"
                    countryLabel="Country"
                    provinceLabel="State"
                    postalCodeLabel="PostalCode"
                    street="{!v.street}"
                    city="{!v.city}"
                    country="{!v.city}"
                    province="{!v.province}"
                    postalCode="{!v.postalCode}"
                    countryOptions="{!v.countryOptions}"
                    provinceOptions="{!v.provinceOptions}"
                    required="true"
                />
            </lightning:layoutItem>
            <lightning:layoutItem flexibility="auto" padding="around-small" size="12">
                Formatted Address :<lightning:formattedAddress
                    street="{!v.street}"
                    city="{!v.city}"
                    country="{!v.country}"
                    province="{!v.province}"
                    postalCode="{!v.postalCode}"
                />
            </lightning:layoutItem>
        </lightning:layout>
        <lightning:layoutItem flexibility="auto" padding="around-small" size="6">
                <lightning:inputName
                    aura:id="myname"
                    label="Contact Name"
                    firstName="{!v.firstName}"
                    middleName="{!v.middleName}"
                    lastName="{!v.lastName}"
                    informalName="{!v.informalName}"
                    suffix="{!v.suffix}"
                    salutation="{!v.salutation}"
                    options="{!v.salutationOptions}"
                    fieldsToDisplay="{!v.fields}"
                />
            </lightning:layoutItem>
            <lightning:layoutItem flexibility="auto" padding="around-small" size="12">
                Formatted Name : <lightning:formattedName
                    firstName="{!v.firstName}"
                    middleName="{!v.middleName}"
                    lastName="{!v.lastName}"
                    informalName="{!v.informalName}"
                    suffix="{!v.suffix}"
                    salutation="{!v.salutation}"
                />
            </lightning:layoutItem>
</aura:application>    
