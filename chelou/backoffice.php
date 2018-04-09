<?php
echo 'seach';
$content = fopen('backoffice.html', 'r');

$file = fread($content, filesize('backoffice.html'));

// echo $file;

$i = 27;

while ($file[$i]) {
	echo $file[$i];
	++$i;
}

fclose($content);

// $content = nl2br($content);

// $content = explode('<br>', $content);
// $content = explode('<br/>', $content);
// $content = explode('<br />', $content);

// foreach ($content as $value) {
// 	echo $value . '<br/>';
// }
// echo $content[1];
// $file = fopen('backoffice.html', 'r');
// $buff = fgets($file);
// $buff = fgets($file);
// $buff = fgets($file);
// echo $buff;

// $i = 0;
// while ($content[$i] != EOF) {
// 	echo $content[$i];
// 	++$i;
// }

?>