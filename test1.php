<?php

function is_palindrome($input) {
    $search = explode(",","á,é,í,ó,ú");
    $replace = explode(",","a,e,i,o,u");
    $input= str_replace($search, $replace, $input);
    $input = str_replace(",", "", $input);
    $input2 = str_replace(' ', '', $input);
    $input2 = strtolower($input2);

    if($input2 == strrev($input2)){
        return 'is palindrome';
    } else {
        return 'not palindrome';
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));




