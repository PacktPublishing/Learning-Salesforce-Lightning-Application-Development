<aura:application extends="force:slds">
  <aura:attribute name="DateTimeInput" type="DateTime" />
  <aura:attribute name="output" type="DateTime" />
    
      <lightning:input type="datetime-local" label="Input Date" name="date" value="{!v.DateTimeInput}"/>
    
      <lightning:select aura:id="select" name="select" label="Select a pie" onchange="{! c.onChange }">
        <option value="">choose one...</option>
        <option value="YYYY MM DD">YYYY MM DD format</option>
        <option value="MMMM DD YYYY, hh:mm:ss a">MMMM DD YYYY, hh:mm:ss a format</option>
        <option value="yyyy-MM-dd HH:mm:ss.SSS">yyyy-MM-dd HH:mm:ss.SSS format</option>
    </lightning:select>
    
     <p>outputDate {!v.output}</p>
</aura:application>	
