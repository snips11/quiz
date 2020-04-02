<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuizMaster extends Model
{

    protected $dates = ['created_at'];

    protected $guarded = [];

    public function user(){
        return $this->belongsTo('App\User');
     }

     public function scores()
     {
         return $this->hasMany('App\QuizScore');
     }

     public function score()
     {
         return $this->hasOne('App\QuizScore');
     }

     public function first_round()
     {
         return $this->hasOne('App\Round');
     }
}
