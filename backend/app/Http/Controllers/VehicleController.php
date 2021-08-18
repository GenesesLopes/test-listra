<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index(VehicleRequest $request)
    {
        $per_page  = $request->input('per_page',10);
        $current_page = $request->input('current_page', 1);
        $search = $request->input('q', '');
        
        if($search !== ''){
            return Vehicle::where('description','like',"%{$search}%")
                ->paginate(
                    $per_page,
                    page:$current_page
                );
        }
        return Vehicle::paginate(
            $per_page,
            page:$current_page
        );
    }
    
}
