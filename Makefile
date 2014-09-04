
HGID.OLD=`hg -q id`
HGID=`hg parents --template='{node|short}'`
OUT.JS=glossary.js
IN.HTML=glossary.html

make.glossary.js: glossary.html Makefile
	@$(MAKE) OUT.JS=$(OUT.JS) documentation
	@echo "glossary_string= " >> $(OUT.JS)
	cat $(IN.HTML) | sed -e "s/\d039/\\\'/g" | awk '{ print "'\''"  $$0 " '\'' + " }' >> $(OUT.JS)
	echo "' ' ;" >> $(OUT.JS)

documentation:
	@echo "//Automatically generated file, don't edit!"  > $(OUT.JS)
	@echo "//Include this $(OUT.JS) file in your specification"  >> $(OUT.JS)
	@echo "//  with <script src=\"$(OUT.JS)\" class=\"remove\"></script>"  >> $(OUT.JS)
	@echo "//Insert glossary definitions with the following "  >> $(OUT.JS)
	@echo "// <div class=\"glossary-ref\" ref=\"glossary-generation\"></div>"  >> $(OUT.JS)




#//	xpath prov-dm.xhtml //div[@class='anexample']

# http://phantomjs.org/download.html
PHANTOM_JS=$(HOME)/Downloads/phantomjs-1.8.1-linux-x86_64/bin/phantomjs

LOCATION=https://dvcs.w3.org/hg/prov/raw-file/default/model

restage.all:
	$(MAKE) stage.dm
	$(MAKE) stage.n
	$(MAKE) stage.constraints
	cd diff; $(MAKE) rel

stage.sys:
	$(MAKE) DOCUMENT_TO_STAGE=landing-page.html  RELEASE_DIR=www stage.document.xhtml


stage.dm:
	$(MAKE) DOCUMENT_TO_STAGE=prov-dm.html  RELEASE_DIR=releases/REC-prov-dm-20130430 stage.document.html
stage.n:
	$(MAKE) DOCUMENT_TO_STAGE=prov-n.html  RELEASE_DIR=releases/REC-prov-n-20130430 stage.document.html
stage.constraints:
	$(MAKE) DOCUMENT_TO_STAGE=prov-constraints.html  RELEASE_DIR=releases/REC-prov-constraints-20130430 stage.document.html

stage.document.html:
	$(PHANTOM_JS) respec2html.js $(LOCATION)/$(DOCUMENT_TO_STAGE) $(RELEASE_DIR)/Overview.html 15

stage.document.xhtml:
	$(PHANTOM_JS) respec2html.js $(DOCUMENT_TO_STAGE) $(RELEASE_DIR)/Overview.html



export:
	scp www/* www/.htaccess login.ecs.soton.ac.uk:/home/wwwsites/www.ipaw.info/htdocs/ns
#	scp landing-page.html login.ecs.soton.ac.uk:/home/wwwsites/www.ipaw.info/htdocs/ns/sys.html
