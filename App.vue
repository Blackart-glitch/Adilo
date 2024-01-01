<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue App</title>
</head>
<body>
    <div id="app">
        <button @click="currentComponent = 'componentA'">Show Component A</button>
        <button @click="currentComponent = 'componentB'">Show Component B</button>
        <component :is="currentComponent"></component>
    </div>

    <script src="https://unpkg.com/vue@3"></script>
    <script>
        const ComponentA = {
            template: `<div>Component A</div>`
        };

        const ComponentB = {
            template: `<div>Component B</div>`
        };

        const app = Vue.createApp({
            data() {
                return {
                    currentComponent: 'componentA'
                };
            },
            components: {
                componentA: ComponentA,
                componentB: ComponentB
            }
        });

        app.mount('#app');
    </script>
</body>
</html>