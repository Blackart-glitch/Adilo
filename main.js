const ComponentB = {
    template: `
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
                    <img src="https://i.ytimg.com/vi/3jWRrafhO7M/maxresdefault.jpg" alt="thumbnail" class="img-fluid">
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
                    <img src="https://i.ytimg.com/vi/3jWRrafhO7M/maxresdefault.jpg" alt="thumbnail" class="img-fluid">
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
                    <img src="https://i.ytimg.com/vi/3jWRrafhO7M/maxresdefault.jpg" alt="thumbnail" class="img-fluid">
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
    `
};

const ComponentA = {
    template: `    <div class="my-4 p-5 fw-bolder">

        <div class="text-center rounded-3 p-5" style="border: 4px; border-style: dashed; border-color: rgb(159, 158, 158);">
            <div class="d-flex justify-content-center align-items-center">
                <img src="https://img.freepik.com/free-vector/file-searching-concept-illustration_114360-327.jpg?w=740&t=st=1703929950~exp=1703930550~hmac=7f14d808a11a651d02b406e225255537fa5a64cff2caa052495f19b7c0fe9d5e"
                    style="height: 50vh; height: 50vh;">
            </div>
            <div class="">
                <p>
                    Say hello to the world
                </p>
                <p class="fw-lighter">
                    Record your first video and share it with your team, friends, followers, and customers.
                </p>
                <p class="d-flex justify-content-center gap-2">
                    <button class="btn btn-info rounded-4 gap-2 d-flex align-items-center">
                        <span class="material-symbols-outlined text-light">
                            videocam
                        </span>
                        New Request
                    </button>
                    <button class="btn btn-danger rounded-4 gap-2 d-flex align-items-center ">
                        <span class="material-symbols-outlined rounded-circle text-bg-light">
                            mic
                        </span>
                        Start Recording
                    </button>
                </p>
            </div>
        </div>
    </div>`
};

const recordingComponent = {
    template: `
         <div class="container-lg p-5" style="background-color: #EAFAFF;">
             <div class="recordingDot d-flex gap-3 align-items-center">
                <span>
                   <img src="https://assets-v2.lottiefiles.com/a/d31bc71c-117c-11ee-ab43-4bfe316be8d0/5mYwsAYWsJ.gif"
                         class="img-fluid" alt="image desc" height="30" width="30" />
                 </span>
                 <span>
                     Live Preview
                 </span>
             </div>
      
             <div class="canvas rounded-2 mt-2" style="background-color: #21455E; min-height: 40vh;">
             </div>
             <div class="d-flex mt-4 justify-content-center container p-4">
                 <button type="button" class="btn btn-info disabled rounded-4 w-50 text-white">Start
                     Recording</button>
             </div>
         </div>
        `
};

const body = {
    template: `
    <div class="row">
            <div class="col-md-2" style="height: 100vh; background-color: #EBF2F6;">
                <div class="container my-3">
                    <span class="gap-3 d-flex align-items-center btn btn-outline-secondary mb-3"
                        @click="currentComponent = 'componentB'">
                        <span class="material-symbols-outlined">
                            movie
                        </span>
                        My Recordings
                    </span>
                    <span class="gap-3 d-flex align-items-center btn btn-outline-secondary mb-3">
                        <span class="material-symbols-outlined">
                            share
                        </span>
                        Requested
                    </span>
                </div>
            </div>
            <div class="col-10">
                <div class="container mx-auto">
                    <div class="gap-2 d-flex align-items-center text-secondary fw-lighter">
                        <span>
                            Snapbyte
                        </span>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <span>
                            My Recordings
                        </span>
                    </div>

                    <div class="row my-2 d-flex align-items-center">
                        <div class="col-3 gap-3 d-flex justify-content-start">
                            <span>
                                My Recordings
                            </span>
                            <span class="fw-bolder">
                                25
                            </span>
                        </div>
                        <div class="col-9">
                            <!-- four buttons -->
                            <div class="d-flex justify-content-start gap-3">
                                <button class="btn btn-outline-secondary rounded-4 d-flex align-items-center">
                                    <span class="material-symbols-outlined">
                                        swap_vert
                                    </span>
                                    By date
                                </button>
                                <button class="btn btn-outline-secondary rounded-4 d-flex align-items-center">
                                    <span class="material-symbols-outlined">
                                        filter_alt
                                    </span>
                                    Filter
                                </button>
                                <button class="btn btn-info rounded-4 gap-2 d-flex align-items-center">
                                    <span class="material-symbols-outlined text-light">
                                        videocam
                                    </span>
                                    New Request
                                </button>
                                <button class="btn btn-danger rounded-4 gap-2 d-flex align-items-center"
                                    data-bs-toggle="modal" data-bs-target="#recordingModal">
                                    <span class="material-symbols-outlined rounded-circle text-bg-light">
                                        mic
                                    </span>
                                    Start Recording
                                </button>

                                <!-- Modal -->
                                <div class="modal modal-md fade" id="recordingModal" tabindex="-1"
                                    aria-labelledby="recordingModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="recordingModalLabel">New Recording</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="savetype">Save the recording in:</label>
                                                        <select name="savetype" id="savetype"
                                                            class="w-100 form-check p-2 rounded-2"
                                                            style="background-color: rgb(246, 243, 243);">
                                                            <option value="1">Project</option>
                                                            <option value="2">New Project</option>
                                                        </select>

                                                    </div>
                                                    <div
                                                        class="mb-3 form-check form-switch container d-flex justify-content-between align-items-center">
                                                        <span class="">Record Screen</span>
                                                        <input class="form-check-input fs-2 toggleSwitch"
                                                            type="checkbox" id="Screen" v-model="recordScreen"
                                                            :class="{ 'green-switch': recordScreen }">
                                                    </div>
                                                    <div
                                                        class="mb-3 form-check form-switch container d-flex w-100 justify-content-between align-items-center">
                                                        <span class="text-start">Record Camera</span>
                                                        <input class="form-check-input fs-2 toggleSwitch"
                                                            type="checkbox" id="Camera" v-model="recordCamera"
                                                            :class="{ 'green-switch': recordCamera }">
                                                    </div>
                                                    <div
                                                        class="mb-3 form-check form-switch container d-flex w-100 justify-content-between align-items-center">
                                                        <span class="text-start">Record Mic</span>
                                                        <input class="form-check-input fs-2 toggleSwitch"
                                                            type="checkbox" id="Mic" v-model="recordMic"
                                                            :class="{ 'green-switch': recordMic }">
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="d-flex justify-content-center container p-4">
                                                <button type="button" class="btn btn-info rounded-4 w-50"
                                                    @click="startRecording">Start
                                                    Recording</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <component :is="currentComponent">

                    </component>
                </div>
            </div>
        </div>
    `
};

const app = Vue.createApp({
    data() {
        return {
            currentComponent: 'componentA',
            mainBody: 'body',
            recordingComponent: 'recordingComponent',
            recordScreen: false,
            recordCamera: false,
            recordMic: false,
        };
    },
    components: {
        componentA: ComponentA,
        componentB: ComponentB
    },
    watch: {
        recordScreen(newVal) {
            if (newVal) {
                // Request screen recording permission
                navigator.mediaDevices.getDisplayMedia({ video: true })
                    .then(stream => {
                        // Handle the stream
                    })
                    .catch(err => {
                        // Handle the error
                        this.recordScreen = false;
                    });
            }
        },
        recordCamera(newVal) {
            if (newVal) {
                // Request camera permission
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => {
                        // Handle the stream
                    })
                    .catch(err => {
                        // Handle the error
                        this.recordCamera = false;
                    });
            }
        },
        recordMic(newVal) {
            if (newVal) {
                // Request microphone permission
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(stream => {
                        // Handle the stream
                    })
                    .catch(err => {
                        // Handle the error
                        this.recordMic = false;
                    });
            }
        }
    },
    methods: {
        startRecording() {
            // Start recording
            this.mainBody = recordingComponent;
        }
    }
});

app.mount('#app');