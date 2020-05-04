<?php

namespace Tests\Feature;

use App\User;
use App\Activity;
use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Str;

class ActivityTest extends TestCase
{
    use DatabaseTransactions;

    public $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = $this->createAdminUser();
    }

    private function createAdminUser()
    {
        return User::create([
            'name' => 'Phil Collins',
            'email' => 'phil@bighousecreative.co.uk',
            'password' => bcrypt('123456789'),
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ]);
    }

    /** @test */
    public function that_only_loading_activities_for_provided_user_id()
    {
        $this->seedUnpublishedActivities();

        $activities = Activity::loadAllMine($this->user->id);

        $this->assertCount(15, $activities);

    }

    private function seedUnpublishedActivities($num = 15)
    {
        factory(Activity::class, $num)->create([
            'user_id' => $this->user->id,
            'published' => false,
        ]);
    }

    /** @test */
    public function that_load_all_activities()
    {
        $this->seedUnpublishedActivities();

        $activities = Activity::loadAll();

        $this->assertCount(15, $activities);
    }

    /** @test */
    public function that_loaded_only_published_activities()
    {
        $this->seedPublishedActivities();

        $activities = Activity::published()->get();

        $this->assertCount(5, $activities);
    }

    private function seedPublishedActivities($num = 5)
    {
        factory(Activity::class, $num)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);
    }

    /** @test */
    public function that_load_only_published_actiivity()
    {
        $this->seedUnpublishedActivities();

        factory(Activity::class, 1)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);

        $this->assertEquals(1, Activity::published()->count());
    }

    /** @test */
    public function that_activity_get_published_and_total_number_of_published_get_changed()
    {
        $this->seedPublishedActivities(2);
        $this->seedUnpublishedActivities(5);

        $date = Carbon::now()->format('Y-m-d');

        $activity = Activity::where('published', false)->first();
        $activity->published = true;
        $activity->published_at = $date;

        $activity->save();

        $this->assertEquals($activity->published, true);
        $this->assertEquals($activity->published_at->format('Y-m-d'), $date);

        $activities = Activity::where('published', true)->get();

        $this->assertEquals($activities->count(), 3);
    }

    /** @test */
    public function that_activity_get_unpublished_and_total_number_of_unpublished_get_changed()
    {
        $this->seedPublishedActivities(2);
        $this->seedUnpublishedActivities(5);

        $activity = Activity::where('published', true)->first();
        $activity->published = false;
        $activity->published_at = null;

        $activity->save();

        $this->assertEquals($activity->published, false);
        $this->assertEquals($activity->published_at, null);

        $activities = Activity::where('published', false)->get();

        $this->assertEquals($activities->count(), 6);
    }
}
