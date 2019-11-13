module.exports = function (controller) {
   
    /*controller.hears(["no"],function (bot, message) {
        
        bot.startConversation(message, function (err, convo) {
            convo.ask("Which tool URL are you looking? ", [
                {
                    pattern: "Xelus|Tracer|Test RMA creation|SAM|PSD-ESRI|PRR|Pega Location form|Pega |OSC - FSMS|Oracle EBS|OPS Report|OFS - Vise FE direct link: |New URL|MuleSoft|Mule|Legacy Sort|IP|Histroy of Cntrct History |GOM Wiki Page|EEM|Eco Matrix|E2Open|E2Net|E2 Open CSR Case|DM Info|Dashboard|CSONE Test|CSONE |CPR|CDT SR|CCW-Contract search |CCW|",
                    callback: function (response, convo) {
                        convo.say("CCW | Prod | https://ccrc.cisco.com/ServiceContract/contract/?code=P7BDT6sAhr9UJ9_0XlzBe2lKj1G31wDViQoC1ADK&state=xyz");
                        convo.next();                      
                        
                        //convo.gotoThread('ask_drink');
                    },
                }
                

            ])
        });
    }); */

    controller.hears(["url","URL","Hello","Hi"], 'direct_message,direct_mention', function (bot, message) {
        var text = "We are currently have Url for,";
        text +="\n- " +bot.enrichCommand(message, ".CCW") + " | "+	bot.enrichCommand(message, ".CDT SR") + "|"+	bot.enrichCommand(message, ".CPR");
        text += "\n- " +bot.enrichCommand(message, ".CSONE")	+ "|"+bot.enrichCommand(message, ".Dashboard")+ "|"+	bot.enrichCommand(message, ".DM Info");
        text +="\n- " +bot.enrichCommand(message, ".E2 Open CSR Case")+ "|"+	bot.enrichCommand(message, ".E2Net")+ "|"+	bot.enrichCommand(message, ".E2Open");
        text +="\n- " +bot.enrichCommand(message, ".Eco Matrix")+ "|"+	bot.enrichCommand(message, ".EEM")+ "|"+	bot.enrichCommand(message, ".GOM Wiki Page");
        text +="\n- " +bot.enrichCommand(message, ".Histroy of Cntrct History" )	+ "|"+bot.enrichCommand(message, ".IP")	+ "|"+bot.enrichCommand(message, ".Legacy Sort");
        text +="\n- " +bot.enrichCommand(message, ".MuleSoft")+ "|"+	bot.enrichCommand(message, ".Umpire")+ "|"+	bot.enrichCommand(message, ".OFS - Vise FE direct link:" );
        text +="\n- " +bot.enrichCommand(message, ".OPS Report")+ "|"+	bot.enrichCommand(message, ".Oracle EBS")+ "|"+	bot.enrichCommand(message, ".OSC - FSMS");
        text +="\n- " +bot.enrichCommand(message, ".Pega ")+ "|"+	bot.enrichCommand(message, ".Pega Location form")+ "|"+		bot.enrichCommand(message, ".PRR");
        text +="\n- " +bot.enrichCommand(message, ".PSD-ESRI")+ "|"+	bot.enrichCommand(message, ".SAM")+ "|"+	bot.enrichCommand(message, ".Test RMA creation");
        text +="\n- " +bot.enrichCommand(message, ".Tracer")	+ "|"+bot.enrichCommand(message, ".Xelus")+ "|";


      /*  bot.startConversation(message, function (err, convo) {
            convo.ask("Which tool URL are you looking? ", [
                {
                    pattern: "Xelus|Tracer|Test RMA creation|SAM|PSD-ESRI|PRR|Pega Location form|Pega |OSC - FSMS|Oracle EBS|OPS Report|OFS - Vise FE direct link: |New URL|MuleSoft|Mule|Legacy Sort|IP|Histroy of Cntrct History |GOM Wiki Page|EEM|Eco Matrix|E2Open|E2Net|E2 Open CSR Case|DM Info|Dashboard|CSONE Test|CSONE |CPR|CDT SR|CCW-Contract search |CCW|",
                    callback: function (response, convo) {
                        convo.say("CCW | Prod | https://ccrc.cisco.com/ServiceContract/contract/?code=P7BDT6sAhr9UJ9_0XlzBe2lKj1G31wDViQoC1ADK&state=xyz");
                        convo.next();                      
                        
                        //convo.gotoThread('ask_drink');
                    },
                }
                

            ])
        }, */

        bot.startConversation(message, function (err, convo) {
            convo.ask(text)
            convo.ask("Which tool URL are you looking? ", [
                {
                    pattern: "CCW|CONTRACT",
                    callback: function (response, convo) {
                        convo.say("CCW | Prod | https://ccrc.cisco.com/ServiceContract/contract/?code=P7BDT6sAhr9UJ9_0XlzBe2lKj1G31wDViQoC1ADK&state=xyz");
                        convo.say("CCW | Stage | https://cdca-stage.cloudapps.cisco.com/cdca/portal.do");
                        convo.next();                      
                        //convo.gotoThread('ask_drink');
                    },
                },
                {
                    pattern: "CPR",
                    callback: function (response, convo) {
                        convo.say("CPR | Prod | https://cdca.cloudapps.cisco.com/cdca/portal.do");
                        convo.next();
                    },
                },
                {
                    pattern: "CSONE",
                    callback: function (response, convo) {
                        convo.say("CSONE  | Prod | http://www-tac.cisco.com/Teams/Entitlement/Ops/EnablementHome.htm");
                        convo.say("CSONE Test | Stage | https://csone--ts2svc.cs96.my.salesforce.com/console");
                        convo.next();
                    },
                },

                {
                    pattern: "E2OPEN|EEM|B2B",
                    callback: function (response, convo) {
                        convo.say("E2 Open CSR Case |  | https://e2opennetwork.force.com/csp/s/");
                        convo.say("E2Net | Stage | https://cisco-hub.staging.e2open.com/CISCOE2NETSTG2_nc/e2net/console/web/main.action");
                        convo.say("E2Open | Prod | https://cisco-hub.e2open.com/");
                        convo.say("E2Open | Stage | https://cisco-hub.staging.e2open.com/");
                        convo.say("EEM | Prod | https://anypoint.mulesoft.com/b2b/portal/tracking");
                        convo.say("EEM | Stage | https://anypoint.mulesoft.com/accounts/login/cisco-stage");
                        convo.say("New URL |  | https://cisco-hub.e2open.com/CISCOE2NET_nc/e2net/console/web/main.action");
                        convo.next();
                    },
                },

                {
                    pattern: "MULESOFT",
                    callback: function (response, convo) {
                        convo.say("Mule |  | https://cloudsso.cisco.com/idp/startSSO.ping?PartnerSpId=ciscoprod.anypoint.mulesoft.com");
                        convo.say("MuleSoft |  | https://anypoint.mulesoft.com/b2b/portal/partners");
                        
                        convo.next();
                    },
                },

                {
                    pattern: "PEGA|PRR|RMA|SORT",
                    callback: function (response, convo) {
                        convo.say("Pega  | Production | https://ibpm.cisco.com/gssc/rmain/login/");
                        convo.say("Pega  | Stage | https://ibpm-stage.cisco.com/gssc/rmain/login");
                        convo.say("Pega  | TS1 | https://ibpm-stage.cisco.com/gssc-qa3/rmain/login");
                        convo.say("Pega Location form |  | https://docs.cisco.com/share/proxy/alfresco/url?docnum=EDCS-11655330&ver=approved ");
                        convo.say("PRR | Production | https://ibpm.cisco.com/rma/home/");
                        convo.say("PRR | Stage | https://ibpm-stage.cisco.com/rma/home/");
                        convo.say("PRR | TS1 | https://ibpm-stage.cisco.com/rma-qa3/home/");
                        convo.next();
                    },
                },

                {
                    pattern: "OFS|FSMS|OPS Report|c3 report",
                    callback: function (response, convo) {
                        convo.say("OFS - Vise FE direct link:  |  | https://login.etadirect.com/cisco/");
                        convo.say("OPS Report |  | http://c3rtrp.cloudapps.cisco.com/c3/rtrp/start.do");
                        convo.say("Oracle EBS | Prod | https://wwwin-csfprd.cisco.com/ ");
                        convo.say("Oracle EBS | Stage | https://wwwin-csfstg.cisco.com/");
                        convo.say("OSC - FSMS |  | https://ciscovise.custhelp.com/cgi-bin/ciscovise.cfg/php/admin/launch.php");
                        
                        convo.next();
                    },
                },

                {
                    pattern: "tableau|dashboard",
                    callback: function (response, convo) {
                        convo.say("Dashboard |  | https://stg-tableau.cisco.com/#/site/SSC_Planning/views/GTSTPegaFSMSTroubleshootingTool/TaskDashboard?:iid=1");
                        convo.next();
                    },
                },
                {
                    pattern: "xelus",
                    callback: function (response, convo) {
                        convo.say("Xelus | Prod | http://xelus-prod:8090/partsclient/jre.html");
                        convo.say("Xelus | Stage | http://sscapp-stg-06:9080/partsclient/jre.html");
                        
                        convo.next();
                    },
                },

                {
                    pattern: "Eco Matrix",
                    callback: function (response, convo) {
                           
                        convo.say("Eco Matrix |  | https://ecom.cloudapps.cisco.com/gps/ecom/User.do");
                        
                        convo.next();
                    },
                },
                {
                    pattern: "DM Info",
                    callback: function (response, convo) {
                           
                        convo.say("DM Info |  | http://sscddm.cloudapps.cisco.com/support/dmrtool/home.dm");
                        
                        convo.next();
                    },
                },
                {
                    pattern: "other|GOM Wiki Page|Histroy of Cntrct History|PSD-ESRI|CDT SR",
                    callback: function (response, convo) {
                           
                        convo.say("GOM Wiki Page |  | https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/Wd8711ad00650_4839_9020_9badb77dac00/page/Validating%20GU%20ID's");
                        convo.say("Histroy of Cntrct History  |  | http://ent-001-p.cisco.com:8080/");
                        convo.say("IP |  | https://cisco.integrationpoint.net/Maintenance/fmgMaintenance.aspx?table=EJ0TCZO8EIBPmPIEJ%2fBoCeDb909VbTj9D8vEvf5vk4S9nl5yt9Eh5ABKpFJBLX1Cxw%3d%3d&edit=N&addrow=N&throttle=Y&unfilteredlimit=50000");
                        
                        convo.say("PSD-ESRI | Prod | http://psd.cloudapps.cisco.com/psd/Main.jsp");
                        convo.say("SAM |  | https://samccx.cloudapps.cisco.com/apidc/sam/search.do");
                        convo.say("CDT SR |  | https://www.cisco.com/cisco/psn/web/workspace");
                        convo.say("Tracer |  | http://brms-prd1-05:7005/gssc/PRServlet");
                        convo.say("Tracer |  | https://ibpmadm-stage.cisco.com/gssc-qa3/rmain/login");
                        
                        convo.say(" |  | https://ibpmadm.cisco.com/gssc/rma/PRServlet");
                        convo.say(" |  | https://umpire.cloudapps.cisco.com/gps/umpire/prse/Requests.do?method=requestsMain");
                        convo.say(" |  | prd - http://tes-cm-prd1-01:8080/client/console.html?locale=en");
                        convo.say(" |  | stage - http://tess-cm-prd1-01:8080/client/console.html?locale=en");
                        
                        convo.next();
                    },
                },

                {
                    default: true,
                    callback: function (response, convo) {
                        // We've got 2 options at this point:

                        // 1. simply repeat the question
                        convo.say("Please enter a valid tool detail. Try Again");
                        convo.repeat();
                        //convo.next();

                        // 2. or provide extra info, then repeat the question
                        convo.gotoThread("bad_response");
                    }
                }
            ]);

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand!<br/>_Tip: try 'PRR, Xelus, Pega, C3 etc.', ",
                action: 'default', // goes back to the thread's current state, where the question is not answered
            }, 'bad_response');

            // Thread: ask for a drink
           convo.addQuestion('Which tool URL are you looking?', function (response, convo) {
                //convo.say(`I love '${response.text}' too`);
                //convo.next();
            }, {}, 'ask_drink');
        });
    });
};
