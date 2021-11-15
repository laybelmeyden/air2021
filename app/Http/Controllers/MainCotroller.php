<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class MainCotroller extends Controller
{
    public function partners()
    {
        $result = array();
        $dirs  = File::Files(public_path('assets/partners'));
        foreach ($dirs as $item) {
            array_push($result, $item->getFilename());
        }
        return $result;
    }
}
