<aura:application extends="force:slds">
     <div class="spinner" aura:id="spinner">
       <lightning:spinner alternativeText="Loading" />
     </div>
    <lightning:button label="Toggle" variant="brand" onclick="{! c.handleClick }" class="btn"/>
</aura:application>
