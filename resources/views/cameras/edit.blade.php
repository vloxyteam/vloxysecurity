@extends('admin.layout')
@section('content')
                <form class="form-horizontal" method="post">
                
                @foreach ($errors->all() as $error)
                    <p class="alert alert-danger">{{$error}} </p>
                @endforeach

                @if (session('status'))
                    <div class="alert alert-success">
                        {{session('status')}}
                    </div>
                @endif
                <input type="hidden" name="_token" value="{!! csrf_token() !!}" >                                  

                  <div class="form-group">
                    <label for="centrocomercial" class="col-sm-2 control-label">Centro Comercial</label>

                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="centrocomercial" name="centrocomercial" value="{!! $camera->centrocomercial !!}" placeholder="Centro comercial">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="direccion" class="col-sm-2 control-label">direccion</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="direccion" name="direccion" value="{!! $camera->direccion !!}" placeholder="direccion">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="longitud" class="col-sm-2 control-label">longitud</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="longitud" Name="longitud" value="{!! $camera->longitud !!}" placeholder="longitud">
                    </div>
                  </div>

                   <div class="form-group">
                    <label for="latitud" class="col-sm-2 control-label">latitud</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="latitud" Name="latitud" value="{!! $camera->latitud !!}" placeholder="latitud">
                    </div>
                  </div>                 

                  <div class="form-group">
                    <label for="dcamara" class="col-sm-2 control-label">Descripcion</label>

                    <div class="col-sm-10">
                      <textarea class="form-control" id="dcamara" name="dcamara" placeholder="Descripcion de la camara">
                        {!! $camera->dcamara !!}
                      </textarea>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="ipserver" class="col-sm-2 control-label">IP Camara</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="ipserver" name="ipserver" value="{!! $camera->ipserver !!}" placeholder="Ip de Camara">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" id="estado" name="estado" {!! $camera->estado?"checked":"" !!}> Camara activa?</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-danger">Guardar</button>
                    </div>
                  </div>
                </form>           
@endsection