@extends('admin.layout')
@section('content')
    <div class ="container col-md-8 col-md-offset-2">
        <div class="well well bs-component">
            <div class="content">
                <h1 class="header"> Placa reportada {!! $notificationLpr->licensePlateText !!}</h1>    
                <h2 class="header"> Hora de reporte {!! $notificationLpr->created_at !!}</h2>
                <p><strong>Reporte: </strong>{!! $notificationLpr->Description !!}</p>

                <p><strong>Encontrada en : </strong>{!! $notificationLpr->centrocomercial !!}</p>
                <p><strong>Punto del CC : </strong>{!! $notificationLpr->descamara !!}</p>
                <p><strong>Direccion : </strong>{!! $notificationLpr->direccionCC !!}</p>
                
                

            </div>
            <div class="clearfix"></div>
        </div>
    </div>
@endsection