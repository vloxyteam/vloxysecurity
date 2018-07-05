<html>
<head>
    
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Curso Vue</title>
</head>
<body>
    <div><h1>Alert Box</h1> </div>
    <div id="app">
        <h1>Alert Box</h1>        
        <notification-alert></notification-alert>        
    </div>

    <script src="{{ URL::asset('js/app.js')}}"></script>

    
    
</body>
</html>