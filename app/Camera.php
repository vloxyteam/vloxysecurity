<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Camera extends Model
{
    protected $fillable = ['centrocomercial', 'direccion','longitud','latitud','dcamara','ipserver','estado'];
}
