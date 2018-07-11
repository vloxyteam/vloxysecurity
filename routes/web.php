<?php
use  App\Events\eventTrigger;
use App\NotificationLpr;
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

Route::get('/','PagesController@home');
Route::get('/about','PagesController@about');
Route::get('/contact','CamerasController@create');
Route::post('/contact','CamerasController@store');
Route::get('/cameras','CamerasController@index');
Route::get('/camera/{cameraId?}','CamerasController@show');
Route::get('/camera/{cameraId?}/edit','CamerasController@edit');
Route::post('/camera/{cameraId?}/delete','CamerasController@destroy');
Route::get('/lprMaps','lprMapsController@index');
Route::get('/licenseplate','licenseplateController@index');
Route::post('/licenseplate','licenseplateController@show');
Route::get('/notificationlpr/{slug?}/edit','licenseplateController@edit');
Route::get('/rtsp','rtspController@index');

                            

Route::get('/alertbox',function(){
    return view('eventListener');   
});

Route::get('/fireEvent',function(){
    //$notLPR = new NotificationLpr(array(
    //    'id' => 1,            
    //    'licensePlateText' => 'ABC-123',        
    //));
    event(new eventTrigger('ABC-987'));   
    return 'Placa enviada';
});






Route::get('sendemail', function(){    
    $data=array('name'=>'Vloxy Security',);
    Mail::send('emails.welcome',$data, function($message)
    {
        $message->from('eviliopolo79@gmail.com','vloxy security');
        $message->to('eviliopolo79@gmail.com')->subject('test mail vloxy security');
    });
    return 'Mail enviado correctamente'; 
});

