<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotificationLpr extends Model
{
    protected $fillable = ['licensePlateText', 'Description','MarkAsRead','cameraid','longitud','latitud','slug','centrocomercial','descamara','direccionCC'];
}
