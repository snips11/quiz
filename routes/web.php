<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/quiz/{quiz}/quiz-master/{user}/round/{round}', 'QuizController@index')->name('quiz');
Route::get('/quiz/{quiz}/leaderboard', 'QuizController@leaderboard')->name('quiz_leaderboard')->middleware('auth');
Route::post('/quiz/{quiz}/quiz-master/{user}/round/{round}', 'QuizController@store')->name('post_quiz');
