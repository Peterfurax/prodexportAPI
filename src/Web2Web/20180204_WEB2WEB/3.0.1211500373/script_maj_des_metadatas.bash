#/bin/bash

EMX_CONF="${HOME}/scripts/LES_ECHOS/exportweb/conf/emx.config.xml"
EMX_XSL="file:///${HOME}//scripts/LES_ECHOS/exportweb/web2web/updatestatus.xsl"
EMX_JAR="${HOME}/tools/emx/lib/emx.jar"
UUID_OBJECT="b5693bca-0677-11e8-bf19-1dbe003e5157"
OBJECT_LOID="3.0.1231533600"
P=`echo -e "/Production/LesEchos/Illustrations/PME Regions/Innovateurs/INNOV-Poietis bioprinter -web.jpg" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1211500373/graphiques/0301231533600.meta_update.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131185902</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="LE-Articles-Redaction/Mise en ligne"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	UUID_OBJECT="dc3b3c48-0281-11e8-8ba7-cdc29d688b6b"
OBJECT_LOID="3.0.1211500373"
P=`echo -e "/Production/LesEchos/Articles/PME Regions/Innovateurs/INNOV Poietis.xml" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180131_WEB2WEB/3.0.1211500373/print2web/0301211500373.meta.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180131185902</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="LE-Articles-Redaction/Mise en ligne"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	