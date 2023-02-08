<?php

    $username = $_GET['username'];

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.twitter.com/1.1/users/lookup.json?screen_name='.$username,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAGjeCAEAAAAAG%2BphPhUxyUSYhOLY8ZfQZHYCbFM%3Ds5EZINbwUTarPaaIpCsv3uwb7LGheR152BDNHY5PRcrdj4WX7L',
            'Cookie: guest_id=v1%3A166969823667943569; guest_id_ads=v1%3A166969823667943569; guest_id_marketing=v1%3A166969823667943569; personalization_id="v1_nisSJz1NYckt12sa9qBo9Q=="; lang=en'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);

    header('Content-Type: application/json; charset=utf-8');
    echo $response;


?>