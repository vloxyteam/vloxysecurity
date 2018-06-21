@extends('admin.layout')
@section('content')
    <div class ="container col-md-8 col-md-offset-2">
        <div class="well well bs-component">
            <div class="content">
                <h2 class="header">{!! $camera->centrocomercial !!}</h2>
                <p><strong>Estado</strong>:{!! $camera->estado ? 'Activo':'inactivo' !!}</p>
                <p>{!! $camera->direccion !!}</p>

            </div>
            <a href="{!! action('CamerasController@edit',$camera->cameraid) !!}" class="btn btn-info">Editar </a>
            
            <form method="post" action="{!! action('CamerasController@destroy',$camera->cameraid) !!}" class="pull-left">
                <input type="hidden" name="_token" value="{!! csrf_token() !!}" >
                <div>
                    <button type="submit" class="btn btn-warning">Eliminar</button>
                </div>
            </form>

            <div class="clearfix"></div>
        </div>
    </div>
@endsection