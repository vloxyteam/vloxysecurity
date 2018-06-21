<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CameraFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'centrocomercial'=>'required|min:3',
            'direccion'=>'required|min:3',
            'centrocomercial'=>'required|min:3',
            'longitud'=>'required',
            'latitud'=>'required',
            'dcamara'=>'required|min:3',
            'ipserver'=>'required|min:3',
        ];
    }
}
