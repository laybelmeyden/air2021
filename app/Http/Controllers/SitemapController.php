<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Laravelium\Sitemap\Sitemap;




class SitemapController extends Controller
{
    public function index(Sitemap $sitemap)
    {
        // create new sitemap object
        // $sitemap = app()->make("sitemap");

        // add items to the sitemap (url, date, priority, freq)
        $sitemap->add(URL::to('news'), '2012-08-26T12:30:00+02:00', '1.0', 'daily');
        $sitemap->add(URL::to('events'), '2012-08-26T12:30:00+02:00', '1.0', 'daily');
        $sitemap->add(URL::to('projects'), '2012-08-26T12:30:00+02:00', '1.0', 'daily');
        // get all posts from db
        $allNewsMains = DB::table('news')->get();
        $allEventsMains = DB::table('events')->get();
        $allProjectsMains = DB::table('projects')->get();
        // add every post to the sitemap
        foreach ($allNewsMains as $allNewsMain) {
            $sitemap->add(URL::to('news/' . $allNewsMain->id), $allNewsMain->updated_at, '1.0', 'daily');
        }
        foreach ($allEventsMains as $allEventsMain) {
            $sitemap->add(URL::to('events/' . $allEventsMain->id), $allEventsMain->updated_at, '1.0', 'daily');
        }
        foreach ($allProjectsMains as $allProjectsMain) {
            $sitemap->add(URL::to('projects/' . $allProjectsMain->id), $allProjectsMain->updated_at, '1.0', 'daily');
        }
        // generate your sitemap (format, filename)
        $sitemap->store('xml', 'sitemap');
        // this will generate file mysitemap.xml to your public folder
        return redirect(url('sitemap.xml'));
    }
}
