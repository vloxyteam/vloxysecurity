<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CameraFormRequest;
use App\Camera;

class CamerasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cameras = Camera::all();
        return view('cameras.index',compact('cameras'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('cameras.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CameraFormRequest $request)
    {
        $slug= uniqid();
        $camera = new Camera(array(
            'centrocomercial' => $request->get('centrocomercial'),            
            'direccion' => $request->get('direccion'),
            'longitud' => $request->get('longitud'),
            'latitud' => $request->get('latitud'),
            'dcamara' => $request->get('dcamara'),
            'ipserver' => $request->get('ipserver'),
            'estado'=> $request->get('estado'),
        ));

        $camera->save();       
        return Redirect('/cameras')->with('status','La camara ha sido creada ' . $slug);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($cameraId)
    {
        $camera = Camera::where('cameraid', '=', $cameraId)->firstOrFail();
        return view('cameras.show',compact('camera'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($cameraId)
    {
        $camera = Camera::where('cameraid', '=', $cameraId)->firstOrFail();
        return view('cameras.edit',compact('camera'));
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
    public function destroy($cameraId)
    {
        $camera = Camera::where('cameraid', '=', $cameraId);
        $camera->delete();
        return Redirect('/cameras')->with('status','La camara ' .$cameraId . ' ha sido eliminada');
    }
}
