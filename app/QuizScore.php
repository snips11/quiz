<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuizScore extends Model
{
    protected $guarded = [];

    public function quiz(){
        return $this->belongsTo('App\Quiz');
     }

     public function user(){
        return $this->belongsTo('App\User');
     }
}
