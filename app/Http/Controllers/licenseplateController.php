<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\eventTrigger;
use App\LicensePlate;
use App\NotificationLpr;
use App\Camera;

class licenseplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cameras =  Camera::all();
        return view('licenseplate.index',compact('cameras'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {        
        $placa = $request->get('placatxt');
        $licenseplate = LicensePlate::where('licensePlateText', '=', $placa)->firstOrFail();
        $slug= uniqid();
        $cameraid= $request->cameras;        
        $camera = Camera::where('cameraid', '=', $cameraid)->firstOrFail();        

        $NotificationLpr = new NotificationLpr(array(
            'slug' => $slug,
            'licensePlateText' => $licenseplate->licensePlateText,            
            'Description' => $licenseplate->Description,
            'cameraid' => $cameraid,
            'longitud' =>$camera->longitud,
            'latitud' => $camera->latitud,
            'centrocomercial'=> $camera->centrocomercial,
            'descamara'=> $camera->dcamara,
            'direccionCC'=> $camera->direccion,
        ));

        $NotificationLpr->save();  
        $notificationLpr = NotificationLpr::whereSlug($slug)->firstOrFail();        

        event(new eventTrigger($notificationLpr)); 
        return view('licenseplate.show',compact('licenseplate'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $notificationLpr = NotificationLpr::whereSlug($slug)->firstOrFail();
        return view ('lpr.show',compact('notificationLpr'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
