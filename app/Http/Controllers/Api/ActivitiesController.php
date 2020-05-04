<?php

namespace App\Http\Controllers\Api;

use App\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\ActivityRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    {
        if ($request->user()->is_admin) {
            return Activity::loadAll();
        }
        return Activity::loadAllMine($request->user()->id);
    }

    /**
     * get all published Activitys
     *
     * @return mixed
     */
    public function publishedActivities()
    {
        return Activity::loadAllPublished();
    }

    /**
     * Get single published Activity
     *
     * @param $slug
     * @return mixed
     */
    public function publishedActivity($slug)
    {
        return Activity::loadPublished($slug);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ActivityRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ActivityRequest $request)
    {
        $user = $request->user();

        $activity = new Activity($request->validated());
        $activity->slug = Str::slug($request->get('title'));

        $user->Activitys()->save($activity);

        return response()->json($activity, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (!$request->user()->is_admin) {
            return Activity::mine($request->user()->id)->findOrFail($id);
        }

        return Activity::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ActivityRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ActivityRequest $request, $id)
    {
        $activity = Activity::findOrFail($id);

        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        $activity->update($data);

        return response()->json($activity, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $activity = Activity::findOrFail($id);

        $activity->delete();

        return response([], 200);
    }
}
