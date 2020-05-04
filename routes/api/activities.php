<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'ActivitiesController@publishedActivities')->name('activities.published.index');
Route::get('published/{id}', 'ActivitiesController@publishedActivity')->name('activities.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'ActivitiesController@store')->name('activities.store');
    Route::get('/', 'ActivitiesController@index')->name('activities.index');
    Route::get('/{id}', 'ActivitiesController@show')->name('activities.show');
    Route::match(['put', 'patch'], '/{id}', 'ActivitiesController@update')->name('activities.update');
    Route::delete('/{id}', 'ActivitiesController@delete')->name('activities.delete');
});