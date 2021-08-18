<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Models\Vehicle;
use Cache;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index(VehicleRequest $request)
    {
        $per_page  = $request->input('per_page', 10);
        $current_page = $request->input('current_page', 1);
        $search = $request->input('q', '');
        $uri = $request->getRequestUri();
        if ($search !== '') {
            return Cache::remember($uri, 60, function () use ($search, $per_page, $current_page) {
                return Vehicle::where('description', 'like', "%{$search}%")
                    ->paginate(
                        $per_page,
                        page: $current_page
                    );
            });
        }
        return Cache::remember($uri, 60, function () use ($per_page, $current_page) {
            return Vehicle::paginate(
                $per_page,
                page: $current_page
            );
        });
    }
}
