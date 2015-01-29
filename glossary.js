//Automatically generated file, don't edit!
//Include this glossary.js file in your specification
//  with <script src="glossary.js" class="remove"></script>
//Insert glossary definitions with the following 
// <div class="glossary-ref" ref="glossary-generation"></div>
glossary_string= 
' ' + 
'<html> ' + 
'<!-- ' + 
'authenticationtoken ' + 
'plan ' + 
'acknowledgement ' + 
'machineoutput ' + 
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
'An <dfn id="concept-agent">agent</dfn> is anything that can possibly perform an <a title="activity">activity</a>. Alternatively, anything that has <a title="capability">capabilities</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-user">   ' + 
'A <dfn id="concept-user">user</dfn> is a person who is using a SmartSociety system. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-peer">   ' + 
'A <dfn id="concept-peer">peer</dfn> is a software <a title="agent">agent</a> in a SmartSociety system that represents another <a title="agent">agent</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-identity">   ' + 
'<a title="agent">Agents</a>, <a title="user">users</a>, <a title="peer">peers</a> all have <dfn id="concept-identity" title="identity">identities</dfn>. An unauthenticated user gets ' + 
'assigned an identity automatically. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-collective">   ' + 
'A <dfn id="concept-collective">collective</dfn> is an <a title="agent">agent</a> that consists of multiple member <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-activity">   ' + 
'An <dfn id="concept-activity">activity</dfn> is the condition in which things are happening or being done. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-capability">   ' + 
'A <dfn id="concept-capability">capability</dfn> is a prospective, though not necessarily planned or agreed, <a title="activity">activity</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-task">   ' + 
'A <dfn id="concept-task">task</dfn> is a potential activity that involves <a title="capability">capabilities</a>, potentially contributed by several <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-taskrequest">   ' + 
'A <dfn id="concept-task">task request</dfn> is a request for a potential activity that involves <a title="capability">capabilities</a>, potentially contributed by several <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-plan">   ' + 
'A <dfn id="concept-plan">plan</dfn> is a specification for the execution of a <a title="task">task</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-protocol">   ' + 
'A <dfn id="concept-protocol">protocol</dfn> is a collection of <a title="plan">plans</a> that involve communications between <a title="peer">peers</a>. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-sendingmessage">   ' + 
'A <dfn id="concept-sendingmessage">sending message</dfn> is the constituent of a protocol: it involves information exchange.</div> ' + 
' ' + 
'<div class="glossary" id="glossary-message">   ' + 
'A <dfn id="concept-message">message</dfn> is a piece of information exchanged between <a title="agent">agents</a>. ' + 
'</div> ' + 
' ' + 
'<!-- Reputation concepts--> ' + 
' ' + 
'<div class="glossary" id="glossary-reputationmanager">   ' + 
'A <dfn id="concept-reputationmanager">reputation manager</dfn> is a <a title="peer">peer</a>, which specialises in storing feedback about <a title="subject">subjects</a> and generating reputation and opinion reports about <a title="subject">subjects</a>.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-feedbackreport">   ' + 
'A <dfn id="concept-feedbackreport">feedback report</dfn> is a report about a <a title="subject">subject</a> that contains a set of value rating categories. For example, "star rating = 4.3". ' + 
' ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-reputationreport">   ' + 
'A <dfn id="concept-reputationreport">reputation report</dfn> is a report about a <a title="subject">subject</a> that contains a set of value rating categories. For example, a <a title="subject">subject</a> has been rated with a set of star ratings, and the average of those star ratings are "average star rating = 4.3". ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-opinionreport">   ' + 
'An <dfn id="concept-opinionreport">opinion report</dfn> is a <a title="reputationreport">reputation report</a>, which contains a single key value pair and binds an opinion to a value. The value is an aggregation of ratings from a set of reputation topics. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-submittingfeedback">   ' + 
'<dfn id="concept-submittingfeedback">Submitting feedback</dfn> is an <a title="activity">activity</a> that submits a <a title="feedbackreport">feedback report</a> to the <a title="reputationmanager">reputation manager</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-storingfeedback">   ' + 
'<dfn id="concept-storingfeedback">Storing feedback</dfn> is an <a title="activity">activity</a> used by <a title="reputationmanager">reputation manager</a> to store a <a title="feedbackreport">feedback report</a> within it. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-computingreputation">   ' + 
'<dfn id="concept-computingreputation">Computing reputation</dfn> is an <a title="activity">activity</a> that is run by the <a title="reputationmanager">reputation manager</a> when a <a title="feedbackreport">feedback report</a> is submitted, it computes a <a title="reputationreport">reputation report</a> for all the <a title="subject">subjects</a> referred to by the submitted <a title="feedbackreport">feedback report</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-feedbackcategory">   ' + 
'A <dfn id="concept-feedbackcategory">feedback category</dfn> is a category used to rate a <a title="subject">subject</a>, in a <a title="feedbackreport">feedback report</a>.    ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputationcategory">   ' + 
'A <dfn id="concept-reputationcategory">reputation category</dfn> is a category used to rate a <a title="subject">subject</a>, in a <a title="reputationreport">reputation report</a>.   ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-subject">   ' + 
'A <dfn id="concept-subject">subject</dfn> is either an <a title="activity">activity</a>, <a title="agent">agent</a>, <a title="peer">peer</a>, <a title="user">user</a>, or <a title="collective">collective</a>, that is being discussed, described, or dealt with in the context of <a title="feedbackreport">feedback reports</a> and <a title="reputationreport">reputation reports</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-opinion">   ' + 
'An <dfn id="concept-opinion">opinion</dfn> is a quantitive value of the estimation of a <a title="subject">subject</a>s worth based on <a title="feedbackcategory">feedback categories</a> about it. ' + 
' ' + 
'either an <a title="activity">activity</a>, <a title="agent">agent</a>, <a title="peer">peer</a>, <a title="user">user</a>, or <a title="collective">collective</a>, that is being discussed, described, or dealt with in the context of <a title="feedbackreport">feedback reports</a> and <a title="reputationreport">reputation reports</a>. ' + 
'</div>  ' + 
' ' + 
'<!-- Orchestration concepts --> ' + 
' ' + 
'<div class="glossary" id="glossary-call">   ' + 
'A <dfn id="concept-call">call</dfn> is a signal transmitted to a <a title="peer">peer</a> over a computer network.    ' + 
'</div> ' + 
' ' + 
' ' + 
' ' + 
' ' + 
'<div class="glossary" id="glossary-orchestrationmanager">   ' + 
'An <dfn id="concept-orchestrationmanager">orchestration manager</dfn> is a <a title="peer">peer</a>, which specialises in coordinating the interaction ' + 
'between other <a title="peer">peers</a>.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-composingtasks">   ' + 
'<dfn id="concept-composingtasks">Composing tasks</dfn> is an <a title="activity">activity</a> that may be comprised of the following <a title="activity">activities</a> <a title="authenticating identity">authenticating identity</a>, <a title="computing composition"> computing composition</a> and <a title="computing invalid tasks">computinginvalidtasks</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-authenticatingidentity">   ' + 
'<dfn id="concept-authenticatingidentity">Authenticating identity</dfn> is an <a title="activity">activity</a> that authenticates a <a title="activity">user</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-compositionmanager">   ' + 
'A <dfn id="concept-compositionmanager">Composition Manager</dfn> A composition manager is a <a title="peer">peer</a> which specialises in composing tasks by searching and matching relevant <a title="peer">peers</a> and computing plans for a <a title="task">task</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-incentivesmanager">   ' + 
'A <dfn id="concept-incentivesmanager">incentives manager</dfn> is a <a title="peer">peer</a> that specialises in providing incentives for <a title="peer">peers</a> to participate in tasks. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-negotiationmanager>   ' + 
'A <dfn id="concept-negotiationmanager">negotiation manager</dfn> is a <a title="peer">peer</a> which specialises in managing the process of negotiating tasks where <a title="peer">peers</a> agree to a plan associated with a <a title="task">task</a>. ' + 
'</div>  ' + 
' ' + 
' ' + 
'<div class="glossary" id="glossary-storingtask"> ' + 
'<dfn id="concept-storingtask">Storing task</dfn> is an <a title="activity">activity</a> that stores a <a title="task">task</a> locally. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-computinginvalidtasks"> ' + 
'<dfn id="concept-computinginvalidtasks">Computing invalid tasks</dfn> is an <a title="activity">activity</a> that identifies which set of <a title="task">tasks</a> that are no longer valid. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-computingcomposition">   ' + 
'<dfn id="concept-computingcomposition">Computing composition</dfn> is an <a title="activity">activity</a> that computes a set of valid <a title="task">tasks</a> given constraints or negotiation inputs. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-submittingtaskrequest">   ' + 
'<dfn id="concept-submittingtaskrequest">Submitting task request</dfn> is an <a title="activity">activity</a> that submits a <a title=task>task</a>, it may comprise of an <a title="authenticate identity">authenticating identity</a> and <a title="storingtask">storing task</a> activities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-sendingnegotiationresponse">   ' + 
'<dfn id="concept-sendingnegotiationresponse">Sending negotiation response</dfn> is an entity that contains the <a title="response">response</a> to a <a title="negotiatingtasks">negotiating tasks</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-negotiatingtask">   ' + 
'<dfn id="concept-negotiatingtask">Negotiating task</dfn> is an activity that submits a <a title="task">task</a> which may alter other <a title="task">tasks</a>, it may comprise of an <a title="authenticate identity">authenticating identity</a> and <a title="storingtask">storing task</a> activities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-postingtaskrequest">   ' + 
'<dfn id="concept-postingtaskrequest">Posting task request</dfn> is an <a title="activity">activity</a> that posts a <a title="task">task</a> to <a title="orchestrationmanager">orchestration manager</a>.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-authenticateduser">   ' + 
'An <dfn id="concept-authenticateduser">authenticated user</dfn> is a <a title="user">user</a> that has been <a title="authenticateidentity">authenticated</a> by the means of an authenticating activity using their <a title="identity">identity</a>. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-requestingopinion">   ' + 
'<dfn id="concept-requestingopinion">Requesting opinion</dfn> is an <a title="activity">activity</a> that requests a <a title="opinionreport">opinion report</a> from the <a title="reputationmanager">reputation manager</a>. ' + 
'</div>   ' + 
' ' + 
' ' + 
'<!-- UI --> ' + 
' ' + 
'<div class="glossary" id="glossary-changingview">   ' + 
'<dfn id="concept-changingview">Changing view</dfn> is an <a title="activity">activity</a> that changed the view of a user interface. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputationmanager">   ' + 
'A <dfn id="concept-view">view</dfn> is an entity pertaining to a view of a user interface. ' + 
'</div>  ' + 
' ' + 
' ' + 
'<div class="glossary" id="glossary-acknowledgement">   ' + 
'An <dfn id="concept-acknowledgement">acknowledgement</dfn> is a message that is passed between two <a title="agent">agents</a> to signify acknowledgement, or receipt of a response, which is part of a communications protocol. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-respond">   ' + 
'A <dfn id="concept-respond">respond</dfn> is an <a title="activity">activity</a> that is used to  respond to an <a title="api">API</a> <a title="call">call</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-sendingrequest">   ' + 
'<dfn id="concept-sendingrequest">Sending request</dfn> is an <a title="activity">activity</a> that sends a <a title="request">request</a> to <a title ="peer">peer</a>. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-sendingresponse">   ' + 
'<dfn id="concept-sendingresponse">Sending response</dfn> is an <a title="activity">activity</a> that sends a <a title="response">response</a> to <a title="peer">peer</a>. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-response">   ' + 
'A <dfn id="concept-response">response</dfn> is an entity that is computed in response to a <a title="request">request</a>. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-request">   ' + 
'A <dfn id="concept-request">request</dfn> is a <a title="call">call</a> that is used to request information from a service. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-api">   ' + 
'A <dfn id="concept-api">api</dfn> is a set of specifications for <a title="call">calls</a> that can be processed by a <a title="peer">peer</a>. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-userinterface">   ' + 
'A <dfn id="concept-userinterface">user interface </dfn> is a software component that allows a user to view information in a <a title="peer">peer</a> and interact with it through <a title="api">API</a> <a title="call">calls</a>. ' + 
'</div>   ' + 
' ' + 
' ' + 
' ' + 
'</html> ' + 
' ' ;
