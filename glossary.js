//Automatically generated file, don't edit!
//Include this glossary.js file in your specification
//  with <script src="glossary.js" class="remove"></script>
//Insert glossary definitions with the following 
// <div class="glossary-ref" ref="glossary-generation"></div>
glossary_string= 
' ' + 
'<html> ' + 
'<!-- ' + 
'authentication_token ' + 
'plan ' + 
'acknowledgement ' + 
'machine_output ' + 
'request ' + 
'negotiation_offer ' + 
'feedback_report ' + 
'reputation_report ' + 
'ui_view ' + 
'incentive_reward ' + 
' ' + 
'authenticate_agent ' + 
'submit_request ' + 
'compute_plan ' + 
'modify_plan ' + 
'store_data ' + 
'compute_reputation ' + 
'submit_ offer ' + 
'change_view ' + 
'reward_incentive ' + 
' ' + 
'--> ' + 
' ' + 
'<div class="glossary" id="glossary-agent">   ' + 
'An <dfn id="concept-agent">agent</dfn> is anything that can possibly perform an <a>activity</a>. Alternatively, anything that has <a title="capability">capabilities</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-user">   ' + 
'A <dfn id="concept-user">user</dfn> is a person who is using a SmartSociety system. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-peer">   ' + 
'A <dfn id="concept-peer">peer</dfn> is a software <a>agent</a> in a SmartSociety system that represents another <a>agent</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-identity">   ' + 
'<a title="agent">Agents</a>, <a title="user">users</a>, <a title="peer">peers</a> all have <dfn id="concept-identity" title="identity">identities</dfn>. An unauthenticated user gets ' + 
'assigned an identity automatically. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-collective">   ' + 
'A <dfn id="concept-collective">collective</dfn> is an <a>agent</a> that consists of multiple member <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-activity">   ' + 
'An <dfn id="concept-activity">activity</dfn> is the condition in which things are happening or being done. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-capability">   ' + 
'A <dfn id="concept-capability">capability</dfn> is a prospective, though not necessarily planned or agreed, <a>activity</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-task">   ' + 
'A <dfn id="concept-task">task</dfn> is a potential activity that involves <a title="capability">capabilities</a>, potentially contributed by several <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-plan">   ' + 
'A <dfn id="concept-plan">plan</dfn> is a specification for the execution of a <a>task</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-protocol">   ' + 
'A <dfn id="concept-protocol">protocol</dfn> is a collection of <a title="plan">plans</a> that involve communications between <a title="peer">peers</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-messaging_action">   ' + 
'A <dfn id="concept-messaging_action">messaging action</dfn> is the constituent of a protocol: it involves information exchange and subsequent action. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-message">   ' + 
'A <dfn id="concept-message">message</dfn> is a piece of information exchanged between <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<!-- Reputation concepts--> ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_peer">   ' + 
'A <dfn id="concept-reputation_peer">reputation peer</dfn> is a specialisation of a <a>peer</a>, which specialises in storing feedback about <a title="subject">subjects</a> and generating reputation and opinion reports about <a title="subject">subjects</a>.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-feedback_report">   ' + 
'A <dfn id="concept-feedbackReport">feedback report</dfn> is a report about a <a>subject</a> that contains a set of value rating categories. For example, "star rating = 4.3". ' + 
' ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_report">   ' + 
'A <dfn id="concept-reputation_report">reputation report</dfn> is a report about a <a>subject</a> that contains a set of value rating categories. For example, a <a>subject</a> has been rated with a set of star ratings, and the average of those star ratings are "average star rating = 4.3". ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-opinion_report">   ' + 
'An <dfn id="concept-opinion_report">opinion report</dfn> is a specialisation of a <a>reputation report</a>, which contains a single key value pair and binds an opinion to a value. The value is an aggregation of ratings from a set of reputation topics. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-submitting_feedback">   ' + 
'A <dfn id="concept-submitting_feedback">submitting feedback</dfn> is an <a>activity</a> that submits a <a>feedback report</a> to the <a>reputation peer</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-storing_feedback">   ' + 
'A <dfn id="concept-storing_feedback">storing feedback</dfn> is an <a>activity</a> used by <a>reputation peer</a> to store a <a>feedback report</a> within it. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-computing_reputation">   ' + 
'A <dfn id="concept-computing_reputation">computing reputation</dfn> is an <a>activity</a> that is run by the <a>reputation peer</a> when a <a>feedback report</a> is submitted, it computes a <a>reputation report</a> for all the <a title="subject">subjects</a> referred to by the submitted <a>feedback report</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-feedback_category">   ' + 
'A <dfn id="concept-feedback_category">feedback category</dfn> is a category used to rate a <a>subject</a>, in a <a>feedback report</a>.    ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_category">   ' + 
'A <dfn id="concept-reputation_category">reputation category</dfn> is a category used to rate a <a>subject</a>, in a <a>reputation report</a>.   ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-subject">   ' + 
'A <dfn id="concept-subject">subject</dfn> is either an <a>activity</a>, <a>agent</a>, <a>peer</a>, <a>user</a>, or <a>collective</a>, that is being discussed, described, or dealt with in the context of <a>feedback reports</a> and <a>reputation reports</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-opinion">   ' + 
'A <dfn id="concept-opinion">opinion</dfn> is a quantitive value of the estimation of a <a>subject</a>s worth based on <a>feedback categories</a> about it. ' + 
' ' + 
'either an <a>activity</a>, <a>agent</a>, <a>peer</a>, <a>user</a>, or <a>collective</a>, that is being discussed, described, or dealt with in the context of <a>feedback reports</a> and <a>reputation reports</a>. ' + 
'</div>  ' + 
' ' + 
'<!-- Orchestration concepts --> ' + 
' ' + 
'<div class="glossary" id="glossary-orchestration_peer">   ' + 
'A <dfn id="concept-orchestration_peer">orchestration peer</dfn> is a specialisation of a <a>peer</a>, which specialises in storing feedback about <a title="subject">subjects</a> and generating  <a title="reputation report">reputation reports</a> and <a title="opinion report">opinion reports</a> about <a title="subject">subjects</a>.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-composing_activity">   ' + 
'A <dfn id="concept-composing_activity">composing activity</dfn> is an <a>activity</a> that may be comprised of the following <a title="activity">activities</a> <a title="authenticating activity">authenticating activity</a>, <a title="computing composition"> computing composition</a> and <a title="computing task complement">computing_task_complement</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-authenticate_activity">   ' + 
'An <dfn id="concept-authenticate_activity">authenticating activity</dfn> is an <a>activity</a> that authenticates a <a>user</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-storing_task"> ' + 
'A <dfn id="concept-storing_task">storing task</dfn> is an <a>activity</a> that stores a <a>task</a> locally. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-computing_task_complement"> ' + 
'A <dfn id="concept-computing_task_complement">computing task complement</dfn> is an <a>activity</a> that identifies which set of <a title="task">tasks</a> that are no longer valid. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-computing_composition">   ' + 
'A <dfn id="concept-computing_composition">computing composition</dfn> is an <a>activity</a> that computes a set of valid <a title="task">tasks</a> given constraints or negotiation inputs. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-submitting_activity">   ' + 
'A <dfn id="concept-submitting_activity">submitting activity</dfn> is an <a>activity</a> that submits a <a>task</a>, it may comprise of an <a title="authenticate activity">authenticating activity</a> and <a>storing task</a> activities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-sending_negotiation_response">   ' + 
'A <dfn id="concept-sending_negotiation_response">sending negotiation response</dfn> is an entity that contains the <a>response</a> to a <a>negotiation activity</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-negotiating_activity">   ' + 
'A <dfn id="concept-negotiating_activity">negotiating activity</dfn> is an activity that submits a <a>task</a> which may alter other <a>tasks</a>, it may comprise of an <a title="authenticate activity">authenticating activity</a> and <a>storing task</a> activities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-posting_task_request">   ' + 
'A <dfn id="concept-posting_task_request">posting task request</dfn> is an <a>activity</a> that posts a <a>task</a> to <a>orchestration peer</a>.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-authenticated_user">   ' + 
'An <dfn id="concept-authenticated_user">authenticated user</dfn> is a <a>user</a> that has been <a title="authenticate activity">authenticated</a> by the means of a authenticating activity using their <a title="identity">identity</a>. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-requesting_opinion">   ' + 
'A <dfn id="concept-requesting_opinion">requesting opinion</dfn> is an <a>activity</a> that requests a <a>opinion report</a> from the <a>reputation peer</a>. ' + 
'</div>   ' + 
' ' + 
' ' + 
'<!-- UI --> ' + 
' ' + 
'<div class="glossary" id="glossary-changing_view">   ' + 
'A <dfn id="concept-changing_view">changing view</dfn> is an <a>activity</a> that changed the view of a user interface. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_peer">   ' + 
'A <dfn id="concept-view">view</dfn> is an entity pertaining to a view of a user interface. ' + 
'</div>  ' + 
' ' + 
' ' + 
'<div class="glossary" id="glossary-acknowledgement">   ' + 
'An <dfn id="concept-acknowledgement">acknowledgement</dfn> is a message that is passed between two cas:agents to signify acknowledgement, or receipt of a response, which is part of a communications protocol. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-respond">   ' + 
'A <dfn id="concept-respond">respond</dfn> is an <a>activity</a> that is used to  respond to an API call. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-sending_request">   ' + 
'A <dfn id="sending_request">sending request</dfn> is an <a>activity</a> that sends a <a>request</a> to <a>peer</a>. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-response">   ' + 
'A <dfn id="response">response</dfn> is an entity that is computed in response to a <a>request</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-request">   ' + 
'A <dfn id="request">request</dfn> is an entity that is used to request information from a service. ' + 
'</div>   ' + 
'</html> ' + 
' ' ;
