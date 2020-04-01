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
    return redirect('/home');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/create-quiz-league', 'QuizController@createLeague')->name('create_league')->middleware('auth');
Route::post('/create-quiz-league', 'QuizController@storeLeague')->name('store_league')->middleware('auth');
Route::get('/join-quiz-league', 'QuizController@joinLeague')->name('join_league')->middleware('auth');
Route::post('/join-quiz-league', 'QuizController@storeJoinLeague')->name('store_join_league')->middleware('auth');
Route::get('/quiz/{quiz}', 'QuizController@show')->name('quiz_show')->middleware('auth');
Route::get('/quiz/{quiz}/quiz-master/{user}', 'QuizController@showMaster')->name('quiz_show_master')->middleware('auth');
Route::get('/quiz/{quiz}/quiz-master/{user}/round/{round}', 'QuizController@index')->name('quiz')->middleware('auth');
Route::get('/quiz/{quiz}/leaderboard', 'QuizController@leaderboard')->name('quiz_leaderboard')->middleware('auth');
Route::post('/quiz/{quiz}/quiz-master/{user}/round/{round}', 'QuizController@store')->name('post_quiz')->middleware('auth');
