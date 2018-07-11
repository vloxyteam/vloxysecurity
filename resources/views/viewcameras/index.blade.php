@extends('admin.layout')
@section('content')
    
    @foreach($listas as $lista)
    <div class="embed-responsive embed-responsive-16by9">
        <embed class="embed-responsive-item" src="http://127.0.0.1:8088/index2.html?parameter={!! $lista !!}">                    
    </div>        
    @endforeach
@endsection



