<aura:application extends="force:slds">
  <aura:handler name="init" value="{!this}" action="{!c.onInit}"/>
    <aura:handler name="render" value="{!this}" action="{!c.onRender}"/>
    <aura:attribute name="search" type="string"/>
    <div aura:id="example">
        <span> 1 </span>
        <span> 2 </span>
        <span> 3 </span>
        <span> 4 </span>
    </div>
    <lightning:input value="{!v.search}" label="search" name="search" aura:id="searchInput"/>
    <lightning:button variant="brand" label="Submit" onclick="{! c.handleClick }" />
</aura:application>	
