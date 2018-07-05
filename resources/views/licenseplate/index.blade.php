@extends('admin.layout')
@section('content')
                <form class="form-horizontal" method="post">  
                    <div class="box-body">              
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
                            <label for="placatxt" class="col-sm-2 control-label">Buscar Placa</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="placatxt" name="placatxt" placeholder="Ingresar placa a buscar">
                            </div>
                        </div> 

                        <div class="form-group">
                            <label for="cameras" class="col-sm-2 control-label">Seleccione el centro comercial</label>
                            <div class="col-sm-10">
                                <select name="cameras" class="form-control">
                                    @foreach($cameras as $camera)
                                        <option value="{{ $camera->cameraid }}"> {{ $camera->centrocomercial }} </option>                                
                                    @endforeach
                                </select> 
                            </div>
                        </div>                                                            

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-danger">Buscar Camara</button>
                            </div>
                        </div>
                    </div>
                </form>     
                
                
@endsection