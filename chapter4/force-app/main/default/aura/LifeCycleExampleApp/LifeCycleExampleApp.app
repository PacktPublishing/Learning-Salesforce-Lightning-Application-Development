<aura:application extends="force:slds">
  <aura:handler name="init" value="{!this}" action="{!c.onInit}"/>
    <aura:handler name="render" value="{!this}" action="{!c.onRender}"/>
    <div aura:id="example">
        <span> 1 </span>
        <span> 2 </span>
        <span> 3 </span>
        <span> 4 </span>
    </div>
</aura:application>
