#/bin/bash

EMX_CONF="${HOME}/scripts/LES_ECHOS/exportweb/conf/emx.config.xml"
EMX_XSL="file:///${HOME}//scripts/LES_ECHOS/exportweb/web2web/updatestatus.xsl"
EMX_JAR="${HOME}/tools/emx/lib/emx.jar"
UUID_OBJECT="a494e9e6-0a8e-11e8-a971-b1cd30d19d5d"
OBJECT_LOID="3.0.1254230146"
P=`echo -e "/Production/LesEchos/Articles/Mobile/Live_mobile_20180205170825.xml" | iconv -f ISO-8859-1  -t UTF-8`
eomutil attribute -uuid "$UUID_OBJECT" "/methode/meth01/mnt/tomcat/methode_share/export/export_XML/20180205_WEB2WEB/3.0.1254230146/print2web/0301254230146.meta.xml" -do_check_in -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}";
eomutil ticket "$P" -append "WebPub" "<dt><channel></channel><last>20180205180341</last></dt>" -eomuser "system" -eompassword "sysechpwd" -eomrepositoryior "${EOMDB_IOR}"
STEP="LE-Articles-Redaction/Mise en ligne Directe"
OUTPUT_FILE="/tmp/fco.$$.xml"
EMX_INPUT="loid://LEC/$OBJECT_LOID?docType=metadata,reference,properties,linkMap"
java  -jar  $EMX_JAR    --cfg "file://$EMX_CONF" --in  "$EMX_INPUT" --xsl "$EMX_XSL" --out  "$OUTPUT_FILE" --param "loid=$OBJECT_LOID" --param "workfow-step=$STEP"

if [ -f "$OUTPUT_FILE" ]
then
	rm "$OUTPUT_FILE"
fi
	