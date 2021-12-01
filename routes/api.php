<?php

use App\Http\Controllers\CompetetionController;
use App\Http\Controllers\MainCotroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Laravelium\Sitemap\Sitemap;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('partners', [MainCotroller::class, 'partners']);
Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::get('user', [\App\Http\Controllers\AuthController::class, 'user']);
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});
Route::resource('events', EventController::class);
Route::resource('news', NewsController::class);
Route::resource('competetions', CompetetionController::class);
Route::resource('projects', ProjectController::class);
Route::resource('partners', PartnersController::class);
Route::get('eventsActually', [EventController::class, 'indexActually']);
Route::get('eventsNonActually', [EventController::class, 'indexNonActually']);
Route::get('projectsActually', [ProjectController::class, 'indexActually']);
Route::get('projectsNonActually', [ProjectController::class, 'indexNonActually']);
Route::get('allNewsMain', [NewsController::class, 'indexMain']);


Route::get('getSitemap', function(){

    // create new sitemap object
    $sitemap = App::make("sitemap");

    // add items to the sitemap (url, date, priority, freq)
    $sitemap->add(URL::to('news'), '2012-08-26T12:30:00+02:00', '1.0', 'daily');
    $sitemap->add(URL::to('events'), '2012-08-26T12:30:00+02:00', '1.0', 'daily');
    $sitemap->add(URL::to('projects'), '2012-08-26T12:30:00+02:00', '1.0', 'daily');
    // get all posts from db
    $allNewsMains = DB::table('news')->get();
    $allEventsMains = DB::table('events')->get();
    $allProjectsMains = DB::table('projects')->get();
    // add every post to the sitemap
    foreach ($allNewsMains as $allNewsMain)
    {
        $sitemap->add(URL::to('news/'.$allNewsMain -> id), $allNewsMain->updated_at, '1.0', 'daily');
    }
    foreach ($allEventsMains as $allEventsMain)
    {
        $sitemap->add(URL::to('events/'.$allEventsMain -> id), $allEventsMain->updated_at, '1.0', 'daily');
    }
    foreach ($allProjectsMains as $allProjectsMain)
    {
        $sitemap->add(URL::to('projects/'.$allProjectsMain -> id), $allProjectsMain->updated_at, '1.0', 'daily');
    }
    // generate your sitemap (format, filename)
    $sitemap->store('xml', 'sitemap');
    // this will generate file mysitemap.xml to your public folder
    return redirect(url('sitemap.xml'));

});