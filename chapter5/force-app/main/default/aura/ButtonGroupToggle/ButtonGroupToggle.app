<aura:application extends="force:slds">
   <lightning:buttonGroup>
        <lightning:button label="Refresh" aura:id="myBtn" variant="Neutral" onclick="{!c.setActive}"/>
        <lightning:button label="Edit" aura:id="myBtn" variant="Neutral" onclick="{!c.setActive}"/>
        <lightning:button label="Save" aura:id="myBtn" variant="Neutral" onclick="{!c.setActive}"/>
    </lightning:buttonGroup>
</aura:application>
