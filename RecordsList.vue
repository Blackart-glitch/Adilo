<template>
    <div class="row my-4 fw-bolder">
        <div class="col-2">
            Recordings
        </div>
        <div class="col-5">
            Title
        </div>
        <div class="col-1">
            Views
        </div>
        <div class="col-1">
            Sizes
        </div>
        <div class="col-2">
            Last Modiified
        </div>
        <div class="col-1">

        </div>
    </div>

    <div class="recordsList">
        <div class="row my-2 d-flex align-items-center .recordItem">
            <div class="col-2">
                <!-- holds the video thumbnail -->
                <div class="rounded-4 bg-secondary">
                    <img src="https://i.ytimg.com/vi/3jWRrafhO7M/maxresdefault.jpg" alt="thumbnail" class="img-fluid">
                </div>
            </div>
            <div class="col-5">
                <div>
                    <a href="#" class="text-decoration-none d-block text-dark fw-bolder">
                        My christmas video
                    </a>
                    <span class="text-secondary fw-lighter">
                        This video was recorded on christmas day
                    </span>
                </div>
            </div>
            <div class="col-1">
                1.5k
            </div>
            <div class="col-1">
                2.5mb
            </div>
            <div class="col-2">
                2 days ago
            </div>
            <div class="col-1">
                <span class="material-symbols-outlined">
                    more_horiz
                </span>
            </div>
        </div>
    </div>

    <!-- extra placeholders -->
    <div class="row my-2 d-flex align-items-center .recordItem">
        <div class="col-2">
            <div class="rounded-4 bg-secondary">
                <img src="https://example.com/thumbnail2.jpg" alt="thumbnail" class="img-fluid">
            </div>
        </div>
        <div class="col-5">
            <div>
                <a href="#" class="text-decoration-none d-block text-dark fw-bolder">
                    My birthday video
                </a>
                <span class="text-secondary fw-lighter">
                    This video was recorded on my birthday
                </span>
            </div>
        </div>
        <div class="col-1">2k</div>
        <div class="col-1">3mb</div>
        <div class="col-2">1 week ago</div>
        <div class="col-1">
            <span class="material-symbols-outlined">more_horiz</span>
        </div>
    </div>

    <div class="row my-2 d-flex align-items-center .recordItem">
        <div class="col-2">
            <div class="rounded-4 bg-secondary">
                <img src="https://example.com/thumbnail3.jpg" alt="thumbnail" class="img-fluid">
            </div>
        </div>
        <div class="col-5">
            <div>
                <a href="#" class="text-decoration-none d-block text-dark fw-bolder">
                    My wedding video
                </a>
                <span class="text-secondary fw-lighter">
                    This video was recorded on my wedding day
                </span>
            </div>
        </div>
        <div class="col-1">3k</div>
        <div class="col-1">4mb</div>
        <div class="col-2">1 month ago</div>
        <div class="col-1">
            <span class="material-symbols-outlined">more_horiz</span>
        </div>
    </div>

    <div class="row my-2 d-flex align-items-center .recordItem">
        <div class="col-2">
            <div class="rounded-4 bg-secondary">
                <img src="https://example.com/thumbnail4.jpg" alt="thumbnail" class="img-fluid">
            </div>
        </div>
        <div class="col-5">
            <div>
                <a href="#" class="text-decoration-none d-block text-dark fw-bolder">
                    My graduation video
                </a>
                <span class="text-secondary fw-lighter">
                    This video was recorded on my graduation day
                </span>
            </div>
        </div>
        <div class="col-1">4k</div>
        <div class="col-1">5mb</div>
        <div class="col-2">1 year ago</div>
        <div class="col-1">
            <span class="material-symbols-outlined">more_horiz</span>
        </div>
    </div>
</template>