<?php
$curl = curl_init();
// $params = ['client_id' => '6cfd1788-0143-4ebc-8e9c-d8a7d98d2fad',
//            'redirect_uri' => 'localhost:1234/api',
//            'response_type' => 'code',
//            'scope' => 'openid'];
// $params_string = http_build_query($params);
$opt = [CURLOPT_URL => 'https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=e05d4149-1624-4627-a5ba-7472a39e43ab&redirect_uri=https%3A%2F%2Fintra.epitech.eu%2Fauth%2Foffice365&state=%2F',
        CURLOPT_RETURNTRANSFER => true,
     //    CURLOPT_POST => true,
     //    CURLOPT_POSTFIELDS => $params_string
   ];

curl_setopt_array($curl, $opt);

$res = json_decode(curl_exec($curl), true);
curl_close($curl);
print_r($res);


$curl = curl_init();
$params = ['format' => 'json',
           'login' => 'harold.armijo-leon@epitech.eu',
           'password' => '1^AO0@kt',
           'remember_me' => 'on'];
$params_string = http_build_query($params);
$opt = [CURLOPT_URL => 'https://intra.epitech.eu',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $params_string];

curl_setopt_array($curl, $opt);

$res = json_decode(curl_exec($curl), true);
curl_close($curl);
print_r($res);
 ?>
