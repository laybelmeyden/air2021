<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;

class PhotoController extends Controller
{
    public function indexYears()
    {
        $dirsYears  = Storage::directories('public/photos');
        $dirsYearsOut  = Storage::allDirectories('public/photos');
        $dirsYearsAllFiles  = Storage::allFiles('public/photos');

        return  [array_reverse($dirsYears), $dirsYearsOut, $dirsYearsAllFiles];
    }

}
