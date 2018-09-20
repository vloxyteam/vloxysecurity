@extends('admin.layout')
@section('content')    

    <h1>{{isLocalhost()}}</h1>

    <div id="timeline" data-columns>

        @foreach($listas as $lista)
        <h3>{!! $lista !!}</h3>
                <div class="item embed-responsive embed-responsive-16by9">
                        
                        <!-- <video id="test_video" controls autoplay class="embed-responsive-item">
                            <source src="{!! $lista !!}" type="application/x-rtsp">                
                        </video>             
                        -->
                        <embed class="embed-responsive-item" src="http://127.0.0.1:8088/index2.html?parameter={!! $lista !!}">                    
                </div>                      
        @endforeach
    </div> 
@endsection




