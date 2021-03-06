@extends('admin.layout')
@section('content')
    <div class ="container col-md-8 col-md-offset-2">
        <div class="well well bs-component"> 
            
            @if(empty($licenseplate))
                <h1>Placa No Reportada</h1>
                <p>No existe ningun reporte sobre esta placa</p>
            @else
                <div class="content">
                    <h1>Placa reportada!!!! - Alerta</h1>
                    <h2 class="header">{!! $licenseplate->licensePlateText !!}</h2>                
                    <p>{!! $licenseplate->Description !!}</p>
                </div>
            @endif
            <div class="clearfix"></div>

            <a href="{{ URL::previous() }}">Volver</a>
        </div>
    </div>
@endsection