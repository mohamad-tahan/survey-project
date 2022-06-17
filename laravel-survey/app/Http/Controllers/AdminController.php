<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addSurvey(Request $request){
        $survey = new Survey();
        $survey->name = $request->name;
        $survey->save();
        
        return response()->json([
            "status" => "Survey Added"
        ], 200);
}
}