<?php

use App\Http\Controllers\CompetetionController;
use App\Http\Controllers\MainCotroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\ProjectController;


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
