<template>
    <!-- Notifications Menu -->
          <div id="map"></div>        
</template>

<script>
       
window.dojoConfig = {
    packages: [
      {
        name: "vue",
        location: "https://unpkg.com/vue/dist/",
        main: "vue"
      }
    ]
};




    export default {
        props:[],
        data()
        {
            return{
                notifications:[]
            }

        },
        mounted() {
             Echo.channel('channelDemoEvent')
                .listen('eventTrigger',(e)=>{        
                    console.log(e)
                    this.notifications.unshift({
                            description: 'Placa: ' + e.messagge + 'Reportada',
                            url:'/index/'+ e,
                            time: new Date()                            
                        }
                    )  
                });
        }
    }
</script>
