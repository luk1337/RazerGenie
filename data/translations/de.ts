<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de" sourcelanguage="en">
<context>
    <name>CustomEditor</name>
    <message>
        <location filename="../../src/customeditor.cpp" line="29"/>
        <source>RazerGenie - Custom Editor</source>
        <translation>RazerGenie - Custom Editor</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="71"/>
        <location filename="../../src/customeditor.cpp" line="81"/>
        <source>Unknown matrix dimensions</source>
        <translation>Unbekannte Matrix Maße</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="71"/>
        <location filename="../../src/customeditor.cpp" line="81"/>
        <source>Please open an issue in the RazerGenie repository. Device name: %1 - matrix dimens: %2 %3</source>
        <translation>Bitte öffne ein Issue in der RazerGenie Repository. Gerätname: %1 - Matix Maße: %2 %3</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="87"/>
        <source>Device type not implemented!</source>
        <translation>Gerät Typ nicht implementiert!</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="87"/>
        <source>Please open an issue in the RazerGenie repository. Device type: %1</source>
        <translation>Bitte öffne ein Issue in der RazerGenie Repository. Gerätname: %1</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="119"/>
        <source>Set</source>
        <translation>Setzen</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="120"/>
        <source>Clear</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="121"/>
        <source>Clear All</source>
        <translation>Alle löschen</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="148"/>
        <source>You are using a keyboard with a layout which is not known to the daemon. Please help us by visiting &lt;a href=&apos;https://github.com/openrazer/openrazer/wiki/Keyboard-layouts&apos;&gt;https://github.com/openrazer/openrazer/wiki/Keyboard-layouts&lt;/a&gt;. Using a fallback layout for now.</source>
        <translation>Du benutzt eine Tastatur mit einem Layout, welches nicht vom Daemon erkannt wurde. Bitte helfe uns indem du &lt;a href=&apos;https://github.com/openrazer/openrazer/wiki/Keyboard-layouts&apos;&gt;https://github.com/openrazer/openrazer/wiki/Keyboard-layouts&lt;/a&gt; besuchst. Ein Rückfalllayout wird einstweilen benutzt.</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="150"/>
        <source>Your keyboard layout (%1) is not yet supported by RazerGenie for this keyboard. Please open an issue in the RazerGenie repository.</source>
        <translation>Dein Tastaturlayout (%1) ist noch nicht von RazerGenie für diese Tastatur unterstützt. Bitte öffne ein Issue in der RazerGenie Repository.</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="164"/>
        <source>Neither one of these layouts was found in the layout file: %1. Exiting.</source>
        <translation>Keines der folgenden Layouts wird in der Layout Datei gefunden: %1. Der Editor wird nicht geöffnet.</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="251"/>
        <source>Error loading %1.json!</source>
        <translation>Fehler beim laden von%1.json!</translation>
    </message>
    <message>
        <location filename="../../src/customeditor.cpp" line="251"/>
        <source>The file %1.json, used for the custom editor failed to load: %2
The editor won&apos;t open now.</source>
        <translation>Die Datei %1.json, welche für den Custom Editor benützt wird, wurde nicht geladen: %2
Der Editor wird nicht geöffnet.</translation>
    </message>
</context>
<context>
    <name>DeviceListWidget</name>
    <message>
        <location filename="../../src/devicelistwidget.cpp" line="39"/>
        <source>Downloading image...</source>
        <translation>Bild wird heruntegeladen...</translation>
    </message>
    <message>
        <location filename="../../src/devicelistwidget.cpp" line="71"/>
        <source>No image</source>
        <translation>Kein Bild</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <location filename="../../src/util.cpp" line="26"/>
        <source>Error!</source>
        <translation>Fehler!</translation>
    </message>
    <message>
        <location filename="../../src/util.cpp" line="33"/>
        <source>Information!</source>
        <translation>Information!</translation>
    </message>
</context>
<context>
    <name>RazerGenie</name>
    <message>
        <location filename="../../src/razergenie.cpp" line="58"/>
        <source>The daemon is not installed</source>
        <translation>Der Daemon ist nicht installiert</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="59"/>
        <source>The daemon is not installed or the version installed is too old. Please follow the installation instructions on the website!</source>
        <translation>Der Daemon ist nicht installiert oder die installierte Version ist zu alt. Bitte folge der Installationsanleitung auf der Webseite!</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="60"/>
        <source>Open website</source>
        <translation>Webseite öffnen</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="73"/>
        <source>The daemon is not available.</source>
        <translation>Der Daemon ist nicht verfügbar.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="74"/>
        <source>The OpenRazer daemon is not started and you are not using systemd as your init system.
You have to either start the daemon manually every time you log in or set up another method of autostarting the daemon.

Manually starting would be running &quot;openrazer-daemon&quot; in a terminal.</source>
        <translation>Der OpenRazer Daemon ist nicht gestartet and du benutzt nicht systemd als dein Init-System.
Du musst entweder den Daemon manuell jedes Mal nach dem einloggen oder du richtest eine andere Methode ein, um den Daemon automatisch zu starten.

Manuell den Daemon zu starten, wäre, &quot;openrazer-daemon&quot; in einem Terminal auszuführen.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="85"/>
        <source>The daemon is currently not available. The status output is below.</source>
        <translation>Der Daemon ist derzeit nicht verfügbar. Die Statusausgabe ist unterhalb.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="87"/>
        <source>If you think, there&apos;s a bug, you can report an issue on GitHub:</source>
        <translation>Wenn du glaubst, dass ein Problem existiert, kannst du dies auf GitHub melden:</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="88"/>
        <location filename="../../src/razergenie.cpp" line="754"/>
        <location filename="../../src/razergenie.cpp" line="762"/>
        <source>Report issue</source>
        <translation>Problem melden</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="109"/>
        <source>The OpenRazer daemon is not set to auto-start. Click &quot;Enable&quot; to use the full potential of the daemon right after login.</source>
        <translation>Der OpenRazer Daemon ist nicht gesetzt, dass er automatisch startet. Drück &quot;Aktivieren&quot;, um dass volle Potential des Daemon direkt nach dem Login zu benützen.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="110"/>
        <source>Enable</source>
        <translation>Aktivieren</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="139"/>
        <source>Daemon version: %1</source>
        <translation>Daemon Version: %1</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="159"/>
        <source>The D-Bus connection was re-established.</source>
        <translation>Die D-Bus Verbindung wurde wiederhergestellt.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="167"/>
        <source>The D-Bus connection was lost, which probably means that the daemon has crashed.</source>
        <translation>Die D-Bus Verbindung wurde unterbrochen, was wahrscheinlich heißt, dass der Daemon abgestürzt ist.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="350"/>
        <source>Lighting</source>
        <translation>Beleuchtung</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="352"/>
        <source>Lighting Logo</source>
        <translation>Beleuchtung Logo</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="354"/>
        <source>Lighting Scroll</source>
        <translation>Beleuchtung Scroll</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="390"/>
        <source>Brightness</source>
        <translation>Helligkeit</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="415"/>
        <source>Brightness Logo</source>
        <translation>Helligkeit Logo</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="439"/>
        <source>Brightness Scroll</source>
        <translation>Helligkeit Scroll</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="478"/>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="480"/>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="505"/>
        <source>Set Logo Active</source>
        <translation>Logo aktiv setzen</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="516"/>
        <source>Set Scroll Active</source>
        <translation>Scroll aktiv setzen</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="528"/>
        <source>Profile LED %1</source>
        <translation>Profil LED %1</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="560"/>
        <source>DPI</source>
        <translation>DPI</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="567"/>
        <source>DPI X</source>
        <translation>DPI X</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="568"/>
        <source>DPI Y</source>
        <translation>DPI Y</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="589"/>
        <source>Lock X/Y</source>
        <translation>X/Y sperren</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="639"/>
        <source>Polling rate</source>
        <translation>Abfragerate</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="656"/>
        <source>Open custom editor</source>
        <translation>Custom Editor öffnen</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="666"/>
        <source>Serial number: %1</source>
        <translation>Seriennummer: %1</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="669"/>
        <source>Firmware version: %1</source>
        <translation>Firmware-Version: %1</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="750"/>
        <source>No device was detected</source>
        <translation>Kein Gerät wurde erkannt</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="751"/>
        <source>The OpenRazer daemon didn&apos;t detect a device that is supported.
This could also be caused due to a misconfiguration of this PC.</source>
        <translation>Der OpenRazer Daemon hat kein Gerät erkannt, welches unterstützt ist.
Dies kann auch durch eine Fehlkonfiguration von diesem PC verursacht sein.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="752"/>
        <source>Open supported devices</source>
        <translation>Unterstützte Geräte öffnen</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="757"/>
        <source>The daemon didn&apos;t detect a device that is connected</source>
        <translation>Der Daemon hat kein Geräte erkannt, welches verbunden ist</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="758"/>
        <source>Linux detected connected devices but the daemon didn&apos;t. This could be either due to a permission problem or a kernel module problem.</source>
        <translation>Linux hat ein Gerät erkannt, aber der Daemon nicht. Dies kann entweder durch ein Berechtigungsproblem oder durch ein Kernel-Modul Problem verursacht sein.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="760"/>
        <source>Open troubleshooting page</source>
        <translation>Problemlösungs-Seite öffnen</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="779"/>
        <source>Error while syncing devices.</source>
        <translation>Fehler beim Synchronisieren von Geräten.</translation>
    </message>
    <message>
        <location filename="../../src/razergenie.cpp" line="785"/>
        <source>Error while toggling &apos;turn off on screensaver&apos;</source>
        <translation>Fehler beim umschalten von &apos;abschalten bei Bildschirmschoner&apos;</translation>
    </message>
</context>
</TS>
