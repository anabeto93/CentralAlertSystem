<?php

$post_data = file_get_contents("php://input");
$data = json_decode($post_data);
//var_dump($post_data);
/*$query = "scripts/Shells/monitorSite.sh ".$data->urlsite." 2>&1";
//echo ($query);
$shell_response = shell_exec($test_query);
print_r($shell_response);*/

echo ($data->urlsite+" \n");
$header_check = get_headers($data->urlsite);
$response_code = $header_check[0];
echo ($response_code);
?>