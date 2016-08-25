<?php

/*$post_data = file_get_contents("php://input");
$data = json_decode($post_data);

var_dump($post_data);
$query = "scripts/Shells/monitorSite.sh ".$data->urlsite." 2>&1";*/
$test_query = "scripts/Shells/monitorSite localhost 2>&1";
//echo ($test_query);
$shellResult = shell_exec($test_query);
print_r($shellResult);
?>