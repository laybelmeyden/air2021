<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'title',
        'body',
        'image',
        'icon',
        'status',
        'page',
        'minititle',
        'actually',
    ];
}

