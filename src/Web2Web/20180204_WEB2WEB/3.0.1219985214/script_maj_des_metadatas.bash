#/bin/bash

EMX_CONF="${HOME}/scripts/LES_ECHOS/exportweb/conf/emx.config.xml"
EMX_XSL="file:///${HOME}//scripts/LES_ECHOS/exportweb/web2web/updatestatus.xsl"
EMX_JAR="${HOME}/tools/emx/lib/emx.jar"
UUID_OBJECT="89911fb4-0518-11e8-bf19-1dbe003e5157"
OBJECT_LOID="3.0.1222966845"
P=`echo -e "/Production/SerieLimitee/Web/Illustrations/Beaute/1000X533 VUE STRATTO.jpg" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1219985214/graphiques/0301222966845.meta_update.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131125006</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="SLI-Articles/Web-BAP"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	UUID_OBJECT="a4f05a90-0518-11e8-bf19-1dbe003e5157"
OBJECT_LOID="3.0.1222971087"
P=`echo -e "/Production/SerieLimitee/Web/Illustrations/Beaute/STRATTO CHAMBRE 1000X800.jpg" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1219985214/graphiques/0301222971087.meta_update.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131125006</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="SLI-Articles/Web-BAP"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	UUID_OBJECT="981d6074-0518-11e8-bf19-1dbe003e5157"
OBJECT_LOID="3.0.1222980534"
P=`echo -e "/Production/SerieLimitee/Web/Illustrations/Beaute/1000X800 STRATO 1.jpg" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1219985214/graphiques/0301222980534.meta_update.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131125006</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="SLI-Articles/Web-BAP"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	UUID_OBJECT="222c63a0-04d8-11e8-bf19-1dbe003e5157"
OBJECT_LOID="3.0.1219985214"
P=`echo -e "/Production/SerieLimitee/Web/Articles/Beaute/le strato courchevel .xml" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1219985214/print2web/0301219985214.meta.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131125006</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="SLI-Articles/Web-BAP"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	