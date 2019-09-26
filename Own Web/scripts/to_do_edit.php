<?php
$text = $_GET["message"];

$myfile = fopen("../Documents/To Do List.txt", "w") or die("Unable to open file!");
fwrite($myfile, $text);
fclose($myfile);

?>