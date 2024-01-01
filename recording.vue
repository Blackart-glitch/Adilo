<template>
    <div class="container-lg">
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
            <button type="button" class="btn btn-info disabled rounded-4 w-50 text-white" @click="startRecording">Start
                Recording</button>
        </div>
    </div>
</template>