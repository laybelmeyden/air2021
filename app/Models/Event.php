<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'body',
        'image',
        'date',
        'page',
        'time',
        'href_event',
        'minibody',
        'zayavka',
        'status',
        'actually',
        'formaregi',
        'seo_title',
        'seo_description',
        'seo_keywords',
        'preimg',
        'slider__img',
    ];
}
