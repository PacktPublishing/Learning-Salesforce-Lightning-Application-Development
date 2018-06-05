<aura:application extends="force:slds">
    <div class="c-container">
        <lightning:layout multipleRows="true">
            <lightning:layoutItem padding="around-small" size="12">
                <div class="page-section page-header">
                    <h2>Header</h2>
                </div>
            </lightning:layoutItem>
            <lightning:layoutItem padding="around-small" size="12">
                <lightning:layout>
                    <lightning:layoutItem padding="around-small" size="3">
                        <div class="page-section page-right">
                            <h2>Left Sidebar</h2>
                            <p>
                                 Test SideBar Content
                            </p>
                        </div>
                    </lightning:layoutItem>
                    <lightning:layoutItem padding="around-small" size="6">
                        <div class="page-section page-main">
                            <h2>Main</h2>
                            <p>
                               Main Page Content
                            </p>
                        </div>
                    </lightning:layoutItem>
                    <lightning:layoutItem padding="around-small" size="3">
                        <div class="page-section page-right">
                            <h2>Right Sidebar</h2>
                            <ul>
                                <li><a href="#">Archive 1</a>
                                </li>
                                <li><a href="#">Archive 2</a>
                                </li>
                                <li><a href="#">Archive 3</a>
                                </li>
                                <li><a href="#">Archive 4</a>
                                </li>
                                <li><a href="#">Archive 5</a>
                                </li>
                            </ul>
                        </div>
                    </lightning:layoutItem>
                </lightning:layout>
            </lightning:layoutItem>
            <lightning:layoutItem flexibility="auto" padding="around-small" size="12">
                <div class="page-footer page-section">
                    <h2>Footer</h2>
                </div>
            </lightning:layoutItem>
        </lightning:layout>
    </div>
</aura:application>
