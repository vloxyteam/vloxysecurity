@extends('admin.layout')
@section('content')
    <div class ="container col-md-8 col-md-offset-2">
        <div class="well well bs-component">
        
            <div class="content">
            <h1>Placa reportada!!!! - Alerta</h1>
                <h2 class="header">{!! $licenseplate->licensePlateText !!}</h2>                
                <p>{!! $licenseplate->Description !!}</p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
@endsection