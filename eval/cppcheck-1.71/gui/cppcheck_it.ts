<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="it_IT">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>Informazioni su Cppcheck</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Versione %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>Cppcheck - Uno strumento per l&apos;analisi statica di codice C/C++</translation>
    </message>
    <message utf8="true">
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-2015 Daniel Marjamäki and cppcheck team.</source>
        <oldsource>Copyright © 2007-2013 Daniel Marjamäki and cppcheck team.</oldsource>
        <translation type="unfinished">Copyright (C) 2007-2012 Daniel Marjamäki ed il team Cppcheck.</translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>Questo programma è rilasciato sotto i termini
della GNU General Public License versione 3</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Visita la pagina iniziale di Cppcheck all&apos;indirizzo: %1</translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="application.ui" line="23"/>
        <source>Add an application</source>
        <translation>Aggiungi un&apos;applicazione</translation>
    </message>
    <message>
        <location filename="application.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation>Qui puoi aggiungere un&apos;applicazione che può aprire i file contenente l&apos;errore. Specifica un nome per l&apos;applicazione, l&apos;eseguibile dell&apos;applicazione e i parametri di comando per l&apos;applicazione.

I seguenti testi nei parametri sono sostituiti con appropriati valori quando l&apos;applicazione è eseguita:
(file) - Il nome del file contenente l&apos;errore
(line) - La linea contenente l&apos;errore
(message) - Messaggio d&apos;errore
(severity) - Severità dell&apos;errore

Un&apos;esempio di apertura di un file con Kate e lo scorrimento alla giusta linea:
Eseguibile: kate
Parametri: -l(line) (file)
</translation>
    </message>
    <message>
        <location filename="application.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <location filename="application.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>&amp;Eseguibile:</translation>
    </message>
    <message>
        <location filename="application.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation>&amp;Parametri:</translation>
    </message>
    <message>
        <location filename="application.ui" line="138"/>
        <source>Browse</source>
        <translation>Esplora</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="59"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>File di esecuzione (*.exe);;Tutti i file(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="62"/>
        <source>Select viewer application</source>
        <translation>Seleziona l&apos;applicazione di lettura</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="77"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="78"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation>Devi specificare un nome, un percorso ed, opzionalmente, i parametri per l&apos;applicazione!</translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="42"/>
        <source>Could not find the file: %1</source>
        <translation>File non trovato: %1</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="46"/>
        <location filename="fileviewdialog.cpp" line="60"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="56"/>
        <source>Could not read the file: %1</source>
        <translation>Non è stato possibile leggere il file: %1</translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="55"/>
        <source>Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="64"/>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="104"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="124"/>
        <source>Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="157"/>
        <source>Comments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="197"/>
        <source>noreturn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="205"/>
        <source>False</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="210"/>
        <source>True</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="215"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="225"/>
        <source>return value must be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="232"/>
        <source>ignore function in leaks checking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="239"/>
        <source>Arguments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="251"/>
        <source>Edit</source>
        <translation type="unfinished">Modifica</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="79"/>
        <source>Library files (*.cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="81"/>
        <source>Open library file</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="208"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>argvalue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="234"/>
        <source>mul</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="129"/>
        <location filename="libraryeditargdialog.ui" line="239"/>
        <source>strlen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="137"/>
        <location filename="libraryeditargdialog.ui" line="247"/>
        <source>Arg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="164"/>
        <location filename="libraryeditargdialog.ui" line="274"/>
        <source>Arg2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="199"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="320"/>
        <source>Valid values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LogView</name>
    <message>
        <location filename="logview.ui" line="17"/>
        <source>Checking Log</source>
        <translation>Log sulla scansione</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="34"/>
        <source>Clear</source>
        <translation>Cancella</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="68"/>
        <source>Save Log</source>
        <translation>Salva il rapporto</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="69"/>
        <source>Text files (*.txt *.log);;All files (*.*)</source>
        <translation>File di testo (*.txt *.log);;Tutti i files(*.*)</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="73"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="74"/>
        <source>Could not open file for writing: &quot;%1&quot;</source>
        <translation>Non è stato possibile aprire il file per la scrittura: &quot;%1&quot;</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="main.ui" line="26"/>
        <location filename="mainwindow.cpp" line="300"/>
        <location filename="mainwindow.cpp" line="368"/>
        <location filename="mainwindow.cpp" line="424"/>
        <location filename="mainwindow.cpp" line="489"/>
        <location filename="mainwindow.cpp" line="511"/>
        <location filename="mainwindow.cpp" line="829"/>
        <location filename="mainwindow.cpp" line="936"/>
        <location filename="mainwindow.cpp" line="1056"/>
        <location filename="mainwindow.cpp" line="1226"/>
        <location filename="mainwindow.cpp" line="1313"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="main.ui" line="180"/>
        <source>Standard</source>
        <translation>Standard</translation>
    </message>
    <message>
        <location filename="main.ui" line="70"/>
        <source>&amp;File</source>
        <translation>&amp;File</translation>
    </message>
    <message>
        <location filename="main.ui" line="89"/>
        <source>&amp;View</source>
        <translation>&amp;Visualizza</translation>
    </message>
    <message>
        <location filename="main.ui" line="93"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Barre degli strumenti</translation>
    </message>
    <message>
        <location filename="main.ui" line="132"/>
        <source>&amp;Check</source>
        <translation>&amp;Scansiona</translation>
    </message>
    <message>
        <location filename="main.ui" line="136"/>
        <source>C++ standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="143"/>
        <source>C standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="167"/>
        <source>&amp;Edit</source>
        <translation>&amp;Modifica</translation>
    </message>
    <message>
        <location filename="main.ui" line="229"/>
        <source>&amp;License...</source>
        <translation>&amp;Licenza...</translation>
    </message>
    <message>
        <location filename="main.ui" line="234"/>
        <source>A&amp;uthors...</source>
        <translation>A&amp;utori...</translation>
    </message>
    <message>
        <location filename="main.ui" line="243"/>
        <source>&amp;About...</source>
        <translation>I&amp;nformazioni su...</translation>
    </message>
    <message>
        <location filename="main.ui" line="248"/>
        <source>&amp;Files...</source>
        <translation>&amp;File...</translation>
    </message>
    <message>
        <location filename="main.ui" line="251"/>
        <location filename="main.ui" line="254"/>
        <source>Check files</source>
        <translation>Scansiona i file</translation>
    </message>
    <message>
        <location filename="main.ui" line="257"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="main.ui" line="266"/>
        <source>&amp;Directory...</source>
        <translation>&amp;Cartella...</translation>
    </message>
    <message>
        <location filename="main.ui" line="269"/>
        <location filename="main.ui" line="272"/>
        <source>Check directory</source>
        <translation>Scansiona la cartella</translation>
    </message>
    <message>
        <location filename="main.ui" line="275"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <source>&amp;Recheck files</source>
        <translation type="obsolete">&amp;Riscansiona i file</translation>
    </message>
    <message>
        <location filename="main.ui" line="287"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="main.ui" line="296"/>
        <source>&amp;Recheck all files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="305"/>
        <source>&amp;Stop</source>
        <translation>&amp;Ferma</translation>
    </message>
    <message>
        <location filename="main.ui" line="308"/>
        <location filename="main.ui" line="311"/>
        <source>Stop checking</source>
        <translation>Ferma la scansione</translation>
    </message>
    <message>
        <location filename="main.ui" line="314"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="main.ui" line="323"/>
        <source>&amp;Save results to file...</source>
        <translation>&amp;Salva i risultati nel file...</translation>
    </message>
    <message>
        <location filename="main.ui" line="326"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="main.ui" line="331"/>
        <source>&amp;Quit</source>
        <translation>&amp;Esci</translation>
    </message>
    <message>
        <location filename="main.ui" line="340"/>
        <source>&amp;Clear results</source>
        <translation>&amp;Cancella i risultati</translation>
    </message>
    <message>
        <location filename="main.ui" line="349"/>
        <source>&amp;Preferences</source>
        <translation>&amp;Preferenze</translation>
    </message>
    <message>
        <location filename="main.ui" line="379"/>
        <source>Errors</source>
        <translation>Errori</translation>
    </message>
    <message>
        <location filename="main.ui" line="382"/>
        <location filename="main.ui" line="385"/>
        <source>Show errors</source>
        <translation>Mostra gli errori</translation>
    </message>
    <message>
        <location filename="main.ui" line="466"/>
        <source>Show S&amp;cratchpad...</source>
        <translation>Mostra il blocchetto per appunti...</translation>
    </message>
    <message>
        <location filename="main.ui" line="516"/>
        <source>Warnings</source>
        <translation>Avvisi</translation>
    </message>
    <message>
        <location filename="main.ui" line="519"/>
        <location filename="main.ui" line="522"/>
        <source>Show warnings</source>
        <translation>Mostra gli avvisi</translation>
    </message>
    <message>
        <location filename="main.ui" line="534"/>
        <source>Performance warnings</source>
        <translation>Avvisi sulle prestazioni</translation>
    </message>
    <message>
        <location filename="main.ui" line="537"/>
        <location filename="main.ui" line="540"/>
        <source>Show performance warnings</source>
        <translation>Mostra gli avvisi sulle prestazioni</translation>
    </message>
    <message>
        <location filename="main.ui" line="548"/>
        <source>Show &amp;hidden</source>
        <translation>Mostra &amp;i nascosti</translation>
    </message>
    <message>
        <location filename="main.ui" line="560"/>
        <location filename="mainwindow.cpp" line="587"/>
        <location filename="mainwindow.cpp" line="619"/>
        <source>Information</source>
        <translation>Informazione</translation>
    </message>
    <message>
        <location filename="main.ui" line="563"/>
        <source>Show information messages</source>
        <translation>Mostra messaggi di informazione</translation>
    </message>
    <message>
        <location filename="main.ui" line="575"/>
        <source>Portability</source>
        <translation>Portabilità</translation>
    </message>
    <message>
        <location filename="main.ui" line="578"/>
        <source>Show portability warnings</source>
        <translation>Mostra gli avvisi sulla portabilità</translation>
    </message>
    <message>
        <location filename="main.ui" line="586"/>
        <source>&amp;Filter</source>
        <translation>&amp;Filtro</translation>
    </message>
    <message>
        <location filename="main.ui" line="589"/>
        <source>Filter results</source>
        <translation>Filtra i risultati</translation>
    </message>
    <message>
        <location filename="main.ui" line="605"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit, ANSI</translation>
    </message>
    <message>
        <location filename="main.ui" line="613"/>
        <source>Windows 32-bit Unicode</source>
        <translation>Windows 32-bit, Unicode</translation>
    </message>
    <message>
        <location filename="main.ui" line="621"/>
        <source>Unix 32-bit</source>
        <translation>Unix 32-bit</translation>
    </message>
    <message>
        <location filename="main.ui" line="629"/>
        <source>Unix 64-bit</source>
        <translation>Unix 64-bit</translation>
    </message>
    <message>
        <location filename="main.ui" line="637"/>
        <source>Windows 64-bit</source>
        <translation>Windows 64-bit</translation>
    </message>
    <message>
        <location filename="main.ui" line="645"/>
        <source>Platforms</source>
        <translation>Piattaforme</translation>
    </message>
    <message>
        <location filename="main.ui" line="659"/>
        <source>C++11</source>
        <translation>C++11</translation>
    </message>
    <message>
        <location filename="main.ui" line="670"/>
        <source>C99</source>
        <translation>C99</translation>
    </message>
    <message>
        <location filename="main.ui" line="678"/>
        <source>Posix</source>
        <translation>Posix</translation>
    </message>
    <message>
        <location filename="main.ui" line="686"/>
        <source>C11</source>
        <translation type="unfinished">C11</translation>
    </message>
    <message>
        <location filename="main.ui" line="694"/>
        <source>C89</source>
        <translation type="unfinished">C89</translation>
    </message>
    <message>
        <location filename="main.ui" line="702"/>
        <source>C++03</source>
        <translation type="unfinished">C++03</translation>
    </message>
    <message>
        <location filename="main.ui" line="707"/>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="710"/>
        <source>Print the Current Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="715"/>
        <source>Print Pre&amp;view...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="718"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="723"/>
        <source>Library Editor...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="726"/>
        <source>Open library editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="734"/>
        <source>Auto-detect language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="742"/>
        <source>Enforce C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="750"/>
        <source>Enforce C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="390"/>
        <source>&amp;Check all</source>
        <translation>&amp;Seleziona tutto</translation>
    </message>
    <message>
        <location filename="main.ui" line="218"/>
        <source>Filter</source>
        <translation>Filtro</translation>
    </message>
    <message>
        <location filename="main.ui" line="284"/>
        <source>&amp;Recheck modified files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="395"/>
        <source>&amp;Uncheck all</source>
        <translation>&amp;Deseleziona tutto</translation>
    </message>
    <message>
        <location filename="main.ui" line="400"/>
        <source>Collapse &amp;all</source>
        <translation>Riduci &amp;tutto</translation>
    </message>
    <message>
        <location filename="main.ui" line="405"/>
        <source>&amp;Expand all</source>
        <translation>&amp;Espandi tutto</translation>
    </message>
    <message>
        <location filename="main.ui" line="413"/>
        <source>&amp;Standard</source>
        <translation>&amp;Standard</translation>
    </message>
    <message>
        <location filename="main.ui" line="416"/>
        <source>Standard items</source>
        <translation>Oggetti standard</translation>
    </message>
    <message>
        <location filename="main.ui" line="432"/>
        <source>Toolbar</source>
        <translation>Barra degli strumenti</translation>
    </message>
    <message>
        <location filename="main.ui" line="440"/>
        <source>&amp;Categories</source>
        <translation>&amp;Categorie</translation>
    </message>
    <message>
        <location filename="main.ui" line="443"/>
        <source>Error categories</source>
        <translation>Categorie di errore</translation>
    </message>
    <message>
        <location filename="main.ui" line="448"/>
        <source>&amp;Open XML...</source>
        <translation>&amp;Apri XML...</translation>
    </message>
    <message>
        <location filename="main.ui" line="457"/>
        <source>Open P&amp;roject File...</source>
        <translation>Apri file di p&amp;rogetto...</translation>
    </message>
    <message>
        <location filename="main.ui" line="471"/>
        <source>&amp;New Project File...</source>
        <translation>&amp;Nuovo file di progetto...</translation>
    </message>
    <message>
        <location filename="main.ui" line="476"/>
        <source>&amp;Log View</source>
        <translation>&amp;Visualizza il rapporto</translation>
    </message>
    <message>
        <location filename="main.ui" line="479"/>
        <source>Log View</source>
        <translation>Visualizza il rapporto</translation>
    </message>
    <message>
        <location filename="main.ui" line="487"/>
        <source>C&amp;lose Project File</source>
        <translation>C&amp;hiudi il file di progetto</translation>
    </message>
    <message>
        <location filename="main.ui" line="495"/>
        <source>&amp;Edit Project File...</source>
        <translation>&amp;Modifica il file di progetto...</translation>
    </message>
    <message>
        <location filename="main.ui" line="504"/>
        <source>&amp;Statistics</source>
        <translation>&amp;Statistiche</translation>
    </message>
    <message>
        <location filename="main.ui" line="421"/>
        <source>&amp;Contents</source>
        <translation>&amp;Contenuti</translation>
    </message>
    <message>
        <location filename="main.ui" line="201"/>
        <source>Categories</source>
        <translation>Categorie</translation>
    </message>
    <message>
        <location filename="main.ui" line="361"/>
        <source>Style warnings</source>
        <translation>Avvisi sullo stile</translation>
    </message>
    <message>
        <location filename="main.ui" line="364"/>
        <location filename="main.ui" line="367"/>
        <source>Show style warnings</source>
        <translation>Mostra gli avvisi sullo stile</translation>
    </message>
    <message>
        <location filename="main.ui" line="424"/>
        <source>Open the help contents</source>
        <translation>Apri i contenuti di aiuto</translation>
    </message>
    <message>
        <location filename="main.ui" line="427"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="main.ui" line="122"/>
        <source>&amp;Help</source>
        <translation>&amp;Aiuto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="452"/>
        <source>Select directory to check</source>
        <translation>Seleziona una cartella da scansionare</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="369"/>
        <source>No suitable files found to check!</source>
        <translation>Nessun file trovato idoneo alla scansione!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="77"/>
        <source>Quick Filter:</source>
        <translation>Rapido filtro:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="490"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation>Trovato il file di progetto: %1

Vuoi piuttosto caricare questo file di progetto?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="512"/>
        <source>Found project files from the directory.

Do you want to proceed checking without using any of these project files?</source>
        <translation>Trovati file di progetto dalla directory.

Vuoi procedere alla scansione senza usare qualcuno di questi file di progetto?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="596"/>
        <source>File not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="599"/>
        <source>Bad XML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="602"/>
        <source>Missing attribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="605"/>
        <source>Bad attribute value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="608"/>
        <source>Unsupported format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="619"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="700"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="978"/>
        <source>License</source>
        <translation>Licenza</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="985"/>
        <source>Authors</source>
        <translation>Autori</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="993"/>
        <source>XML files version 2 (*.xml);;XML files version 1 (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <translation>File XML Versione 2 (*.xml);;File XML Versione 1 (*.xml);;File di testo (*.txt);;File CSV (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="995"/>
        <source>Save the report file</source>
        <translation>Salva il file di rapporto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="845"/>
        <source>XML files (*.xml)</source>
        <translation>File XML (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="295"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation>C&apos;è stato un problema con il caricamento delle impostazioni delle applicazioni editor.

Probabilmente ciò è avvenuto perché le impostazioni sono state modificate tra le versioni di Cppcheck. Per favore controlla (e sistema) le impostazioni delle applicazioni editor, altrimenti il programma editor può non partire correttamente.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="425"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>Devi chiudere il file di progetto prima di selezionare nuovi file o cartelle!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="440"/>
        <source>Select files to check</source>
        <translation type="unfinished">Seleziona i file da scansionare</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="442"/>
        <source>C/C++ Source (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="587"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="611"/>
        <source>Duplicate platform type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="614"/>
        <source>Platform type redefined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="700"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="830"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.Do you want to proceed?</source>
        <translation>I risultati correnti verranno ripuliti.

L&apos;apertura di un nuovo file XML ripulirà i risultati correnti. Vuoi procedere?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="847"/>
        <source>Open the report file</source>
        <translation>Apri il file di rapporto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="932"/>
        <source>Checking is running.

Do you want to stop the checking and exit Cppcheck?</source>
        <translation>La scansione è in esecuzione.

Vuoi fermare la scansione ed uscire da Cppcheck?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1002"/>
        <source>XML files version 1 (*.xml)</source>
        <translation>Files XML versione 1 (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1006"/>
        <source>XML files version 2 (*.xml)</source>
        <translation>Files XML versione 2 (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1010"/>
        <source>Text files (*.txt)</source>
        <translation>File di testo (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1014"/>
        <source>CSV files (*.csv)</source>
        <translation>Files CSV (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1058"/>
        <source>Cppcheck - %1</source>
        <translation>Cppcheck - %1</translation>
    </message>
    <message>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation type="obsolete">Fallito il tentativo di cambio della lingua dell&apos;interfaccia utente:

%1

L&apos;interfaccia utente è stata risettata in Inglese. Apri la finestra di dialogo Preferenze per selezionare una qualunque lingua a disposizione.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1103"/>
        <location filename="mainwindow.cpp" line="1188"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>Files di progetto (*.cppcheck);;Tutti i files(*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1105"/>
        <source>Select Project File</source>
        <translation>Seleziona il file di progetto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1133"/>
        <location filename="mainwindow.cpp" line="1202"/>
        <source>Project:</source>
        <translation>Progetto:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1190"/>
        <source>Select Project Filename</source>
        <translation>Seleziona il nome del file di progetto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1227"/>
        <source>No project file loaded</source>
        <translation>Nessun file di progetto caricato</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1308"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation>Il file di progetto

%1

 non è stato trovato!

Vuoi rimuovere il file dalla lista dei progetti recentemente usati?</translation>
    </message>
    <message>
        <location filename="main.cpp" line="100"/>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  Specify directory where GUI datafiles are located (translations, cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="113"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="37"/>
        <source>Built-in</source>
        <translation>Built-in</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Unix 32-bit</source>
        <translation>Unix 32-bit</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 64-bit</source>
        <translation>Unix 64-bit</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit, ANSI</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit Unicode</source>
        <translation>Windows 32-bit, Unicode</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 64-bit</source>
        <translation>Windows 64-bit</translation>
    </message>
</context>
<context>
    <name>Project</name>
    <message>
        <location filename="project.cpp" line="71"/>
        <location filename="project.cpp" line="123"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="project.cpp" line="72"/>
        <source>Could not read the project file.</source>
        <translation>Non è stato possibile leggere il file di progetto.</translation>
    </message>
    <message>
        <location filename="project.cpp" line="124"/>
        <source>Could not write the project file.</source>
        <translation>Non è stato possibile scrivere il file di progetto.</translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>File di progetto</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Project</source>
        <translation>Progetto</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="42"/>
        <source>Defines must be separated by a semicolon &apos;;&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="53"/>
        <source>Root:</source>
        <translation>Root:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="70"/>
        <source>Libraries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="79"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="93"/>
        <location filename="projectfile.ui" line="242"/>
        <source>Paths:</source>
        <translation>Percorsi:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="120"/>
        <location filename="projectfile.ui" line="183"/>
        <location filename="projectfile.ui" line="256"/>
        <source>Add...</source>
        <translation>Aggiungi...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="127"/>
        <location filename="projectfile.ui" line="190"/>
        <location filename="projectfile.ui" line="263"/>
        <source>Edit</source>
        <translation>Modifica</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="134"/>
        <location filename="projectfile.ui" line="197"/>
        <location filename="projectfile.ui" line="270"/>
        <location filename="projectfile.ui" line="333"/>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="159"/>
        <source>Includes</source>
        <translation>Inclusioni</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="165"/>
        <source>Include directories:</source>
        <translation>Cartelle di inclusione:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="217"/>
        <source>Up</source>
        <translation>Su</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="224"/>
        <source>Down</source>
        <translation>Giù</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="236"/>
        <source>Exclude</source>
        <translation>Escludi</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="295"/>
        <source>Suppressions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="301"/>
        <source>Suppression list:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="326"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="32"/>
        <source>Defines:</source>
        <translation>Definizioni:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="42"/>
        <source>Project file: %1</source>
        <translation>File di progetto: %1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="290"/>
        <source>Select include directory</source>
        <translation>Seleziona la cartella da includere</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="313"/>
        <source>Select a directory to check</source>
        <translation>Seleziona una cartella da scansionare</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="353"/>
        <source>Select directory to ignore</source>
        <translation>Seleziona la cartella da ignorare</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="412"/>
        <source>Add Suppression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="413"/>
        <source>Select error id suppress:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <location filename="translationhandler.cpp" line="32"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="33"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="34"/>
        <source>Close</source>
        <translation type="unfinished">Chiudi</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="35"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="99"/>
        <source>Unknown language specified!</source>
        <translation>Lingua specificata sconosciuta!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="129"/>
        <source>Language file %1 not found!</source>
        <translation>Il file di lingua %1 non trovato!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="135"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <translation>Fallito il tentativo di aprire la traduzione per la lingua %1 dal file %2</translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="38"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="39"/>
        <source>Close</source>
        <translation type="unfinished">Chiudi</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="40"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="1081"/>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1081"/>
        <source>Severity</source>
        <translation>Severità</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1081"/>
        <source>Line</source>
        <translation>Linea</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1081"/>
        <source>Summary</source>
        <translation>Riassunto</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="113"/>
        <source>Undefined file</source>
        <translation>File indefinito</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="745"/>
        <source>[Inconclusive]</source>
        <translation>[Inconcludente]</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="285"/>
        <source>debug</source>
        <translation>debug</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="547"/>
        <source>Copy filename</source>
        <translation>Copia nome file</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="548"/>
        <source>Copy full path</source>
        <translation>Copia tutto il percorso</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="549"/>
        <source>Copy message</source>
        <translation>Copia messaggio</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="550"/>
        <source>Copy message id</source>
        <translation>Copia id del messaggio</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="551"/>
        <source>Hide</source>
        <translation>Nascondi</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="552"/>
        <source>Hide all with id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="553"/>
        <source>Open containing folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="605"/>
        <location filename="resultstree.cpp" line="619"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="606"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <translation>Nessun&apos;applicazione di scrittura è stato configurato.

Configura l&apos;applicazione di scrittura per Cppcheck in Preferenze/Applicazioni.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="620"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation>Nessun&apos;applicazione di scrittura predefinito Keine è stato selezionato.

Per favore seleziona l&apos;applicazione di scrittura predefinito in Preferenze/Applicazioni.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="649"/>
        <source>Could not find the file!</source>
        <translation>Non è stato possibile trovare il file!</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="695"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>Non è stato possibile avviare %1

Per favore verifica che il percorso dell&apos;applicazione e i parametri siano corretti.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="709"/>
        <source>Could not find file:
%1
Please select the directory where file is located.</source>
        <translation>Non è stato possibile trovare il file:
%1
Per favore selezioa la cartella dove il file è posizionato.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="716"/>
        <source>Select Directory</source>
        <translation>Seleziona Cartella</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1081"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1081"/>
        <source>Inconclusive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="267"/>
        <source>style</source>
        <translation>stile</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="270"/>
        <source>error</source>
        <translation>errore</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="273"/>
        <source>warning</source>
        <translation>avviso</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="276"/>
        <source>performance</source>
        <translation>performance</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="279"/>
        <source>portability</source>
        <translation>portabilità</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="282"/>
        <source>information</source>
        <translation>Informazione</translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.cpp" line="190"/>
        <source>Print Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="209"/>
        <source>No errors found, nothing to print.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="242"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation>%p% (%1 su %2 file scansionati)</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="255"/>
        <location filename="resultsview.cpp" line="266"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="256"/>
        <source>No errors found.</source>
        <translation>Nessun errore trovato.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="263"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>Sono stati trovati errori, ma sono stati configurati per essere nascosti.
Per vedere il tipo di errori che sono mostrati, apri il menu Visualizza.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="309"/>
        <location filename="resultsview.cpp" line="327"/>
        <location filename="resultsview.cpp" line="335"/>
        <source>Failed to read the report.</source>
        <translation>Apertura del report fallito.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="372"/>
        <source>Summary</source>
        <translation>Riassunto</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="373"/>
        <source>Message</source>
        <translation>Messaggio</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="377"/>
        <source>First included by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="380"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="145"/>
        <source>No errors found, nothing to save.</source>
        <translation>Nessun errore trovato, nulla da salvare.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="172"/>
        <location filename="resultsview.cpp" line="180"/>
        <source>Failed to save the report.</source>
        <translation>Salvataggio del report fallito.</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>Risultati</translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation>Blocchetto per appunti</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="48"/>
        <source>filename</source>
        <translation>Nome file</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="55"/>
        <source>Check</source>
        <translation>Scansiona</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>Preferenze</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>Generale</translation>
    </message>
    <message>
        <location filename="settings.ui" line="183"/>
        <source>Include paths:</source>
        <translation>Percorsi d&apos;inclusione:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="201"/>
        <location filename="settings.ui" line="251"/>
        <source>Add...</source>
        <translation>Aggiungi...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>Numero di threads: </translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation>Numero ideale:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <translation>Forza la scansione di tutte le configurazioni #ifdef</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>Mostra tutto il percorso dei files</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>Mostra il messaggio &quot;Nessun errore trovato&quot; quando nessun errore è stato trovato</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation>Mostra l&apos;id dell&apos;errore nella colonna &quot;Id&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation>Abilita le soppressioni</translation>
    </message>
    <message>
        <location filename="settings.ui" line="149"/>
        <source>Check for inconclusive errors also</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="169"/>
        <source>Show internal warnings in log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="177"/>
        <source>Paths</source>
        <translation>Percorsi</translation>
    </message>
    <message>
        <location filename="settings.ui" line="208"/>
        <source>Edit</source>
        <translation>Modifica</translation>
    </message>
    <message>
        <location filename="settings.ui" line="215"/>
        <location filename="settings.ui" line="265"/>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <location filename="settings.ui" line="240"/>
        <source>Applications</source>
        <translation>Applicazioni</translation>
    </message>
    <message>
        <location filename="settings.ui" line="258"/>
        <source>Edit...</source>
        <translation>Modifica...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="272"/>
        <source>Set as default</source>
        <translation>Imposta come predefinito</translation>
    </message>
    <message>
        <location filename="settings.ui" line="295"/>
        <source>Reports</source>
        <translation>Rapporti</translation>
    </message>
    <message>
        <location filename="settings.ui" line="301"/>
        <source>Save all errors when creating report</source>
        <translation>Salva tutti gli errori quando viene creato il rapporto</translation>
    </message>
    <message>
        <location filename="settings.ui" line="308"/>
        <source>Save full path to files in reports</source>
        <translation>Salva tutto il percorso ai files nei rapporti</translation>
    </message>
    <message>
        <location filename="settings.ui" line="329"/>
        <source>Language</source>
        <translation>Lingua</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation type="obsolete">Avanzate</translation>
    </message>
    <message>
        <source>&amp;Show inconclusive errors</source>
        <translation type="obsolete">&amp;Mostra errori inconcludenti</translation>
    </message>
    <message>
        <source>S&amp;how internal warnings in log</source>
        <translation type="obsolete">&amp;Mostra avvisi interni nel log</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="82"/>
        <source>N/A</source>
        <translation>N/A</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="203"/>
        <source>Add a new application</source>
        <translation>Aggiungi una nuova applicazione</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="236"/>
        <source>Modify an application</source>
        <translation>Modifica un&apos;applicazione</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="263"/>
        <source>[Default]</source>
        <translation>[Predefinito]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="319"/>
        <source>Select include directory</source>
        <translation>Seleziona la cartella da includere</translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="stats.ui" line="14"/>
        <location filename="stats.ui" line="228"/>
        <location filename="statsdialog.cpp" line="105"/>
        <source>Statistics</source>
        <translation>Statistiche</translation>
    </message>
    <message>
        <location filename="stats.ui" line="27"/>
        <location filename="statsdialog.cpp" line="97"/>
        <source>Project</source>
        <translation>Progetto</translation>
    </message>
    <message>
        <location filename="stats.ui" line="33"/>
        <source>Project:</source>
        <translation>Progetto:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="53"/>
        <source>Paths:</source>
        <translation>Percorsi:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Percorsi di inclusione:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="108"/>
        <source>Defines:</source>
        <translation>Definizioni:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="145"/>
        <location filename="statsdialog.cpp" line="101"/>
        <source>Previous Scan</source>
        <translation>Precedente Scansione</translation>
    </message>
    <message>
        <location filename="stats.ui" line="151"/>
        <source>Path Selected:</source>
        <translation>Selezionato percorso:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="161"/>
        <source>Number of Files Scanned:</source>
        <translation>Numero di Files Scansionati:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="181"/>
        <source>Scan Duration:</source>
        <translation>Durata della scansione:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="236"/>
        <source>Errors:</source>
        <translation>Errori:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="254"/>
        <source>Warnings:</source>
        <translation>Avvisi:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="272"/>
        <source>Stylistic warnings:</source>
        <translation>Avvisi sullo stile:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="290"/>
        <source>Portability warnings:</source>
        <translation>Avvisi sulla portabilità:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="308"/>
        <source>Performance issues:</source>
        <translation>Casi sulla performance:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="326"/>
        <source>Information messages:</source>
        <translation>Messaggi di informazione:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="364"/>
        <source>Copy to Clipboard</source>
        <translation>Copia negli Appunti</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="77"/>
        <source>1 day</source>
        <translation>1 giorno</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="77"/>
        <source>%1 days</source>
        <translation>%1 giorni</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="79"/>
        <source>1 hour</source>
        <translation>1 ora</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="79"/>
        <source>%1 hours</source>
        <translation>%1 ore</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>1 minute</source>
        <translation>1 minuto</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>%1 minutes</source>
        <translation>%1 minuti</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>1 second</source>
        <translation>1 secondo</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>%1 seconds</source>
        <translation>%1 secondi</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>0.%1 seconds</source>
        <translation>0,%1 secondi</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="89"/>
        <source> and </source>
        <translation> e </translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="96"/>
        <source>Project Settings</source>
        <translation>Impostazioni progetto</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="98"/>
        <source>Paths</source>
        <translation>Percorsi</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="99"/>
        <source>Include paths</source>
        <translation>Percorsi di inclusione</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="100"/>
        <source>Defines</source>
        <translation>Definizioni</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="102"/>
        <source>Path selected</source>
        <translation>Selezionato percorso</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="103"/>
        <source>Number of files scanned</source>
        <translation>Numero di file scansionati</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="104"/>
        <source>Scan duration</source>
        <translation>Durata della scansione</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="106"/>
        <source>Errors</source>
        <translation>Errori</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="107"/>
        <source>Warnings</source>
        <translation>Avvisi</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="108"/>
        <source>Style warnings</source>
        <translation>Stilwarnungen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="109"/>
        <source>Portability warnings</source>
        <translation>Avvisi sulla portabilità</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="110"/>
        <source>Performance warnings</source>
        <translation>Avvisi sulle performance</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="111"/>
        <source>Information messages</source>
        <translation>Messaggi di informazione</translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="54"/>
        <source>%1 of %2 files checked</source>
        <translation>%1 su %2 file scansionati</translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="141"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation type="unfinished">Fallito il tentativo di cambio della lingua dell&apos;interfaccia utente:

%1

L&apos;interfaccia utente è stata risettata in Inglese. Apri la finestra di dialogo Preferenze per selezionare una qualunque lingua a disposizione.</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="147"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="73"/>
        <source>inconclusive</source>
        <translation>inconcludente</translation>
    </message>
</context>
</TS>
