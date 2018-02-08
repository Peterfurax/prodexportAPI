#/bin/bash

EMX_CONF="${HOME}/scripts/LES_ECHOS/exportweb/conf/emx.config.xml"
EMX_XSL="file:///${HOME}//scripts/LES_ECHOS/exportweb/web2web/updatestatus.xsl"
EMX_JAR="${HOME}/tools/emx/lib/emx.jar"
UUID_OBJECT="756377e4-01e4-11e8-8ba7-cdc29d688b6b"
OBJECT_LOID="3.0.1207155898"
P=`echo -e "/Production/LesEchos/Illustrations/High-tech - Médias/Ecole primaire-AFP.jpg" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1206363825/graphiques/0301207155898.meta_update.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131093130</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="LE-Articles-Redaction/Mise en ligne Directe"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	UUID_OBJECT="e8755d52-01d9-11e8-8ba7-cdc29d688b6b"
OBJECT_LOID="3.0.1206363825"
P=`echo -e "/Production/LesEchos/Articles/High-tech - Médias/WEB cafe digital klassroom.xml" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1206363825/print2web/0301206363825.meta.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131093130</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="LE-Articles-Redaction/Mise en ligne Directe"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	