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
'An <dfn id="concept-agent" title="agent">agent</dfn> is anything that can possibly perform an activity. Alternatively, anything that has capabilities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-user">   ' + 
'A <dfn id="concept-user" title="user">user</dfn> is a person who is using a SmartSociety system. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-peer">   ' + 
'A <dfn id="concept-peer" title="peer">peer</dfn> is a software <a>agent</a> in a SmartSociety system that represents another agent. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-identities">   ' + 
'Agents, users, peers all have <dfn id="concept-identities" title="identities">identities</dfn>, an unauthenticated user gets assigned identities automatically. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-collective">   ' + 
'A <dfn id="concept-collective" title="collective">collective</dfn> is an agent that consists of multiple member agents. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-activity">   ' + 
'A <dfn id="concept-activity" title="activity">activity</dfn> is the condition in which things are happening or being done. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-capability">   ' + 
'A <dfn id="concept-capability" title="capability">capability</dfn> is a prospective, though not necessarily planned or agreed, activity. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-task">   ' + 
'A <dfn id="concept-task" title="task">task</dfn> is something that involves capabilities, potentially contributed by several agents. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-plan">   ' + 
'A <dfn id="concept-plan" title="plan">plan</dfn> is a specification for the execution of a task. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-protocol">   ' + 
'A <dfn id="concept-protocol" title="protocol">protocol</dfn> is a collection of plans that involve communications between peers. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-messaging_action">   ' + 
'A <dfn id="concept-messaging_action" title="messaging_action">messaging_action</dfn> is the constituent of a protocol: it involves information exchange and subsequent action. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-message">   ' + 
'A <dfn id="concept-message" title="message">message</dfn> is a piece of information exchanged between agents. ' + 
'</div> ' + 
' ' + 
'<!-- Reputation concepts--> ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_peer">   ' + 
'A <dfn id="concept-reputation_peer" title="reputation_peer">reputation_peer</dfn> is a specialisation of a peer, which specialises in storing feedback about subjects and generating reputation and opinion reports about subjects.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-feedback_report">   ' + 
'A <dfn id="concept-feedbackReport" title="Feedback Report">feedback_report</dfn> is a report that is derived from an event or experience, and consists of a set of key value pairs, which binds a topic of reputation to a rating value. For example, a participant has taken part in an event and leaves feedback for about their “star rating = 5”. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_report">   ' + 
'A <dfn id="concept-reputation_report" title="Reputation Report">reputation_report</dfn> is a report about a subject that contains a set of key value pairs. The key value pairs is a binding between a topic of reputation to a rating value, which is an aggregation of a set ratings for that topic. ' + 
'For example, a subject has been rated with a set of star ratings, and the average of those star ratings are "average star rating = 4.3". ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-opinion_report">   ' + 
'An <dfn id="concept-opinion_report" title="Opinion Report">opinion_report</dfn> is a specialisation of a reputation report, which contains a single key value pair and binds an opinion to a value. The value is an aggregation of ratings from a set of reputation topics. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-submit_feedback">   ' + 
'A <dfn id="concept-submit_feedback" title="Submit Feedback">submit_feedback</dfn> is an activity that submits a feedback report to the reputation peer. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-store_feedback">   ' + 
'A <dfn id="concept-store_feedback" title="Store Feedback">store_feedback</dfn> is an activity used by reputation peer to store a feedback report within it. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-compute_reputation">   ' + 
'A <dfn id="concept-compute_reputation" title="Compute Reputation">compute_reputation</dfn> is an activity that is run by the reputation peer when a feedback report is submit, it computes a reputation report for all the subjects referred to by the submitted feedback report. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-feedback_category">   ' + 
'A <dfn id="concept-feedback_category" title="Feedback Category">feedback_category</dfn> is a category which a subject is rated, in a feedback report.    ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_category">   ' + 
'A <dfn id="concept-reputation_category" title="Reputation Category">reputation_category</dfn> is a category which a subject is rated, in a reputation  report.   ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_item">   ' + 
'A <dfn id="concept-reputation_item" title="Reputation Item">reputation_item</dfn> is a JSON object that is returned from a GET request to the reputation peer. ' + 
'</div> ' + 
' ' + 
' ' + 
'<!-- Orchestration concepts --> ' + 
' ' + 
'<div class="glossary" id="glossary-orchestration_peer">   ' + 
'A <dfn id="concept-orchestration_peer" title="orchestration_peer">orchestration_peer</dfn> is a specialisation of a peer, which specialises in storing feedback about subjects and generating reputation and opinion reports about subjects.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-composition_activity">   ' + 
'A <dfn id="concept-composition_activity" title="composition_activity">composition_activity</dfn> is an activity that may be comprised of the following activities authenticate, compute_composition and compute_task_complement. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-authenticate_activity">   ' + 
'An <dfn id="concept-authenticate_activity" title="authenticate_activity">authenticate_activity</dfn> is an activity which authenticates a user. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-store_task"> ' + 
'A <dfn id="concept-store_task" title="store_task">store_task</dfn> is an activity that stores a task locally. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-compute_task_complement">   ' + 
'A <dfn id="concept-compute_task_complement" title="compute_task_complement">compute_task_complement</dfn> is an activity that identifies which set of tasks that are no longer valid. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-compute_composition">   ' + 
'A <dfn id="concept-compute_composition" title="compute_composition">compute_composition</dfn> is an activity that computes a set of valid tasks given constraints or negiotation inputs. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-submit_activity">   ' + 
'A <dfn id="concept-submit_activity" title="submit_activity">submit_activity</dfn> is an activity which submits a task, it may comprise of an authenticate and store_task activities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-send_negotiation_response">   ' + 
'A <dfn id="concept-send_negotiation_response" title="send_negotiation_response">send_negotiation_response</dfn> is an entity that contains the response to a negotiation activity. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-negotiation_activity">   ' + 
'A <dfn id="concept-negotiation_activity" title="negotiation_activity">negotiation_activity</dfn> is an activity which submits a task, it may comprise of an authenticate and store_task activities. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-post_task_request">   ' + 
'A <dfn id="concept-post_task_request" title="post_task_request">post_task_request</dfn> is an activity that posts a task to orchestration peer.  ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-authenticated_user">   ' + 
'An <dfn id="concept-authenticated-user" title="authenticated_user">authenticated_user</dfn> is a user that has been authenticated by the peer profile peer using credentials. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-request_opinion">   ' + 
'A <dfn id="concept-request_opinion" title="request opinion">request opinion</dfn> is an activity that requests a opinion report from the reputation peer. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-offer">   ' + 
'An <dfn id="concept-offer" title="Offer">offer</dfn> to transfer some rights to an item or to provide a service—for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book ' + 
'(same as <a href="http://schema.org/Offer">schema:Offer</a>). ' + 
'</div>  ' + 
' ' + 
'<!-- UI --> ' + 
' ' + 
'<div class="glossary" id="glossary-change_view">   ' + 
'A <dfn id="concept-change_view" title="change_view">change_view</dfn> is an activity that changed the view of a user interface. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-reputation_peer">   ' + 
'A <dfn id="concept-view" title="view">view</dfn> is an entity pertaining to a user interfaces view. ' + 
'</div>  ' + 
' ' + 
'<!-- General concepts --> ' + 
' ' + 
'<div class="glossary" id="glossary-client">   ' + 
'A <dfn id="concept-client" title="client">client</dfn> is an agent that acts as a client, specifically a service or workstation that is capable of obtaining information and applications from a server. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-peer">   ' + 
'A <dfn id="concept-peer" title="peer">peer</dfn> is an agent that manages a specific set of domain tasks. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-username">   ' + 
'A <dfn id="concept-username" title="username">username</dfn> is a string representing the name of a user. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-web_application">   ' + 
'A <dfn id="concept-web_application" title="Web application">web_application</dfn> is software that runs in a web browser. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-credential">   ' + 
'A <dfn id="concept-credential" title="Credential">credential</dfn> is a username and password, which is used to authenticate a user. ' + 
'</div> ' + 
' ' + 
'<div class="glossary" id="glossary-acknowledgement">   ' + 
'An <dfn id="concept-acknowledgement" title="Acknowledgement">acknowledgement</dfn> is a message that is passed between two prov:agents to signify acknowledgement, or receipt of a response, which is part of a communications protocol. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-respond">   ' + 
'A <dfn id="concept-respond" title="Respond">respond</dfn> is an activity that is used to  respond to an API call. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-send_request">   ' + 
'A <dfn id="send_request" title="Send Request">send_request</dfn> is an activity that sends a request to peer. ' + 
'</div>   ' + 
' ' + 
'<div class="glossary" id="glossary-response">   ' + 
'A <dfn id="response" title="response">response</dfn> is an entity that is computed in response to a request. ' + 
'</div>  ' + 
' ' + 
'<div class="glossary" id="glossary-request">   ' + 
'A <dfn id="request" title="request">request</dfn> is an entity that is used to request information from a service. ' + 
'</div>   ' + 
'</html> ' + 
' ' ;
