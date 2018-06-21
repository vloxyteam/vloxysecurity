@extends('admin.layout')
@section('content')
<div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Listado de camaras</h3>

              <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                  <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-header -->

            @if (session('status'))
                <div class="alert alert-success">
                  {{session('status')}}
                </div>
            @endif

            @if($cameras->isEmpty())
                <p>No existen camaras configuradas</p>
            @else
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tr>
                  <th>Centro Comercial</th>
                  <th>Direccion</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th>Estado</th>
                </tr>
                @foreach($cameras as $camera)
                    <tr>
                        <td>
                            <a href="{!! action('CamerasController@show', $camera->cameraid) !!}">
                                {!! $camera->centrocomercial !!}
                            </a>                            
                        </td>
                        <td>{!! $camera->direccion !!}</td>
                        <td>{!! $camera->longitud !!}</td>                    
                        <td>{!! $camera->latitud !!}</td>
                        <td><span class="label label-success">{!! $camera->estado !!}</span></td>
                    </tr>
                @endforeach
              </table>
            </div>
            @endif
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </div>
@endsection