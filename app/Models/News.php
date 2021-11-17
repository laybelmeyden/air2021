<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'date',
        'body',
        'image',
        'title',
        'sodnew',
        'seo_title',
        'seo_description',
        'seo_keywords',
        'page',
        'other',
        'other2',
    ];
}
