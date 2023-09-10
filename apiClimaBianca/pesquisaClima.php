<?php

$woeid=filter_input(INPUT_POST,'woeid');

$url="https://api.hgbrasil.com/weather?key=604f0733&woeid=$woeid";

$resultado=json_decode(file_get_contents($url));
$dados=$resultado->results->temp.",".$resultado->results->description.",".$resultado->results->wind_speedy;

echo $dados;

?>