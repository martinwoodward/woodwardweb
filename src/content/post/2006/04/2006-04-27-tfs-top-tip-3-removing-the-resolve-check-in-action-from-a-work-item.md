---
title: "TFS Top Tip #3:  Removing the Resolve Check-In Action from a Work Item"
date: 2006-04-27T13:35:40.000Z
# post thumb
images:
  - "/images/post/2006-tfs-top-tip-3-removing-the-resolve-check-in-action-from-a-work-item.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["Technology"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I don’t know about you, but I love associating my check-ins with work items using the Pending Changes view, it makes it so easy to maintain requirements traceability and helps me feel less guilty as I’m doing one more thing that I should have been doing for years.  

The only problem with the default definitions for Bug and Task are that if you select the item then by default the “Resolve” check-in action is selected.  This is annoying for me as it the action I want to take in probably about 5% of check-ins.  95% of the time I just want to associate and 90% of the time I forgot that I have to change the default setting and end up going back to the work item and re-activating it.

The “Resolve” option is displayed when a state transition in the work item’s workflow is defined as having an action defined for check-in.  Below is the transition section from the MSF Agile Bug:-
<TRANSITION from="Active" to="Resolved"> 
  <REASONS> 
    <DEFAULTREASON value="Fixed" /> 
    <REASON value="Deferred" /> 
    <REASON value="Duplicate" /> 
    <REASON value="As Designed" /> 
    <REASON value="Unable to Reproduce" /> 
    <REASON value="Obsolete" /> 
  </REASONS> 
  <FIELDS> 
    <FIELD refname="System.AssignedTo"> 
      <COPY from="field" field="System.CreatedBy" /> 
    </FIELD> 
    <FIELD refname="Microsoft.VSTS.Common.ActivatedDate"> 
      <READONLY /> 
    </FIELD> 
    <FIELD refname="Microsoft.VSTS.Common.ActivatedBy"> 
      <READONLY /> 
    </FIELD> 
    <FIELD refname="Microsoft.VSTS.Common.ResolvedBy"> 
      <COPY from="currentuser" /> 
      <VALIDUSER /> 
      <REQUIRED /> 
    </FIELD> 
    <FIELD refname="Microsoft.VSTS.Common.ResolvedDate"> 
      <SERVERDEFAULT from="clock" /> 
    </FIELD> 
  </FIELDS> 
**  <ACTIONS> 
    <ACTION value="Microsoft.VSTS.Actions.Checkin" /> 
  </ACTIONS>** 
</TRANSITION>

If you remove the actions section from the transition from Active to Resolved transition then the only check-in action available will be “Associate”.  Admittedly, this means that I have to edit the work item after finishing checking in files to move it from Active to Resolved – but I find this works better for me.  I usually leave a little comment in the history as I change the state to say (at a high level) what I did and in the case of bugs any help I need to give to help the fix be verified by the test verification team.