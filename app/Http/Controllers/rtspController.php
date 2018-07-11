<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class rtspController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listas = array('rtsp://admin:vloxy123@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0',
         'rtsp://admin:vloxy123@192.168.1.108:554/cam/realmonitor?channel=2&subtype=0', 
         'rtsp://admin:vloxy123@192.168.1.108:554/cam/realmonitor?channel=3&subtype=0',
         'rtsp://admin:vloxy123@192.168.1.108:554/cam/realmonitor?channel=4&subtype=0');

        return view('viewcameras.index', compact('listas'));
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
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
